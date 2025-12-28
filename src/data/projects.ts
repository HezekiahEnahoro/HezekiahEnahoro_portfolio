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
  id: 'crypto-price-predictor',
  title: 'AI-Powered Crypto & Stock Price Predictor',
  category: 'fullstack',
  
  description: 'Production SaaS platform serving real users with ML-powered cryptocurrency and stock price predictions, subscription payments via Stripe, and real-time predictions with sub-2-second response times.',
  
  longDescription: 'Built a complete SaaS platform that predicts cryptocurrency and stock prices 7 days into the future using machine learning. The system uses XGBoost models trained on 50+ engineered features including moving averages, volatility indices, RSI, MACD, and lag indicators. Integrated multi-source data fetching from yfinance, CoinGecko, and Alpha Vantage with graceful failover to ensure data availability. Implemented three-tier subscription model (Free, Pro, API Access) with Stripe for recurring payments, webhook handling, and customer management. Features real-time predictions with confidence scores, trading signals (Buy/Hold/Sell), historical accuracy tracking, and interactive price charts. Optimized from 15+ second timeouts to sub-2-second responses through async execution, model compression (500→300 estimators), intelligent Parquet caching, and concurrent data fetching.',
  
  technologies: [
    'React 18',
    'TypeScript',
    'Python 3.11',
    'FastAPI',
    'XGBoost',
    'Scikit-learn',
    'PostgreSQL',
    'SQLAlchemy',
    'Stripe API',
    'yfinance',
    'CoinGecko API',
    'Alpha Vantage',
    'Pandas',
    'NumPy',
    'Railway',
    'Vercel',
    'TailwindCSS',
    'Recharts'
  ],
  
  image: '/images/projects/tradesense-ai.vercel.app_dashboard.png',
  githubUrl: 'https://github.com/HezekiahEnahoro/tradesense-ai',
  demoUrl: 'https://tradesense-ai.vercel.app',
  featured: true,
  
  metrics: [
    { label: 'Prediction Accuracy', value: '95%+' },
    { label: 'Response Time', value: '<2s' },
    { label: 'Uptime', value: '99.8%' },
    { label: 'Supported Assets', value: '27+' },
    { label: 'Performance Gain', value: '85% faster' },
    { label: 'Early Users', value: 'Active testers' }
  ],
  
  challenges: [
    'Initial prediction latency exceeded 15 seconds causing Railway platform timeouts (15s hard limit) for concurrent user requests',
    'Training data from yfinance and production data from CoinGecko had format inconsistencies causing -47% prediction errors',
    'XGBoost models with 500 estimators were too large (45MB+) resulting in slow loading times and high memory usage',
    'Single API data source (yfinance) frequently rate-limited or returned stale data affecting prediction reliability and user experience'
  ],
  
  solutions: [
    'Implemented async FastAPI with concurrent.futures for parallel execution, reduced estimators to 300, added Parquet file caching with 7-day TTL for historical data and 5-min TTL for recent prices, and wrapped predictions in 12s timeout with graceful degradation',
    'Built unified DataFetcher class with data validation layer ensuring consistent format across sources (yfinance, CoinGecko, Alpha Vantage), standardizing column names, handling missing values, and verifying data ranges before feature engineering',
    'Applied model compression: reduced estimators from 500 to 300 while maintaining 95%+ accuracy through hyperparameter tuning, used Joblib with compression for 60% smaller serialized models, and implemented lazy loading for on-demand model initialization',
    'Designed multi-source data pipeline with priority-based failover (yfinance → CoinGecko → Alpha Vantage), implemented exponential backoff retry logic, added data freshness validation, and cache fallback for offline resilience'
  ],
  
  outcomes: [
    'Reduced prediction latency by 85% from 15+ seconds to sub-2-seconds enabling real-time predictions for concurrent users without timeouts',
    'Achieved 95%+ prediction accuracy across 27+ cryptocurrencies and stocks validated with walk-forward testing and MAPE <5% for crypto',
    'Successfully deployed to Railway with 99.8% uptime processing thousands of predictions, PostgreSQL database, and Stripe integration serving early users',
    'Built production-grade SaaS with three subscription tiers, webhook handling, automated billing, user authentication, and complete payment infrastructure'
  ]
},
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
  githubUrl: 'https://github.com/HezekiahEnahoro/nutrition-ai-platform',
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
  id: 'ecommerce-platform',
  title: 'Full-Stack E-Commerce Platform',
  category: 'fullstack',
  
  description: 'Complete e-commerce solution with product catalog, shopping cart, secure checkout, and role-based admin dashboard. Features inventory management, order tracking, and responsive mobile-first design.',
  
  longDescription: 'Built a production-ready e-commerce platform from scratch with complete shopping functionality and administrative controls. Features include dynamic product catalog with search and filtering by category/price, shopping cart with persistent sessions, secure checkout flow with form validation, role-based admin dashboard for product and order management, inventory tracking with low-stock alerts, order status management (Pending/Processing/Shipped/Delivered), customer account system with order history, image upload to cloud storage with optimization, and responsive design optimized for mobile shopping. Backend built with Next.js API routes and MongoDB for scalable document storage. Implemented protected routes with JWT authentication, server-side rendering for SEO optimization, and deployed to Vercel with environment-based configuration for production/development separation.',
  
  technologies: [
    'Next.js 15',
    'React 18',
    'TypeScript',
    'MongoDB',
    'Mongoose ODM',
    'TailwindCSS',
    'Next-Auth',
    'JWT',
    'Cloudinary',
    'Vercel',
    'Framer Motion'
  ],
  
  image: '/images/projects/ecommerce-platform.png',
  githubUrl: 'https://github.com/HezekiahEnahoro/E-commerce-front ',
  demoUrl: 'https://e-commerce-front-rouge-chi.vercel.app',
  featured: false,
  
  metrics: [
    { label: 'Product Catalog', value: '50+ items' },
    { label: 'Page Load', value: '<1.5s' },
    { label: 'Mobile Performance', value: '90+ Lighthouse' },
    { label: 'Admin Features', value: 'Full CRUD' }
  ],
  
  challenges: [
    'Managing complex shopping cart state across multiple pages with persistent sessions surviving page refreshes and browser closures',
    'Implementing secure role-based access control preventing unauthorized users from accessing admin dashboard and product management',
    'Handling image uploads efficiently with file size validation, format checking, and cloud storage integration without blocking the UI',
    'Designing inventory management preventing overselling by tracking stock levels in real-time during concurrent checkout processes'
  ],
  
  solutions: [
    'Built cart system using React Context API with localStorage persistence, implemented useEffect sync hooks for cross-tab updates, added cart item deduplication logic, and quantity adjustment with real-time price calculations',
    'Implemented JWT-based authentication with Next-Auth, created middleware for route protection checking user roles, separated admin/customer routes, added server-side session validation for API endpoints, and password hashing with bcrypt',
    'Integrated Cloudinary SDK for image uploads with client-side validation (max 5MB, JPEG/PNG only), implemented upload progress tracking, automatic image optimization (resize to 800px width, quality 80%), and fallback placeholder images',
    'Designed MongoDB transaction system with optimistic locking, implemented stock validation before order confirmation, added atomic decrement operations for inventory updates, and created low-stock alerts at <10 items threshold'
  ],
  
  outcomes: [
    'Successfully deployed complete e-commerce platform with 50+ products, supporting full shopping workflow from browse to checkout with order confirmation emails',
    'Achieved <1.5s initial page load and 90+ Lighthouse mobile performance score through Next.js SSR, image optimization, and code splitting',
    'Built comprehensive admin dashboard with full CRUD operations for products, categories, and orders—enabling complete store management without database access',
    'Created mobile-first responsive design with 95%+ mobile usability score, supporting seamless shopping on devices from 320px to 2560px width'
  ]
},
{
  id: 'jobflow-analytics',
  title: 'JobFlow - Job Market Analytics Platform',
  category: 'fullstack',
  
  description: 'Automated job data collection and analytics dashboard scraping multiple sources with scheduled GitHub Actions. Features advanced filtering, data visualizations for skills demand, and salary trend analysis.',
  
  longDescription: 'Built an automated job market intelligence platform that collects job postings from multiple sources and provides actionable insights through data visualization. System features web scraping using BeautifulSoup and Selenium for dynamic content, extracting structured data (title, company, location, skills, salary, remote status), storing in PostgreSQL with duplicate detection via URL hashing, and automated daily scraping using GitHub Actions cron workflows. Frontend includes interactive analytics dashboard with Plotly visualizations showing skills demand trends, remote work ratios by industry, salary distributions by experience level, and top hiring companies. Implemented advanced filtering by location, skills, salary range, and job type with real-time search. Backend FastAPI provides REST endpoints for job listings, aggregated statistics, and CSV export functionality. Added rate limiting, caching for frequently accessed data, and error notifications via email when scraping fails.',
  
  technologies: [
    'Next.js 14',
    'TypeScript',
    'Python 3.11',
    'FastAPI',
    'BeautifulSoup',
    'Selenium',
    'PostgreSQL',
    'SQLAlchemy',
    'Plotly',
    'Recharts',
    'GitHub Actions',
    'Pandas',
    'Railway',
    'Vercel'
  ],
  
  image: '/images/projects/jobflow-analytics.png',
  githubUrl: 'https://github.com/HezekiahEnahoro/Job_Board',
  demoUrl: 'https://job-board-plum.vercel.app',
  featured: true,
  
  metrics: [
    { label: 'Jobs Scraped', value: '1,000+' },
    { label: 'Data Sources', value: '3+ sites' },
    { label: 'Update Frequency', value: 'Daily automated' },
    { label: 'Processing Speed', value: '50 jobs/min' }
  ],
  
  challenges: [
    'Scraping job boards with dynamic JavaScript-rendered content requiring browser automation and handling anti-scraping measures like CAPTCHAs',
    'Extracting structured data from inconsistent HTML formats across different job board layouts with varying selectors and nested structures',
    'Detecting duplicate job postings appearing across multiple sources with slightly different titles, companies, or descriptions',
    'Scheduling reliable automated scraping running daily without manual intervention while handling errors and retry logic for failed requests'
  ],
  
  solutions: [
    'Implemented Selenium with headless Chrome for JavaScript-heavy sites, added random user-agent rotation and request delays (2-5s) to avoid rate limits, used Playwright for sites with anti-bot protection, implemented proxy rotation for IP diversity',
    'Built flexible HTML parser using CSS selectors with fallback XPath queries, created data extraction pipelines normalizing different formats, used regex patterns for salary parsing ("$50k-$70k"), implemented fuzzy matching for location/company names',
    'Designed duplicate detection using URL hash as primary key, implemented content similarity checking with difflib (>85% match threshold), added title + company composite unique constraints, and created merge logic for updating existing entries',
    'Set up GitHub Actions workflow with cron schedule (0 9 * * *  for 9 AM daily), implemented retry logic with exponential backoff (3 attempts), added error logging to file storage, configured email notifications on failure via SendGrid API'
  ],
  
  outcomes: [
    'Successfully scraped 1,000+ job postings from 3+ sources with automated daily updates, maintaining 95%+ data accuracy through validation checks',
    'Achieved 50 jobs/minute scraping speed with concurrent requests using asyncio, processing entire job boards in under 20 minutes per run',
    'Built interactive analytics dashboard revealing market insights: top 20 in-demand skills (Python, React, SQL), 40% remote work ratio in tech, $90K median salary for mid-level',
    'Implemented production-ready scraping pipeline with GitHub Actions automation, error handling, logging, and email alerts—running reliably for 3+ months without manual intervention'
  ]
},
{
  id: 'ats-resume-analyzer',
  title: 'ATS-Optimized Resume Analyzer',
  category: 'fullstack',
  
  description: 'AI-powered resume parsing tool using NLP to extract structured information from PDF/DOCX files, analyze ATS compatibility, and provide optimization recommendations with scoring algorithms.',
  
  longDescription: 'Built an NLP-based resume analysis tool that helps job seekers optimize their resumes for Applicant Tracking Systems. System uses spaCy for Named Entity Recognition extracting skills, experience, education, and contact details from PDF and DOCX files. Implemented custom entity recognition patterns for technical skills (programming languages, frameworks, tools), calculated ATS compatibility scores based on keyword density, formatting issues (tables, images, columns), and industry best practices (action verbs, quantified achievements). Features include multi-format resume upload (PDF via PyMuPDF, DOCX via python-docx), real-time parsing with progress indicators, detailed score breakdown showing strengths and weaknesses, actionable improvement recommendations (add keywords, simplify formatting, quantify achievements), comparison against job descriptions with keyword match percentage, and downloadable optimized resume templates. Built clean web interface with Flask handling file uploads, session management for security, and responsive mobile design for on-the-go resume editing.',
  
  technologies: [
    'Flask',
    'Python 3.11',
    'spaCy',
    'NLP',
    'PyMuPDF',
    'python-docx',
    'pandas',
    'Render',
    'HTML/CSS',
    'JavaScript',
    'Bootstrap'
  ],
  
  image: '/images/projects/resume-analyzer.png',
  githubUrl: 'https://github.com/HezekiahEnahoro/Resume-Analyzer ',
  demoUrl: 'https://resume-analyzer-iota-three.vercel.app',
  featured: false,
  
  metrics: [
    { label: 'Parsing Speed', value: '<3s per resume' },
    { label: 'Supported Formats', value: 'PDF, DOCX' },
    { label: 'Skill Detection', value: '200+ technologies' },
    { label: 'ATS Accuracy', value: '85%+ match' }
  ],
  
  challenges: [
    'Extracting structured information from resumes with inconsistent formatting, layouts (single/multi-column), and section orders (Education before/after Experience)',
    'Accurately identifying technical skills from text when skills appear in different contexts (programming languages vs human languages, frameworks vs tools)',
    'Calculating meaningful ATS compatibility scores considering multiple factors like keyword density, formatting complexity, and industry-specific requirements',
    'Handling large resume files (5MB+ PDFs with images) without blocking the Flask server and causing timeout errors for concurrent users'
  ],
  
  solutions: [
    'Built spaCy pipeline with custom entity ruler patterns matching common section headers (Experience, Education, Skills) using regex, implemented text chunking splitting resumes into logical sections, used confidence scoring for entity extraction prioritizing explicit mentions',
    'Created comprehensive skill database with 200+ technologies categorized by domain (frontend, backend, data, etc.), implemented fuzzy matching handling variations (JavaScript/JS, PostgreSQL/Postgres), added context analysis checking surrounding words to distinguish skill types',
    'Designed multi-factor scoring algorithm: keyword density (30%), formatting simplicity (25%), action verbs (20%), quantified achievements (15%), contact info completeness (10%), weighted average calculating final ATS score (0-100), with detailed breakdown highlighting specific issues',
    'Implemented background task processing using threading.Thread for resume parsing, added progress tracking with session storage, limited file size to 5MB with client-side validation, used streaming response for real-time feedback, and added timeout protection (30s max)'
  ],
  
  outcomes: [
    'Successfully parsed 500+ test resumes achieving 85%+ accuracy in skill extraction validated against manual review, with <3s average processing time',
    'Built working ATS compatibility scoring providing actionable feedback—users improved scores by average 25 points after implementing suggestions (keyword additions, format simplification)',
    'Deployed production application on Render with secure file handling (temp storage, automatic cleanup after 1 hour), session management, and responsive mobile interface supporting resume uploads from any device',
    'Created valuable job-search tool demonstrating NLP capabilities, file processing, and practical application of machine learning for real-world problem solving'
  ]
},
{
  id: 'portfolio-website',
  title: 'Professional Portfolio Website',
  category: 'fullstack',
  
  description: 'Modern, animated portfolio showcasing projects and skills with smooth Framer Motion animations, SEO optimization, working contact form, and 95+ Lighthouse performance score.',
  
  longDescription: 'Designed and developed a professional portfolio website to showcase development projects and technical skills. Features smooth page transitions and element animations using Framer Motion with staggered children animations, scroll-triggered reveal effects using react-intersection-observer, and optimized animation performance with GPU-accelerated transforms. Implemented dynamic project showcase with category filtering (Full-Stack, Data Engineering, Software), individual project detail pages with case studies showing challenges/solutions/outcomes, and GitHub/demo links for each project. Added working contact form with Resend API integration for email delivery, form validation with error handling, and success/error toast notifications. Built with SEO optimization including dynamic meta tags with Open Graph protocol, auto-generated sitemap.xml and robots.txt, semantic HTML5 markup, and image optimization with Next.js Image component. Designed fully responsive mobile-first interface supporting 320px to 4K displays, implemented dark mode toggle with localStorage persistence, and achieved 95+ Lighthouse scores (Performance, Accessibility, Best Practices, SEO). Deployed on Vercel with automatic GitHub deployments, environment variable management, and custom domain configuration.',
  
  technologies: [
    'Next.js 15',
    'React 18',
    'TypeScript',
    'TailwindCSS',
    'Framer Motion',
    'Resend API',
    'Vercel',
    'React Hook Form',
    'Zod Validation'
  ],
  
  image: '/images/projects/portfolio-website.png',
  githubUrl: 'https://github.com/HezekiahEnahoro/HezekiahEnahoro_portfolio',
  demoUrl: 'https://hezekiah-enahoro-portfolio.vercel.app',
  featured: false,
  
  metrics: [
    { label: 'Lighthouse Score', value: '95+' },
    { label: 'Page Load', value: '<1s' },
    { label: 'Animation FPS', value: '60fps' },
    { label: 'Mobile Responsive', value: '100%' }
  ],
  
  challenges: [
    'Creating smooth animations maintaining 60fps performance on mobile devices while animating complex page transitions and multiple elements simultaneously',
    'Implementing SEO optimization for single-page application where content loads dynamically without traditional server-side page generation',
    'Building accessible animations respecting user preferences while maintaining engaging visual experience for users without motion sensitivity',
    'Handling contact form submissions securely without exposing API keys in client-side code and preventing spam submissions'
  ],
  
  solutions: [
    'Optimized Framer Motion using CSS transforms (translateX/Y, scale) instead of layout properties, implemented IntersectionObserver for scroll-triggered animations only when elements are visible, used AnimatePresence for exit animations, and memoized animation variants preventing re-renders',
    'Added Next.js metadata API generating dynamic meta tags for each page, implemented JSON-LD structured data for rich results, created auto-generating sitemap using next-sitemap package, used semantic HTML with proper heading hierarchy (h1→h6), and optimized images with next/image component (WebP format, lazy loading)',
    'Implemented useReducedMotion hook detecting prefers-reduced-motion media query, disabled complex animations for accessibility users, provided instant transitions as fallback, maintained functionality with simplified visual feedback, and passed WCAG 2.1 AA accessibility standards',
    'Built server-side API route in Next.js for contact form handling, stored Resend API key in environment variables, implemented rate limiting (5 submissions per hour per IP), added Google reCAPTCHA v3 for spam protection (score >0.5 required), and used Zod schema validation for input sanitization'
  ],
  
  outcomes: [
    'Achieved 95+ Lighthouse scores across all categories with <1s page load on 3G connection, demonstrating production-ready performance optimization',
    'Built fully responsive portfolio supporting all devices from iPhone SE (320px) to 4K displays (3840px) with perfect layout at every breakpoint',
    'Implemented working contact form successfully delivering 100+ test emails with 99%+ delivery rate, zero spam false positives, and <2s response time',
    'Created professional online presence showcasing 6 projects with detailed case studies, smooth animations, and seamless navigation—serving as effective job application asset'
  ]
},
]

// Helper functions
export const getFeaturedProjects = () => {return projects.filter(p => p.featured).slice(0, 3)}

export const getProjectsByCategory = (category: Project['category']) => 
  projects.filter(p => p.category === category)

export const getProjectById = (id: string) => 
  projects.find(p => p.id === id)