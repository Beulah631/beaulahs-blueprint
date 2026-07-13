export const profile = {
  name: "Beulah A",
  tagline: "Building Intelligent Solutions with Data & AI",
  role: "Aspiring Data Analyst",
  intro: "Aspiring Data Analyst passionate about transforming data into meaningful insights through analytics, AI and modern technology.",
  email: "joybeulah28@gmail.com",
  phone: "8072890827",
  location: "Karur, Tamil Nadu",
  college: "KSR Institute of Engineering and Technology",
  degree: "B.E Electronics and Communication Engineering",
  cgpa: "9.5",
  graduation: "2027",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
};

export const stats = [
  { label: "CGPA", value: "9.5" },
  { label: "Projects", value: "3+" },
  { label: "Certifications", value: "5+" },
  { label: "Internships", value: "2" },
  { label: "Achievements", value: "4+" },
];

export const skills = [
  { group: "Programming", items: ["Java", "Python"] },
  { group: "Web", items: ["HTML", "CSS", "JavaScript"] },
  { group: "Database", items: ["SQL", "MySQL"] },
  { group: "Analytics", items: ["Power BI", "Excel", "Pandas"] },
  { group: "Tools", items: ["Git", "GitHub", "VS Code", "MySQL Workbench"] },
];

export const softSkills = [
  "Communication", "Problem Solving", "Leadership",
  "Adaptability", "Critical Thinking", "Quick Learner",
];

