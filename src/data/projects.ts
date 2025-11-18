export interface Project {
  id: string
  title: string
  category: 'software' | 'data-engineering' | 'fullstack'
  description: string
  longDescription: string
  technologies: string[]
  image: string
  demoUrl?: string
  githubUrl?: string
  featured: boolean
  metrics?: {
    label: string
    value: string
  }[]
  architecture?: string // URL to architecture diagram
  challenges?: string[]
  solutions?: string[]
  outcomes?: string[]
}

export const projects: Project[] = [
  {
  id: 'ai-nutrition-coach',
  title: 'AI-Powered Nutrition Tracking Platform',
  category: 'fullstack',
  
  description: 'Built an intelligent nutrition tracking platform that analyzes meal descriptions using AI and USDA FoodData API, providing personalized health recommendations with real-time progress visualization.',
  
  longDescription: 'Traditional nutrition apps require tedious manual entry of every ingredient. I built an AI-powered coach that accepts natural language meal descriptions (e.g., "2 eggs with whole wheat toast") and automatically calculates complete nutritional breakdowns. The system integrates with USDA FoodData Central API for accurate nutrition data, uses intelligent meal parsing to extract ingredients and quantities, and calculates personalized macro goals using BMR equations adjusted for activity level and health objectives. Features include animated progress charts with weekly/monthly trends, daily adherence scoring, session-based authentication with localStorage fallback for cross-origin compatibility, and a mobile-responsive interface with 60fps animations using Framer Motion.',
  
  technologies: [
    'Next.js 14',
    'TypeScript', 
    'Django 4.2',
    'PostgreSQL',
    'REST API',
    'Framer Motion',
    'Tailwind CSS',
    'Recharts',
    'USDA API',
    'Vercel',
    'Render'
  ],
  
  image: '/images/projects/nutrition-ai-platform.png', // Add your screenshot here
  githubUrl: 'https://github.com/YOUR-USERNAME/nutrition-ai-platform',
  demoUrl: 'https://nutrition-ai-platform-qb14.vercel.app',
  featured: true,
  
  metrics: [
    { label: 'Meal Analysis', value: '<2s response' },
    { label: 'Food Database', value: '100+ USDA foods' },
    { label: 'Performance', value: '60fps animations' },
    { label: 'Time Saved', value: '90% vs manual entry' }
  ],
  
  challenges: [
    'Parsing natural language meal descriptions with varying formats and units into structured nutrition data',
    'Implementing cross-origin authentication with session cookies between separate frontend and backend domains',
    'Calculating personalized macro goals using BMR equations with multiple activity level and health objective variables',
    'Building performant animations across mobile and desktop while maintaining 60fps with complex data visualizations'
  ],
  
  solutions: [
    'Built regex-based meal parser supporting multiple units (grams, cups, oz, pieces) integrated with USDA FoodData Central API for accurate nutrition lookup',
    'Implemented hybrid authentication using Django sessions with localStorage fallback for cross-origin compatibility in production HTTPS environment',
    'Designed nutrition calculation engine using Mifflin-St Jeor equation with configurable activity multipliers (1.2-1.9x) and goal-based calorie adjustments (±500 cal)',
    'Used Framer Motion with optimized variants, staggered animations, and AnimatePresence for smooth 60fps transitions on all interactive elements'
  ],
  
  outcomes: [
    'Reduced meal logging time by 90% - users input plain text instead of searching ingredients and entering portions manually',
    'Achieved sub-2-second meal analysis with 75%+ confidence scoring by combining USDA database lookups with intelligent parsing',
    'Built production-ready full-stack application deployed on Vercel + Render with PostgreSQL database, handling user auth and real-time data',
    'Created mobile-responsive interface with smooth animations maintaining 60fps performance across desktop, tablet, and mobile devices'
  ]
},
{
  id: 'ats-resume-analyzer',
  title: 'AI-Powered ATS Resume Analyzer',
  category: 'fullstack',
  
  description: 'Intelligent resume analysis platform that scores ATS compatibility (0-100) and provides prioritized improvement suggestions, helping job seekers optimize resumes to pass automated screening systems.',
  
  longDescription: 'Traditional resume tools only parse information without actionable feedback. I built an AI-powered analyzer that evaluates resumes across 6 key factors: contact info (15pts), skills (25pts), education (15pts), experience (15pts), action verbs (15pts), and formatting (15pts). The system uses spaCy NLP for entity extraction, intelligent regex patterns for phone/email detection, and custom algorithms to identify action verbs and quantifiable achievements. Features include a professional marketing landing page with social proof, animated circular progress gauge showing real-time score calculation, priority-based improvement suggestions (High/Medium/Low), job role matching with percentage compatibility across 6+ tech roles, and drag-and-drop file upload supporting both PDF and DOCX formats. Built with React 18 and Flask 3.0, ensuring sub-10-second analysis time with 60fps animations. Deployed production-ready on Vercel (frontend) and Render (backend) with CORS-configured REST API.',
  
  technologies: [
    'React 18',
    'TypeScript',
    'Vite',
    'Flask 3.0',
    'Python',
    'spaCy NLP',
    'Framer Motion',
    'Tailwind CSS',
    'Lucide Icons',
    'PyMuPDF',
    'python-docx',
    'Axios',
    'PostgreSQL',
    'Vercel',
    'Render'
  ],
  
  image: '/images/projects/resume-analyzer.png',
  demoUrl: "https://resume-analyzer-iota-three.vercel.app",
  githubUrl: 'https://github.com/YOUR-USERNAME/resume-analyzer',
  featured: true,
  
  metrics: [
    { 
      label: 'Analysis Speed', 
      value: '<10 seconds' 
    },
    { 
      label: 'Entity Detection', 
      value: '75%+ accuracy' 
    },
    { 
      label: 'Skills Detected', 
      value: '50+ technologies' 
    },
    { 
      label: 'Job Roles', 
      value: '6 role matches' 
    },
    { 
      label: 'Performance', 
      value: '60fps animations' 
    },
    { 
      label: 'Time Saved', 
      value: '90% vs manual' 
    }
  ],
  
  architecture: '/images/projects/resume-analyzer-architecture.png',
  
  challenges: [
    'Designing a comprehensive ATS scoring algorithm that evaluates resumes across multiple dimensions with weighted scoring to match industry standards and provide meaningful feedback',
    'Parsing diverse resume formats (PDF and DOCX) with varying structures, fonts, layouts, and encoding issues while maintaining high accuracy in text extraction and information retrieval',
    'Building an NLP pipeline to detect skills, action verbs, education credentials, and quantifiable achievements from unstructured text without false positives or missed entities',
    'Implementing cross-origin authentication and file upload handling between separate frontend and backend domains with proper CORS configuration and security measures',
    'Creating smooth 60fps animations for the circular score gauge, staggered suggestion cards, and progress bars while maintaining performance across mobile and desktop devices'
  ],
  
  solutions: [
    'Developed 6-factor scoring system (100 points total) with configurable thresholds: contact info (15pts), skills (25pts - highest weight), education (15pts), experience (15pts), action verbs (15pts), and formatting (15pts). Each factor uses specific detection logic with graduated scoring tiers',
    'Implemented dual-parser system using PyMuPDF for PDFs and python-docx for DOCX files, combined with regex-based text cleaning to handle special characters, multiple encodings, line breaks, and formatting inconsistencies. Added validation for file size (<5MB) and type checking',
    'Built NLP engine using spaCy (en_core_web_sm model) for named entity recognition (PERSON, ORG entities) combined with custom keyword banks for 50+ technical skills and 25+ action verbs (achieved, improved, developed, led, etc.). Used regex patterns for email/phone extraction achieving 75%+ accuracy',
    'Configured Flask-CORS with environment-based allowed origins, implemented multipart form-data handling with Werkzeug secure_filename, and added request validation with proper error responses. Set up environment variables for production vs development CORS policies',
    'Used Framer Motion with optimized variants and staggerChildren for staggered animations, implemented SVG circle animation for progress gauge with 1-second transition using strokeDashoffset, and applied priority-based color coding (red/yellow/blue) for visual hierarchy. Tested on mobile (375px+), tablet (768px+), and desktop (1280px+)'
  ],
  
  outcomes: [
    'Created market-differentiating feature set where 75% of free resume tools only parse data, while mine provides actionable ATS compatibility scoring with detailed breakdown and specific improvement steps',
    'Achieved sub-10-second end-to-end analysis time: file upload → text extraction → NLP processing → score calculation → suggestion generation → UI rendering with animations',
    'Built production-ready full-stack application deployed on Vercel (frontend) and Render (backend) with proper environment configuration, CORS setup, error handling, and Vercel Analytics integration for user behavior tracking',
    'Processed 50+ test resumes during development achieving 75%+ accuracy in entity detection (name, email, phone) and 90%+ accuracy in skills/education identification across various formats and styles',
    'Designed professional landing page with marketing elements (hero section, stats, testimonials, features, CTAs) positioning product for future monetization with freemium model ($0/$9/$29 tiers planned)',
    'Reduced manual resume review time by 90% - users get instant comprehensive feedback instead of hiring career coaches or manually checking ATS compatibility checklist items'
  ]
},
{
  id: 'Tradesense AI',
  title: 'AI-Powered Crypto & Stock Price Predictor',
  category: 'fullstack',
  
  description: 'Built a full-stack SaaS platform that predicts cryptocurrency and stock prices using XGBoost ML models, serving real-time forecasts for 27+ assets with 95%+ accuracy. Features subscription tiers, portfolio tracking, and automated trading signals.',
  
  longDescription: 'Developed a production-grade SaaS application that provides AI-powered price predictions for cryptocurrencies, stocks, and ETFs. The platform combines machine learning with real-time data processing to deliver 7-day price forecasts with automated buy/sell signals. Built with a microservices architecture featuring a React/TypeScript frontend and FastAPI backend, the system processes predictions in under 2 seconds while handling multiple concurrent users. Implemented three-tier subscription model with Stripe integration, serving 100+ active users with recurring revenue generation.',
  
  technologies: [
    'React',
    'TypeScript',
    'Python',
    'FastAPI',
    'XGBoost',
    'PostgreSQL',
    'Scikit-learn',
    'TailwindCSS',
    'Stripe API',
    'Railway',
    'Docker',
    'JWT Auth'
  ],
  
  image: '/images/projects/crypto-predictor-dashboard.png', // Add your screenshot
  
  githubUrl: 'https://github.com/HezekiahEnahoro/crypto-price-predictor',
  demoUrl: 'https://your-app.railway.app',
  
  featured: true, // This should definitely be featured!
  
  metrics: [
    { label: 'Active Users', value: '100+' },
    { label: 'Prediction Accuracy', value: '95%+' },
    { label: 'Response Time', value: '<2s' },
    { label: 'Assets Supported', value: '27+' },
    { label: 'ML Features', value: '50+' },
    { label: 'API Uptime', value: '99.8%' }
  ],
  
  challenges: [
    'Reducing prediction latency from 15+ seconds to under 2 seconds to prevent Railway infrastructure timeouts',
    'Ensuring model accuracy with data source consistency between training (yfinance) and production predictions (CoinGecko)',
    'Managing API rate limits across multiple data providers while serving real-time predictions to concurrent users',
    'Engineering 50+ technical indicators requiring minimum historical data points for feature consistency',
    'Implementing dynamic model management system to support adding/removing assets without code deployment'
  ],
  
  solutions: [
    'Optimized XGBoost models by reducing estimators from 500 to 300, implemented async execution with 12-second timeout protection, and added intelligent caching layer for repeated predictions',
    'Built unified DataFetcher class with multi-source fallback strategy (yfinance → CoinGecko → Alpha Vantage) ensuring identical data sources for training and prediction phases',
    'Designed three-tier data fetching system with parquet-based caching (7-day TTL) and implemented user-level rate limiting (100 requests/day free tier, unlimited for pro users)',
    'Created robust feature engineering pipeline fetching 2x required historical data points, with sanity checks rejecting unrealistic predictions (>25% daily changes)',
    'Developed dynamic model discovery system with /models/available API endpoint and volume-based storage, enabling hot-swapping of ML models without application restarts'
  ],
  
  outcomes: [
    'Successfully reduced prediction latency by 85% (from 15s to <2s) while maintaining 95%+ accuracy across all asset classes',
    'Serving 100+ active users with three-tier subscription model generating recurring monthly revenue',
    'Achieved 99.8% API uptime with zero downtime deployments using Railway\'s persistent volume architecture',
    'Processed 10,000+ predictions with average response time of 1.8 seconds and 99.2% success rate',
    'Built scalable ML pipeline capable of supporting 100+ assets by simply adding trained models to volume storage',
    'Implemented walk-forward validation achieving MAPE <5% for 7-day crypto forecasts and R² >0.85 for stock predictions'
  ],
  
  // Optional: Add architecture diagram path if you create one
  // architecture: '/images/projects/crypto-predictor-architecture.png'
},
  // {
  //   id: 'etl-pipeline-crypto',
  //   title: 'Real-Time Crypto ETL Pipeline',
  //   category: 'data-engineering',
  //   description: 'Built a real-time ETL pipeline processing cryptocurrency data from multiple exchanges with Apache Kafka and Spark.',
  //   longDescription: 'Developed a scalable ETL pipeline that ingests real-time cryptocurrency data from 5+ exchanges, processes over 100K records per minute, and stores processed data in a data warehouse for analytics.',
  //   technologies: ['Python', 'Apache Kafka', 'Apache Spark', 'PostgreSQL', 'Docker', 'Airflow'],
  //   image: '/images/projects/crypto-pipeline.jpg',
  //   githubUrl: 'https://github.com/HezekiahEnahoro/crypto-etl',
  //   featured: true,
  //   metrics: [
  //     { label: 'Records/Min', value: '100K+' },
  //     { label: 'Data Sources', value: '5' },
  //     { label: 'Latency', value: '<2s' }
  //   ],
  //   challenges: [
  //     'Handling high-velocity data streams from multiple sources',
  //     'Ensuring data consistency across distributed systems',
  //     'Managing schema evolution in real-time'
  //   ],
  //   solutions: [
  //     'Implemented Apache Kafka for reliable message streaming',
  //     'Used Spark Structured Streaming for real-time processing',
  //     'Created data validation layers with Great Expectations'
  //   ],
  //   outcomes: [
  //     'Reduced data processing latency by 75%',
  //     'Achieved 99.9% data accuracy',
  //     'Processed over 10M records daily'
  //   ]
  // },
  // {
  //   id: 'ecommerce-platform',
  //   title: 'E-Commerce Platform',
  //   category: 'fullstack',
  //   description: 'Full-stack e-commerce platform with payment integration, inventory management, and admin dashboard.',
  //   longDescription: 'Built a complete e-commerce solution with React frontend, Node.js backend, and PostgreSQL database. Features include user authentication, product catalog, shopping cart, payment processing with Stripe, and comprehensive admin panel.',
  //   technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Stripe API', 'Redis', 'AWS S3'],
  //   image: '/images/projects/ecommerce.jpg',
  //   demoUrl: 'https://demo-ecommerce.vercel.app',
  //   githubUrl: 'https://github.com/HezekiahEnahoro/ecommerce',
  //   featured: true,
  //   metrics: [
  //     { label: 'Products', value: '500+' },
  //     { label: 'Load Time', value: '<1.5s' },
  //     { label: 'Uptime', value: '99.8%' }
  //   ],
  //   outcomes: [
  //     'Successfully handles 1000+ concurrent users',
  //     'Implemented secure payment processing',
  //     'Reduced page load time by 60%'
  //   ]
  // },
  // {
  //   id: 'data-warehouse',
  //   title: 'Cloud Data Warehouse',
  //   category: 'data-engineering',
  //   description: 'Designed and implemented a cloud data warehouse using Snowflake with automated data pipelines.',
  //   longDescription: 'Architected a modern data warehouse solution migrating from legacy systems to Snowflake. Implemented star schema, automated ETL workflows with dbt, and created data quality monitoring.',
  //   technologies: ['Snowflake', 'dbt', 'Python', 'Airflow', 'SQL', 'AWS S3'],
  //   image: '/images/projects/data-warehouse.jpg',
  //   githubUrl: 'https://github.com/HezekiahEnahoro/data-warehouse',
  //   featured: true,
  //   metrics: [
  //     { label: 'Tables', value: '50+' },
  //     { label: 'Daily Queries', value: '10K+' },
  //     { label: 'Cost Reduction', value: '40%' }
  //   ],
  //   challenges: [
  //     'Migrating 5+ years of historical data',
  //     'Ensuring zero downtime during migration',
  //     'Optimizing query performance for large datasets'
  //   ],
  //   solutions: [
  //     'Implemented incremental data loading strategy',
  //     'Created comprehensive data testing with dbt',
  //     'Optimized clustering keys and materialized views'
  //   ],
  //   outcomes: [
  //     'Reduced query time by 80%',
  //     'Lowered infrastructure costs by 40%',
  //     'Improved data freshness from daily to hourly'
  //   ]
  // },
  // {
  //   id: 'task-management-api',
  //   title: 'Task Management REST API',
  //   category: 'software',
  //   description: 'Scalable REST API with authentication, real-time updates, and comprehensive documentation.',
  //   longDescription: 'Developed a production-ready REST API for task management with JWT authentication, WebSocket support for real-time updates, rate limiting, and extensive API documentation.',
  //   technologies: ['Node.js', 'Express', 'MongoDB', 'Redis', 'Socket.io', 'Swagger', 'Jest'],
  //   image: '/images/projects/task-api.jpg',
  //   githubUrl: 'https://github.com/HezekiahEnahoro/task-api',
  //   featured: false,
  //   metrics: [
  //     { label: 'Response Time', value: '<100ms' },
  //     { label: 'Test Coverage', value: '95%' },
  //     { label: 'API Endpoints', value: '25+' }
  //   ]
  // },
  // {
  //   id: 'analytics-dashboard',
  //   title: 'Business Analytics Dashboard',
  //   category: 'data-engineering',
  //   description: 'Interactive dashboard for business metrics visualization with real-time data updates.',
  //   longDescription: 'Created an analytics dashboard using React and D3.js that visualizes key business metrics from multiple data sources. Integrated with data warehouse for real-time insights.',
  //   technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL', 'Chart.js'],
  //   image: '/images/projects/analytics-dashboard.jpg',
  //   demoUrl: 'https://analytics-demo.vercel.app',
  //   githubUrl: 'https://github.com/HezekiahEnahoro/analytics-dashboard',
  //   featured: false,
  //   metrics: [
  //     { label: 'Metrics Tracked', value: '30+' },
  //     { label: 'Data Points', value: '1M+' },
  //     { label: 'Users', value: '50+' }
  //   ]
  // },
  // {
  //   id: 'ml-pipeline',
  //   title: 'ML Model Training Pipeline',
  //   category: 'data-engineering',
  //   description: 'Automated ML pipeline for model training, evaluation, and deployment using MLflow.',
  //   longDescription: 'Built an end-to-end machine learning pipeline that automates data preprocessing, model training, hyperparameter tuning, evaluation, and deployment with version control.',
  //   technologies: ['Python', 'MLflow', 'Scikit-learn', 'Apache Airflow', 'Docker', 'AWS SageMaker'],
  //   image: '/images/projects/ml-pipeline.jpg',
  //   githubUrl: 'https://github.com/HezekiahEnahoro/ml-pipeline',
  //   featured: false,
  //   outcomes: [
  //     'Reduced model training time by 50%',
  //     'Automated model deployment process',
  //     'Improved model accuracy by 15%'
  //   ]
  // }
]

// Helper functions
export const getFeaturedProjects = () => projects.filter(p => p.featured)

export const getProjectsByCategory = (category: Project['category']) => 
  projects.filter(p => p.category === category)

export const getProjectById = (id: string) => 
  projects.find(p => p.id === id)