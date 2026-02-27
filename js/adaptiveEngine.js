// Adaptive Engine: IRT-based CAT (3PL Model)
// Handles: probability calculation, Fisher information, EAP estimation,
//          question selection with topic balancing, termination criteria

const AdaptiveEngine = (() => {

    // ─── 3PL IRT Probability ────────────────────────────────────────────────────
    // P(correct | θ) = c + (1−c) / (1 + exp(−1.7a(θ−b)))
    function irtProbability(theta, a, b, c) {
        const D = 1.7; // scaling constant
        const exponent = D * a * (theta - b);
        return c + (1 - c) / (1 + Math.exp(-exponent));
    }

    // ─── Fisher Information ─────────────────────────────────────────────────────
    // I(θ) = D²a²(1−c) × [P(θ)−c]² / [(1−c) × P²(θ)]
    function fisherInformation(theta, a, b, c) {
        const D = 1.7;
        const P = irtProbability(theta, a, b, c);
        const Q = 1 - P;
        if (P <= c + 0.001 || P >= 0.999) return 0.0001; // avoid division by zero
        const numerator = D * D * a * a * (1 - c) * Math.pow(P - c, 2);
        const denominator = Q * P * P * (1 - c);
        return numerator / denominator;
    }

    // ─── Standard Error of Measurement ─────────────────────────────────────────
    function standardError(theta, responses) {
        if (responses.length === 0) return 999;
        let totalInfo = responses.reduce((sum, r) => {
            return sum + fisherInformation(theta, r.question.a, r.question.b, r.question.c);
        }, 0);
        return totalInfo > 0 ? 1 / Math.sqrt(totalInfo) : 999;
    }

    // ─── EAP Ability Estimation ─────────────────────────────────────────────────
    // Numerically integrates posterior over theta grid: θ̂ = E[θ|responses]
    function eapEstimate(responses, priorMean = 0, priorSD = 1.5) {
        if (responses.length === 0) return priorMean;

        const gridSize = 61;
        const thetaMin = -4, thetaMax = 4;
        const thetaGrid = Array.from({ length: gridSize }, (_, i) =>
            thetaMin + (i / (gridSize - 1)) * (thetaMax - thetaMin)
        );

        // Compute posterior at each grid point
        const posterior = thetaGrid.map(theta => {
            // Prior: normal pdf
            const priorLogProb = -0.5 * Math.pow((theta - priorMean) / priorSD, 2);

            // Likelihood: product of IRT probabilities
            let logLikelihood = 0;
            for (const r of responses) {
                const P = irtProbability(theta, r.question.a, r.question.b, r.question.c);
                const prob = r.correct ? P : (1 - P);
                logLikelihood += Math.log(Math.max(prob, 1e-10));
            }

            return Math.exp(priorLogProb + logLikelihood);
        });

        // Normalize
        const total = posterior.reduce((s, p) => s + p, 0);
        if (total === 0) return priorMean;

        // Expected value (EAP)
        const eap = thetaGrid.reduce((s, t, i) => s + t * (posterior[i] / total), 0);
        return Math.max(-4, Math.min(4, eap));
    }

    // ─── Topic-Specific EAP ─────────────────────────────────────────────────────
    function topicEAP(topic, responses, priorMean = 0, priorSD = 1.5) {
        const topicResponses = responses.filter(r => r.question.topic === topic);
        return eapEstimate(topicResponses, priorMean, priorSD);
    }

    // ─── Next Question Selection ─────────────────────────────────────────────────
    // Selects next question maximizing information with topic balancing & exposure control
    function selectNextQuestion(globalTheta, topicThetas, usedIds, questionBank) {
        const available = questionBank.filter(q => !usedIds.has(q.id));
        if (available.length === 0) return null;

        // Count questions used per topic
        const topicCounts = {};
        TOPICS.forEach(t => { topicCounts[t] = 0; });
        usedIds.forEach(id => {
            const q = questionBank.find(q => q.id === id);
            if (q) topicCounts[q.topic] = (topicCounts[q.topic] || 0) + 1;
        });

        // Identify underrepresented topics (topic balancing)
        const totalUsed = usedIds.size;
        const expectedPerTopic = totalUsed / TOPICS.length;
        const underrepresentedTopics = TOPICS.filter(t => (topicCounts[t] || 0) < expectedPerTopic + 0.5);

        // Score each available question
        const scored = available.map(q => {
            const theta = topicThetas[q.topic] !== undefined ? topicThetas[q.topic] : globalTheta;
            const info = fisherInformation(theta, q.a, q.b, q.c);

            // Topic balancing boost: if topic is underrepresented, multiply info by 1.5
            const isUnderrepresented = underrepresentedTopics.includes(q.topic) ||
                Object.values(topicCounts).every(c => c === 0); // first question
            const topicBoost = isUnderrepresented ? 1.5 : 1.0;

            return { question: q, score: info * topicBoost };
        });

        // Sort by score descending
        scored.sort((a, b) => b.score - a.score);

        // Exposure control: randomly pick from top 3 candidates
        const topK = Math.min(3, scored.length);
        const idx = Math.floor(Math.random() * topK);
        return scored[idx].question;
    }

    // ─── Termination Check ──────────────────────────────────────────────────────
    function shouldTerminate(seTheta, questionCount, maxQuestions = 20, seThreshold = 0.35) {
        if (questionCount >= maxQuestions) return { terminate: true, reason: 'max_questions' };
        if (questionCount >= 8 && seTheta < seThreshold) return { terminate: true, reason: 'se_threshold' };
        return { terminate: false, reason: null };
    }

    // ─── Mastery Level Classification ──────────────────────────────────────────
    function masteryLevel(theta) {
        if (theta < -1.5) return { label: 'Below Basic', level: 0, color: '#ef4444' };
        if (theta < -0.5) return { label: 'Basic', level: 1, color: '#f97316' };
        if (theta < 0.5) return { label: 'Developing', level: 2, color: '#eab308' };
        if (theta < 1.5) return { label: 'Proficient', level: 3, color: '#22c55e' };
        return { label: 'Advanced', level: 4, color: '#6366f1' };
    }

    // ─── Competency Profile ─────────────────────────────────────────────────────
    function generateProfile(globalTheta, topicThetas, responses) {
        const seTheta = standardError(globalTheta, responses);
        const ci95 = 1.96 * seTheta;
        const totalQuestions = responses.length;
        const correct = responses.filter(r => r.correct).length;
        const accuracy = totalQuestions > 0 ? (correct / totalQuestions * 100).toFixed(1) : 0;

        const topicProfiles = TOPICS.map(topic => {
            const theta = topicThetas[topic] !== undefined ? topicThetas[topic] : 0;
            const topicResps = responses.filter(r => r.question.topic === topic);
            const mastery = masteryLevel(theta);
            const correctInTopic = topicResps.filter(r => r.correct).length;

            return {
                topic,
                theta: parseFloat(theta.toFixed(3)),
                mastery,
                questionsAsked: topicResps.length,
                correctAnswers: correctInTopic,
                accuracy: topicResps.length > 0 ? ((correctInTopic / topicResps.length) * 100).toFixed(1) : 'N/A'
            };
        });

        const strengths = topicProfiles.filter(t => t.theta >= 0.5).sort((a, b) => b.theta - a.theta);
        const weaknesses = topicProfiles.filter(t => t.theta < -0.5).sort((a, b) => a.theta - b.theta);
        const developing = topicProfiles.filter(t => t.theta >= -0.5 && t.theta < 0.5);

        return {
            globalTheta: parseFloat(globalTheta.toFixed(3)),
            globalMastery: masteryLevel(globalTheta),
            seTheta: parseFloat(seTheta.toFixed(3)),
            ci95: parseFloat(ci95.toFixed(3)),
            ciLow: parseFloat((globalTheta - ci95).toFixed(3)),
            ciHigh: parseFloat((globalTheta + ci95).toFixed(3)),
            totalQuestions,
            correct,
            accuracy,
            topicProfiles,
            strengths,
            weaknesses,
            developing
        };
    }

    return {
        irtProbability,
        fisherInformation,
        standardError,
        eapEstimate,
        topicEAP,
        selectNextQuestion,
        shouldTerminate,
        masteryLevel,
        generateProfile
    };
})();