export const experiences = [
  { role: "AI Intern", org: "Industry Program", period: "2025", desc: "Applied machine learning fundamentals to real-world datasets — building models, evaluating results and shipping actionable insights." },
  { role: "Data Analytics Intern", org: "Industry Program", period: "2024", desc: "Worked on SQL pipelines, Power BI dashboards and Excel-based analytics for stakeholder reporting." },
];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  status: "Completed" | "In Progress";
  featured?: boolean;
  tags: string[];
  stack: { group: string; items: string[] }[];
  problem: string;
  solution: string[];
  objectives: string[];
  features: { title: string; desc: string }[];
  workflow: string[];
  challenges: string[];
  impact: string;
  future: string[];
  repo?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "dark-pattern-impact-analytics",
    title: "Dark Pattern Impact Analytics & Trust Score System",
    tagline: "An enterprise analytics platform that measures how deceptive UX patterns erode user trust.",
    overview: "A research-driven analytics platform quantifying the behavioural impact of dark patterns on end users. It combines curated datasets, a Power BI intelligence layer and an original Trust Score model to help teams design ethically.",
    status: "Completed",
    featured: false,
    tags: ["Data Analytics", "Power BI", "Research", "SQL"],
    stack: [
      { group: "Analytics", items: ["Power BI", "Excel", "Pandas"] },
      { group: "Database", items: ["MySQL", "SQL"] },
      { group: "Language", items: ["Python"] },
    ],
    problem: "Dark patterns silently degrade user trust across digital products, but teams lack a quantitative way to measure the damage or benchmark ethical design.",
    solution: [
      "Curate a labelled dataset of dark-pattern interactions across categories.",
      "Model a normalised Trust Score across severity, exposure and category weight.",
      "Ship a Power BI dashboard for executives, designers and researchers.",
      "Document ethical UX guidelines derived from data.",
    ],
    objectives: [
      "Detect and classify dark patterns by category",
      "Quantify per-product trust impact",
      "Visualise trends over time",
      "Recommend ethical alternatives",
    ],
    features: [
      { title: "Trust Score Engine", desc: "A weighted model that scores products from 0–100 on ethical design." },
      { title: "Interactive Dashboard", desc: "Power BI dashboards for slicing categories, severity and industry." },
      { title: "Research Layer", desc: "Companion notes and citations backing every visual." },
      { title: "Dataset Explorer", desc: "Query the curated dark-patterns corpus directly." },
    ],
    workflow: ["Data Collection", "Cleaning & Labelling", "Trust Modelling", "Dashboarding", "Insights"],
    challenges: [
      "Balancing subjective UX severity with objective scoring.",
      "Cleaning noisy scraped interaction data at scale.",
    ],
    impact: "Gives product teams a shared vocabulary and a measurable baseline to design ethically — turning UX ethics into a KPI leaders can track.",
    future: ["Browser extension for real-time detection", "Public benchmark leaderboard", "API for design system integration"],
  },
  {
    slug: "real-note-flow",
    title: "Real Note Flow",
    tagline: "A modern, distraction-free notes SaaS built for flow-state thinking.",
    overview: "Real Note Flow is a minimal, keyboard-first notes application designed around the way people actually think — quick capture, elegant organisation and a UI that gets out of the way.",
    status: "Completed",
    featured: false,
    tags: ["SaaS", "Web", "Full Stack"],
    stack: [
      { group: "Frontend", items: ["React", "Tailwind CSS", "JavaScript"] },
      { group: "Backend", items: ["Node.js"] },
      { group: "Database", items: ["MySQL"] },
    ],
    problem: "Most note apps are bloated, slow, or over-engineered — pulling users out of flow instead of supporting it.",
    solution: [
      "Ship a fast, minimal UI with keyboard-first interactions.",
      "Design an elegant capture-to-organise workflow.",
      "Lay the groundwork for realtime collaboration.",
    ],
    objectives: ["Frictionless capture", "Elegant organisation", "Responsive across devices", "Collaboration-ready"],
    features: [
      { title: "Instant Capture", desc: "Zero-friction note creation with keyboard shortcuts." },
      { title: "Smart Organisation", desc: "Tags, search and pins that actually feel fast." },
      { title: "Responsive UI", desc: "First-class experience on desktop, tablet and mobile." },
      { title: "Collaboration Ready", desc: "Architected for realtime multi-user editing." },
    ],
    workflow: ["Capture", "Organise", "Search", "Share"],
    challenges: ["Keeping the UI truly minimal while adding power features.", "Designing an architecture that scales into realtime."],
    impact: "A production-grade template for personal knowledge apps — proving that speed and elegance can co-exist.",
    future: ["Realtime collaboration", "Offline-first sync", "AI summarisation"],
  },
  {
    slug: "ai-career-intelligence-platform",
    title: "AI Career Intelligence Platform",
    tagline: "A flagship AI product that turns career decisions into data-driven journeys.",
    overview: "An enterprise-grade AI platform that analyses resumes, recommends careers, identifies skill gaps and generates personalised learning roadmaps — with an admin dashboard for analytics at scale.",
    status: "In Progress",
    featured: true,
    tags: ["AI", "Data Analytics", "Full Stack", "Product"],
    stack: [
      { group: "AI", items: ["LLMs", "Embeddings", "Python"] },
      { group: "Frontend", items: ["React", "TypeScript", "Tailwind"] },
      { group: "Backend", items: ["Node.js", "REST APIs"] },
      { group: "Data", items: ["MySQL", "Pandas", "Power BI"] },
    ],
    problem: "Students and early-career professionals lack a personalised, data-driven way to plan their careers — advice is generic, gated, or expensive.",
    solution: [
      "Analyse resumes with LLMs to extract skills, roles and gaps.",
      "Recommend careers using embedding similarity + market data.",
      "Generate step-by-step learning roadmaps.",
      "Surface job matches and salary benchmarks.",
      "Give admins dashboards to track platform-wide outcomes.",
    ],
    objectives: ["Resume intelligence", "Career recommendations", "Skill-gap analysis", "Learning roadmap generation", "Job matching", "Salary insights"],
    features: [
      { title: "AI Resume Analyzer", desc: "Extracts skills, experience and role fit from any resume." },
      { title: "Career Recommendation Engine", desc: "Embedding-based recommendations tuned to the user's profile." },
      { title: "Skill Gap Analysis", desc: "Compares the user against target roles and prescribes next steps." },
      { title: "Personalised Roadmap", desc: "Auto-generated learning path with milestones and resources." },
      { title: "AI Assistant", desc: "A career coach available 24/7 in-app." },
      { title: "Admin Dashboard", desc: "Analytics for platform-wide skills, gaps and outcomes." },
    ],
    workflow: ["Upload Resume", "AI Analysis", "Recommendations", "Skill Gap", "Roadmap", "Job Matching"],
    challenges: [
      "Grounding LLM outputs against real market data.",
      "Designing a UX that surfaces AI power without overwhelming the user.",
    ],
    impact: "Democratises career intelligence — bringing enterprise-grade guidance to every student and early-career professional.",
    future: ["Voice-driven career coach", "University partner dashboards", "Mobile app", "Multi-language support"],
  },
];

export const certificates = [
  { slug: "power-bi", title: "Power BI Data Analytics", issuer: "Microsoft Learn", date: "2024", tech: "Power BI", desc: "Built interactive dashboards, DAX measures and data models for executive reporting." },
  { slug: "data-analytics", title: "Data Analytics Foundations", issuer: "Industry Program", date: "2024", tech: "Analytics", desc: "Core statistics, SQL and Python fundamentals applied to real datasets." },
  { slug: "javascript", title: "JavaScript Essentials", issuer: "HackerRank", date: "2024", tech: "JavaScript", desc: "Modern ES features, DOM APIs and asynchronous patterns." },
  { slug: "hackathon", title: "Hackathon Finalist", issuer: "National Hackathon", date: "2024", tech: "Product", desc: "Selected as finalist for building an impactful data-driven prototype." },
  { slug: "ai-fundamentals", title: "AI Fundamentals", issuer: "Industry Program", date: "2025", tech: "AI/ML", desc: "Foundations of machine learning, neural networks and applied AI." },
];

export const journey = [
  "Started Engineering",
  "Learned Programming",
  "Mastered SQL",
  "Built Power BI Dashboards",
  "Landed Internships",
  "Shipped Real Projects",
  "Built AI Portfolio",
  "Future Data Analyst",
];
