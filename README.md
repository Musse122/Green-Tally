Green Tally - My Carbon Footprint Calculator
A user-centered web application I built to make climate impact personal and actionable
[
](https://green-tally-d27v.vercel.app/)
[
](https://github.com/Musse122/Green-Tally)
What I Built
I created Green Tally to transform complex carbon footprint calculations into an intuitive, visually engaging experience. Living in London for 20+ years, I've witnessed climate change firsthand through increasingly erratic weather patterns this personal connection drives my commitment to making environmental data accessible to everyone.

What I Achieved

4.1/5 user satisfaction across my testing with 10 participants
92/100 Lighthouse performance score on desktop
1.2s load time on desktop, 2.1s on mobile
Zero JavaScript errors in production

View Green Tally Live 
The Problem I Solved
Existing carbon calculators overwhelm users with complex interfaces, poor visual representation, and technical jargon. I reimagined this through:

Simplified focus on three key emission sources
Interactive data visualization using Chart.js
Responsive design for universal accessibility
User-centered interface prioritizing clarity


Technical Skills I Demonstrated
Frontend Development

Vanilla JavaScript (ES6+): Modular architecture with clean separation
Responsive CSS3: Mobile-first design using Flexbox and Grid
Chart.js Integration: Dynamic data visualization with real-time updates
Performance Optimization: Achieved <2.1s load times across devices

My Development Process

User Testing: Comprehensive testing with 10 diverse participants
Performance Testing: Chrome DevTools, Lighthouse, WebPageTest analysis
Cross-Browser Compatibility: Tested on Chrome, Firefox, Safari, Edge
Code Quality: ESLint validation with zero production errors


Key Features I Built
Core Functionality
javascript// My carbon calculation algorithm
const transportEmissions = miles * transportFactors[transportMode];
const electricityEmissions = electricity * electricityFactor;
const dietEmissions = dietFactors[diet];
const totalEmissions = transportEmissions + electricityEmissions + dietEmissions;
Data Visualization

Real-time chart updates showing emission breakdowns
Color-coded categories for immediate understanding
Responsive visualizations adapting to screen sizes
Interactive feedback encouraging user engagement



My Technical Implementation
Green Tally/
├── index.html          # Main calculator interface
├── script.js           # Core calculation logic
├── style.css           # Responsive styling
├── register.html       # User registration
└── signin.html         # Authentication


Future Development I'm Planning
Next Features

Gamification system with achievements and progress tracking
Social sharing features encouraging community engagement
Historical tracking showing trends over time
API integrations for real-time electricity grid data


Quick Start
bash# Clone my repository
git clone https://github.com/Musse122/Green-Tally.git
cd Green-Tally
open index.html
Live Demo: green-tally-d27v.vercel.app
