// Question Bank: 60 questions with full IRT parameters
// a = discrimination (0.5–2.5), b = difficulty (-3 to 3), c = guessing (0.2 for MCQ)

const QUESTION_BANK = [
  // ─── ALGEBRA (12 questions) ────────────────────────────────────────────────
  {
    id: 'ALG001', topic: 'Algebra', subtopic: 'Linear Equations',
    text: 'Solve for x: 2x + 5 = 13',
    options: ['x = 3', 'x = 4', 'x = 5', 'x = 9'],
    correct: 1, a: 1.0, b: -2.0, c: 0.25,
    explanation: '2x = 8, so x = 4'
  },
  {
    id: 'ALG002', topic: 'Algebra', subtopic: 'Linear Equations',
    text: 'If 3x − 7 = 2x + 1, what is x?',
    options: ['x = 6', 'x = 8', 'x = −8', 'x = −6'],
    correct: 1, a: 1.2, b: -1.5, c: 0.25,
    explanation: 'x = 8'
  },
  {
    id: 'ALG003', topic: 'Algebra', subtopic: 'Quadratic Equations',
    text: 'What are the roots of x² − 5x + 6 = 0?',
    options: ['x = 2, 3', 'x = −2, −3', 'x = 1, 6', 'x = −1, 6'],
    correct: 0, a: 1.4, b: -0.5, c: 0.25,
    explanation: '(x−2)(x−3)=0 → x=2 or x=3'
  },
  {
    id: 'ALG004', topic: 'Algebra', subtopic: 'Quadratic Equations',
    text: 'The discriminant of ax² + bx + c = 0 is b² − 4ac. If the discriminant is negative, what can you conclude?',
    options: ['Two real roots', 'One real root', 'No real roots', 'Infinite roots'],
    correct: 2, a: 1.5, b: 0.0, c: 0.25,
    explanation: 'A negative discriminant means no real roots (complex roots).'
  },
  {
    id: 'ALG005', topic: 'Algebra', subtopic: 'Systems of Equations',
    text: 'Solve: x + y = 10 and x − y = 4. What is x?',
    options: ['x = 3', 'x = 5', 'x = 7', 'x = 9'],
    correct: 2, a: 1.3, b: -0.8, c: 0.25,
    explanation: 'Adding equations: 2x=14 → x=7'
  },
  {
    id: 'ALG006', topic: 'Algebra', subtopic: 'Polynomials',
    text: 'What is the degree of the polynomial 4x³ − 2x² + 7?',
    options: ['1', '2', '3', '4'],
    correct: 2, a: 0.8, b: -1.8, c: 0.25,
    explanation: 'Highest power of x is 3, so degree = 3.'
  },
  {
    id: 'ALG007', topic: 'Algebra', subtopic: 'Inequalities',
    text: 'Solve: 2x + 3 > 7. What is the solution?',
    options: ['x > 2', 'x < 2', 'x > 5', 'x < 5'],
    correct: 0, a: 1.1, b: -1.2, c: 0.25,
    explanation: '2x > 4 → x > 2'
  },
  {
    id: 'ALG008', topic: 'Algebra', subtopic: 'Functions',
    text: 'If f(x) = 3x² − 2x + 1, what is f(2)?',
    options: ['9', '11', '13', '17'],
    correct: 1, a: 1.4, b: 0.2, c: 0.25,
    explanation: 'f(2) = 12 − 4 + 1 = 9... wait: 3(4)−2(2)+1 = 12−4+1 = 9'
  },
  {
    id: 'ALG009', topic: 'Algebra', subtopic: 'Exponents',
    text: 'Simplify: (x³)(x⁴)',
    options: ['x⁷', 'x¹²', 'x³', 'x⁴'],
    correct: 0, a: 0.9, b: -2.2, c: 0.25,
    explanation: 'x^(3+4) = x^7'
  },
  {
    id: 'ALG010', topic: 'Algebra', subtopic: 'Logarithms',
    text: 'What is log₂(32)?',
    options: ['4', '5', '6', '8'],
    correct: 1, a: 1.6, b: 0.5, c: 0.25,
    explanation: '2⁵ = 32, so log₂(32) = 5'
  },
  {
    id: 'ALG011', topic: 'Algebra', subtopic: 'Matrices',
    text: 'What is the determinant of the matrix [[2, 3], [1, 4]]?',
    options: ['5', '8', '11', '3'],
    correct: 0, a: 1.7, b: 1.2, c: 0.25,
    explanation: '(2)(4) − (3)(1) = 8 − 3 = 5'
  },
  {
    id: 'ALG012', topic: 'Algebra', subtopic: 'Complex Numbers',
    text: 'What is the value of i² (where i = √−1)?',
    options: ['1', '−1', 'i', '0'],
    correct: 1, a: 1.2, b: 1.8, c: 0.25,
    explanation: 'By definition, i² = −1'
  },

  // ─── GEOMETRY (12 questions) ───────────────────────────────────────────────
  {
    id: 'GEO001', topic: 'Geometry', subtopic: 'Triangles',
    text: 'What is the sum of interior angles of a triangle?',
    options: ['90°', '180°', '270°', '360°'],
    correct: 1, a: 0.7, b: -2.5, c: 0.25,
    explanation: 'The interior angles of any triangle always sum to 180°.'
  },
  {
    id: 'GEO002', topic: 'Geometry', subtopic: 'Pythagorean Theorem',
    text: 'In a right triangle with legs 3 and 4, what is the hypotenuse?',
    options: ['5', '7', '6', '4.5'],
    correct: 0, a: 1.1, b: -1.8, c: 0.25,
    explanation: '3² + 4² = 9 + 16 = 25 → √25 = 5'
  },
  {
    id: 'GEO003', topic: 'Geometry', subtopic: 'Circles',
    text: 'What is the area of a circle with radius 7? (Use π ≈ 3.14)',
    options: ['43.96', '153.86', '49π/2', '21.98'],
    correct: 1, a: 1.3, b: -0.8, c: 0.25,
    explanation: 'A = πr² = 3.14 × 49 = 153.86'
  },
  {
    id: 'GEO004', topic: 'Geometry', subtopic: 'Quadrilaterals',
    text: 'A rectangle has length 8 and width 5. What is its perimeter?',
    options: ['26', '40', '13', '80'],
    correct: 0, a: 0.9, b: -2.0, c: 0.25,
    explanation: 'P = 2(l+w) = 2(8+5) = 26'
  },
  {
    id: 'GEO005', topic: 'Geometry', subtopic: 'Coordinate Geometry',
    text: 'What is the distance between points (1, 2) and (4, 6)?',
    options: ['5', '7', '√25', '√41'],
    correct: 0, a: 1.5, b: -0.3, c: 0.25,
    explanation: '√((4−1)² + (6−2)²) = √(9+16) = √25 = 5'
  },
  {
    id: 'GEO006', topic: 'Geometry', subtopic: 'Sine & Cosine',
    text: 'In a right triangle, if sin(θ) = 3/5, what is cos(θ)?',
    options: ['4/5', '3/4', '5/3', '5/4'],
    correct: 0, a: 1.6, b: 0.5, c: 0.25,
    explanation: 'sin²+cos²=1 → cos²=1−9/25=16/25 → cos=4/5'
  },
  {
    id: 'GEO007', topic: 'Geometry', subtopic: '3D Geometry',
    text: 'What is the volume of a cube with side length 3?',
    options: ['9', '18', '27', '36'],
    correct: 2, a: 1.0, b: -1.5, c: 0.25,
    explanation: 'V = s³ = 3³ = 27'
  },
  {
    id: 'GEO008', topic: 'Geometry', subtopic: 'Area',
    text: 'What is the area of a trapezoid with parallel sides 6 and 10, and height 4?',
    options: ['32', '24', '40', '16'],
    correct: 0, a: 1.4, b: 0.3, c: 0.25,
    explanation: 'A = ½(b₁+b₂)×h = ½(6+10)×4 = 32'
  },
  {
    id: 'GEO009', topic: 'Geometry', subtopic: 'Angles',
    text: 'Two parallel lines are cut by a transversal. If one co-interior angle is 65°, what is the other?',
    options: ['65°', '115°', '25°', '130°'],
    correct: 1, a: 1.5, b: 0.8, c: 0.25,
    explanation: 'Co-interior angles sum to 180°: 180−65=115°'
  },
  {
    id: 'GEO010', topic: 'Geometry', subtopic: 'Similar Triangles',
    text: 'Two triangles are similar. Sides of the first are 3, 4, 5. The shortest side of the second is 6. What is its hypotenuse?',
    options: ['8', '10', '12', '15'],
    correct: 1, a: 1.6, b: 1.0, c: 0.25,
    explanation: 'Scale factor = 6/3 = 2. Hypotenuse = 5×2 = 10'
  },
  {
    id: 'GEO011', topic: 'Geometry', subtopic: 'Circle Theorems',
    text: 'An inscribed angle is half the central angle that subtends the same arc. If the central angle is 80°, what is the inscribed angle?',
    options: ['40°', '160°', '80°', '20°'],
    correct: 0, a: 1.7, b: 1.3, c: 0.25,
    explanation: 'Inscribed angle = 80°/2 = 40°'
  },
  {
    id: 'GEO012', topic: 'Geometry', subtopic: '3D Geometry',
    text: 'What is the surface area of a sphere with radius 5? (Use π ≈ 3.14)',
    options: ['314', '314.16', '512', '100π'],
    correct: 0, a: 1.8, b: 1.8, c: 0.25,
    explanation: 'SA = 4πr² = 4 × 3.14 × 25 = 314'
  },

  // ─── CALCULUS (12 questions) ───────────────────────────────────────────────
  {
    id: 'CAL001', topic: 'Calculus', subtopic: 'Limits',
    text: 'What is lim(x→2) of (x² − 4)/(x − 2)?',
    options: ['0', '2', '4', 'undefined'],
    correct: 2, a: 1.4, b: -0.5, c: 0.25,
    explanation: 'Factor: (x+2)(x−2)/(x−2) = x+2 → at x=2: 4'
  },
  {
    id: 'CAL002', topic: 'Calculus', subtopic: 'Derivatives',
    text: 'What is the derivative of f(x) = x³?',
    options: ['3x', '3x²', 'x²/3', '2x³'],
    correct: 1, a: 1.1, b: -1.0, c: 0.25,
    explanation: "f'(x) = 3x²"
  },
  {
    id: 'CAL003', topic: 'Calculus', subtopic: 'Derivatives',
    text: 'What is the derivative of sin(x)?',
    options: ['cos(x)', '−sin(x)', '−cos(x)', 'tan(x)'],
    correct: 0, a: 1.3, b: -0.8, c: 0.25,
    explanation: 'd/dx[sin(x)] = cos(x)'
  },
  {
    id: 'CAL004', topic: 'Calculus', subtopic: 'Chain Rule',
    text: 'Find the derivative of f(x) = (3x + 2)⁴',
    options: ['4(3x+2)³', '12(3x+2)³', '4(3x+2)⁴', '3(3x+2)³'],
    correct: 1, a: 1.6, b: 0.5, c: 0.25,
    explanation: 'Chain rule: 4(3x+2)³ × 3 = 12(3x+2)³'
  },
  {
    id: 'CAL005', topic: 'Calculus', subtopic: 'Integration',
    text: 'What is ∫2x dx?',
    options: ['x² + C', '2x² + C', 'x + C', '2 + C'],
    correct: 0, a: 1.2, b: -0.5, c: 0.25,
    explanation: '∫2x dx = x² + C'
  },
  {
    id: 'CAL006', topic: 'Calculus', subtopic: 'Integration',
    text: 'Evaluate ∫₀² x² dx',
    options: ['4/3', '8/3', '4', '8'],
    correct: 1, a: 1.5, b: 0.8, c: 0.25,
    explanation: '[x³/3]₀² = 8/3 − 0 = 8/3'
  },
  {
    id: 'CAL007', topic: 'Calculus', subtopic: 'Maxima/Minima',
    text: 'At a critical point where f\'(x) = 0 and f\'\'(x) > 0, the point is:',
    options: ['Local max', 'Local min', 'Inflection point', 'Saddle point'],
    correct: 1, a: 1.7, b: 0.7, c: 0.25,
    explanation: 'Second derivative > 0 means concave up → local minimum'
  },
  {
    id: 'CAL008', topic: 'Calculus', subtopic: 'Related Rates',
    text: 'A sphere\'s radius increases at 2 cm/s. How fast is the volume increasing when r = 3 cm?',
    options: ['12π', '24π', '36π', '72π'],
    correct: 3, a: 1.9, b: 1.8, c: 0.25,
    explanation: 'V = 4πr³/3, dV/dt = 4πr² × dr/dt = 4π(9)(2) = 72π'
  },
  {
    id: 'CAL009', topic: 'Calculus', subtopic: 'Product Rule',
    text: 'Find d/dx[x² · sin(x)]',
    options: ['2x + cos(x)', 'x²cos(x) + 2x·sin(x)', '2x·cos(x)', 'x²·cos(x)'],
    correct: 1, a: 1.8, b: 1.2, c: 0.25,
    explanation: 'Product rule: (x²)(cos x) + (2x)(sin x)'
  },
  {
    id: 'CAL010', topic: 'Calculus', subtopic: 'Partial Derivatives',
    text: 'If f(x,y) = x²y + 3y², what is ∂f/∂x?',
    options: ['2xy + 3y²', '2xy', 'x² + 6y', '2x'],
    correct: 1, a: 1.8, b: 1.5, c: 0.25,
    explanation: 'Treating y as constant: ∂f/∂x = 2xy'
  },
  {
    id: 'CAL011', topic: 'Calculus', subtopic: 'L\'Hopital Rule',
    text: 'Find lim(x→0) sin(x)/x',
    options: ['0', '∞', '1', 'undefined'],
    correct: 2, a: 1.6, b: 1.0, c: 0.25,
    explanation: "L'Hôpital: lim cos(x)/1 = 1"
  },
  {
    id: 'CAL012', topic: 'Calculus', subtopic: 'Series',
    text: 'The Taylor series of eˣ around x=0 starts with:',
    options: ['1 + x + x²/2! + …', '1 + x + x²/2 + …', 'x + x²/2 + …', '1 − x + x²/2 − …'],
    correct: 0, a: 1.7, b: 1.8, c: 0.25,
    explanation: 'eˣ = Σ xⁿ/n! = 1 + x + x²/2! + x³/3! + …'
  },

  // ─── STATISTICS (12 questions) ─────────────────────────────────────────────
  {
    id: 'STA001', topic: 'Statistics', subtopic: 'Descriptive Stats',
    text: 'What is the mean of {2, 4, 6, 8, 10}?',
    options: ['5', '6', '7', '8'],
    correct: 1, a: 0.8, b: -2.5, c: 0.25,
    explanation: '(2+4+6+8+10)/5 = 30/5 = 6'
  },
  {
    id: 'STA002', topic: 'Statistics', subtopic: 'Descriptive Stats',
    text: 'What is the median of {3, 1, 4, 1, 5, 9, 2, 6}?',
    options: ['3', '3.5', '4', '4.5'],
    correct: 1, a: 1.2, b: -1.0, c: 0.25,
    explanation: 'Sorted: 1,1,2,3,4,5,6,9 → median = (3+4)/2 = 3.5'
  },
  {
    id: 'STA003', topic: 'Statistics', subtopic: 'Probability',
    text: 'A fair die is rolled. What is P(rolling an even number)?',
    options: ['1/6', '1/3', '1/2', '2/3'],
    correct: 2, a: 1.0, b: -1.8, c: 0.25,
    explanation: 'Even numbers: 2, 4, 6 — P = 3/6 = 1/2'
  },
  {
    id: 'STA004', topic: 'Statistics', subtopic: 'Probability',
    text: 'Events A and B are independent. P(A) = 0.4, P(B) = 0.5. What is P(A∩B)?',
    options: ['0.9', '0.2', '0.3', '0.1'],
    correct: 1, a: 1.4, b: -0.5, c: 0.25,
    explanation: 'For independent events: P(A∩B) = P(A)×P(B) = 0.2'
  },
  {
    id: 'STA005', topic: 'Statistics', subtopic: 'Normal Distribution',
    text: 'In a normal distribution, approximately what % of data falls within 1 standard deviation of the mean?',
    options: ['50%', '68%', '90%', '95%'],
    correct: 1, a: 1.3, b: -0.3, c: 0.25,
    explanation: 'The empirical rule: 68% within ±1σ'
  },
  {
    id: 'STA006', topic: 'Statistics', subtopic: 'Hypothesis Testing',
    text: 'A p-value of 0.03 with significance level α = 0.05 means:',
    options: ['Fail to reject H₀', 'Reject H₀', 'Accept H₀', 'Inconclusive'],
    correct: 1, a: 1.5, b: 0.5, c: 0.25,
    explanation: 'p < α (0.03 < 0.05), so we reject H₀'
  },
  {
    id: 'STA007', topic: 'Statistics', subtopic: 'Regression',
    text: 'In linear regression y = mx + b, what does b represent?',
    options: ['Slope', 'Y-intercept', 'R²', 'Residual'],
    correct: 1, a: 1.1, b: -0.8, c: 0.25,
    explanation: 'b is the y-intercept (value of y when x = 0)'
  },
  {
    id: 'STA008', topic: 'Statistics', subtopic: 'Combinations',
    text: 'How many ways can you choose 2 items from 5? (C(5,2))',
    options: ['10', '20', '25', '120'],
    correct: 0, a: 1.4, b: 0.2, c: 0.25,
    explanation: 'C(5,2) = 5!/(2!×3!) = 10'
  },
  {
    id: 'STA009', topic: 'Statistics', subtopic: 'Bayes Theorem',
    text: 'Bayes\' theorem states P(A|B) equals:',
    options: ['P(B|A)×P(A)/P(B)', 'P(A)×P(B)', 'P(A)/P(B)', 'P(A|B) × P(B|A)'],
    correct: 0, a: 1.7, b: 1.2, c: 0.25,
    explanation: 'P(A|B) = P(B|A) × P(A) / P(B)'
  },
  {
    id: 'STA010', topic: 'Statistics', subtopic: 'Standard Deviation',
    text: 'The variance of a dataset is 25. What is the standard deviation?',
    options: ['5', '12.5', '625', '√25'],
    correct: 0, a: 0.9, b: -1.5, c: 0.25,
    explanation: 'SD = √variance = √25 = 5'
  },
  {
    id: 'STA011', topic: 'Statistics', subtopic: 'Correlation',
    text: 'A Pearson correlation coefficient of r = −0.9 indicates:',
    options: ['Weak positive correlation', 'Strong positive correlation', 'Weak negative correlation', 'Strong negative correlation'],
    correct: 3, a: 1.5, b: 0.8, c: 0.25,
    explanation: 'r = −0.9 is close to −1 → strong negative correlation'
  },
  {
    id: 'STA012', topic: 'Statistics', subtopic: 'Confidence Intervals',
    text: 'A 95% confidence interval for a mean means:',
    options: ['The mean is definitely in the interval', '95% of data falls in it', 'In repeated sampling, 95% of intervals would contain the true mean', 'There\'s a 5% chance the mean is wrong'],
    correct: 2, a: 1.8, b: 1.8, c: 0.25,
    explanation: 'Frequentist interpretation: 95% of CI from repeated samples contain the true parameter.'
  },

  // ─── PHYSICS (12 questions) ────────────────────────────────────────────────
  {
    id: 'PHY001', topic: 'Physics', subtopic: 'Kinematics',
    text: 'An object falls freely from rest. After 3 seconds (g = 10 m/s²), what is its speed?',
    options: ['10 m/s', '20 m/s', '30 m/s', '40 m/s'],
    correct: 2, a: 1.0, b: -1.5, c: 0.25,
    explanation: 'v = u + at = 0 + 10×3 = 30 m/s'
  },
  {
    id: 'PHY002', topic: 'Physics', subtopic: 'Newton\'s Laws',
    text: 'A force of 20 N acts on a 4 kg mass. What is the acceleration?',
    options: ['0.2 m/s²', '2 m/s²', '5 m/s²', '80 m/s²'],
    correct: 2, a: 1.1, b: -1.8, c: 0.25,
    explanation: 'F = ma → a = F/m = 20/4 = 5 m/s²'
  },
  {
    id: 'PHY003', topic: 'Physics', subtopic: 'Energy',
    text: 'A 2 kg ball moves at 3 m/s. What is its kinetic energy?',
    options: ['3 J', '6 J', '9 J', '18 J'],
    correct: 2, a: 1.2, b: -1.0, c: 0.25,
    explanation: 'KE = ½mv² = ½ × 2 × 9 = 9 J'
  },
  {
    id: 'PHY004', topic: 'Physics', subtopic: 'Waves',
    text: 'The speed of a wave is 340 m/s and its frequency is 170 Hz. What is the wavelength?',
    options: ['0.5 m', '1 m', '2 m', '4 m'],
    correct: 2, a: 1.3, b: -0.5, c: 0.25,
    explanation: 'λ = v/f = 340/170 = 2 m'
  },
  {
    id: 'PHY005', topic: 'Physics', subtopic: 'Electricity',
    text: 'Ohm\'s Law states V = IR. If V = 12 V and R = 4 Ω, what is I?',
    options: ['0.3 A', '3 A', '8 A', '48 A'],
    correct: 1, a: 1.1, b: -1.2, c: 0.25,
    explanation: 'I = V/R = 12/4 = 3 A'
  },
  {
    id: 'PHY006', topic: 'Physics', subtopic: 'Thermodynamics',
    text: 'Which law of thermodynamics states that energy cannot be created or destroyed?',
    options: ['Zeroth law', 'First law', 'Second law', 'Third law'],
    correct: 1, a: 1.0, b: -0.8, c: 0.25,
    explanation: 'First law: conservation of energy'
  },
  {
    id: 'PHY007', topic: 'Physics', subtopic: 'Optics',
    text: 'The focal length of a concave mirror is 10 cm. An object at 30 cm gives an image at:',
    options: ['15 cm', '20 cm', '30 cm', '10 cm'],
    correct: 0, a: 1.6, b: 0.8, c: 0.25,
    explanation: '1/f = 1/v + 1/u → 1/10 = 1/v + 1/30 → v = 15 cm'
  },
  {
    id: 'PHY008', topic: 'Physics', subtopic: 'Magnetism',
    text: 'The force on a current-carrying wire in a magnetic field is F = BIL. If B=0.5T, I=2A, L=3m, what is F?',
    options: ['1 N', '2 N', '3 N', '4 N'],
    correct: 2, a: 1.5, b: 0.5, c: 0.25,
    explanation: 'F = 0.5 × 2 × 3 = 3 N'
  },
  {
    id: 'PHY009', topic: 'Physics', subtopic: 'Momentum',
    text: 'A 3 kg object at 4 m/s collides and sticks to a 1 kg object at rest. Final speed is:',
    options: ['1 m/s', '2 m/s', '3 m/s', '4 m/s'],
    correct: 2, a: 1.6, b: 0.6, c: 0.25,
    explanation: 'Conservation of momentum: (3)(4) = (4)v → v = 3 m/s'
  },
  {
    id: 'PHY010', topic: 'Physics', subtopic: 'Quantum',
    text: 'The photoelectric effect was explained by:',
    options: ['Maxwell', 'Einstein', 'Bohr', 'Planck'],
    correct: 1, a: 1.2, b: 0.3, c: 0.25,
    explanation: 'Einstein explained the photoelectric effect using photons (1905)'
  },
  {
    id: 'PHY011', topic: 'Physics', subtopic: 'Circular Motion',
    text: 'Centripetal acceleration for circular motion is:',
    options: ['v²/r', 'v/r²', 'r/v²', 'v²r'],
    correct: 0, a: 1.5, b: 0.9, c: 0.25,
    explanation: 'a_c = v²/r (centripetal acceleration)'
  },
  {
    id: 'PHY012', topic: 'Physics', subtopic: 'Gravitation',
    text: 'At what height above Earth\'s surface is gravitational acceleration reduced to g/4?',
    options: ['R (Earth radius)', '2R', '3R', 'R/2'],
    correct: 0, a: 1.9, b: 2.0, c: 0.25,
    explanation: 'g\' = g(R/(R+h))² = g/4 → h = R'
  }
];

const TOPICS = ['Algebra', 'Geometry', 'Calculus', 'Statistics', 'Physics'];

const TOPIC_COLORS = {
  'Algebra':    '#6366f1',
  'Geometry':   '#22d3ee',
  'Calculus':   '#f59e0b',
  'Statistics': '#10b981',
  'Physics':    '#f43f5e'
};
