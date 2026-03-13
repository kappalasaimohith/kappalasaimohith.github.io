import { FaLinkedin, FaGithub, FaInstagram, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

/* =========================
   BASIC INFO
========================= */
export const info = {
  greeting: "Hello, I'm ",
  name: 'Sai Mohith Kappala',
  title: 'Full-Stack Developer',
  tagline: 'Building scalable, high-performance web applications',
};

/* =========================
   ABOUT
========================= */
export const about = [
  {
    about_me: `I’m a Full-Stack Developer focused on building scalable, high-performance web applications. 
My work ranges from real-time tools and systems to AI integrations that improve user experiences. 
I enjoy solving complex problems using modern technologies like React, Node.js, Supabase, and Docker. 
Outside of coding, I’m passionate about competitive problem solving, exploring emerging tech, and playing chess.`,
  },
];


export const technologies = [
  "JavaScript (ES6+)",
  "React",
  "Node.js",
  "TypeScript",
  "Tailwind CSS",
  "MongoDB",
  "Next.js",
  "Go",
];

/* =========================
   EXPERIENCE
========================= */
export const experiences = [
  {
    jobTitle: "AI Engineer Intern",
    company: "Deep Learning Titans",
    duration: "Nov 2025 – Dec 2025",
    description: [
      "Automated lead data extraction using Apify for large-scale profile analysis.",
      "Implemented AI-driven lead scoring using DeepSeek API.",
      "Generated personalized outreach messages based on lead quality.",
    ],
  },
  {
    jobTitle: "Full Stack Developer Intern",
    company: "G. A. Digital Solutions",
    duration: "May 2024 – Jul 2024",
    description: [
      "Built core modules for a recruitment management platform using React and Django.",
      "Implemented secure authentication and role-based access control (RBAC).",
      "Designed responsive dashboards and forms to improve usability.",
    ],
  },
];

/* =========================
   PROJECTS
========================= */
export const projects = [
  {
    title: 'Online Compiler',
    description: [
      "Supports real-time code execution in multiple languages: Python, JavaScript, Go, PHP, Rust, C++, and Swift.",
      "Built with Next.js and CodeMirror for a responsive, syntax-aware code editor.",
      "Docker-based backend (Node.js) securely compiles and runs code in isolated containers.",
      "Designed for seamless user experience with efficient execution feedback."
    ],
    tech: ['Next.js', 'Node.js', 'CodeMirror', 'Docker'],
    github: "https://github.com/kappalasaimohith/online_compiler_frontend",
    demo: 'https://online-compiler-frontend-phi.vercel.app/',
  },
  {
    title: 'Edit Sync',
    description: [
      "Collaborative text editor with support for .md and .txt files.",
      "Built using React, TypeScript, and shadcn/ui for a modern interface.",
      "Includes syntax highlighting, undo/redo, and conflict-free editing.",
      "Optimized for smooth, low-latency collaboration across devices and screen sizes."
    ],
    tech: ['React', 'TypeScript', 'shadcn/ui'],
    github: 'https://github.com/kappalasaimohith/edit-sync-frontend',
    demo: 'https://edit-sync.vercel.app/',
  },
  {
    title: 'Visitor Management System',
    description: [
      "MyGate-style community platform where residents pre-authorise visitors, guards manage check-in/out, and admins oversee operations.",
      "Built with Supabase (Postgres + RLS) for secure authentication and strict role-based access control across residents, guards, and admins.",
      "Supports real-time visitor approvals, denials along with an AI Copilot that executes validated user commands through natural language chat.",
      "Every action creates an immutable audit trail ensuring transparency and accountability throughout the system for admins."
    ],
    tech: ['Supabase', 'PostgreSQL', 'RLS', 'Node.js', 'React', 'Vite', 'Gemini API'],
    github: 'https://github.com/visitor-management-system',
    demo: 'https://visitor-management-system-gray.vercel.app/',
  },
  {
    title: 'Portfolio Website',
    description: [
      "Personal portfolio built using React, TypeScript, and Tailwind CSS.",
      "Showcases projects, skills, and contact information in a modern layout.",
      "Smooth scrolling, responsive design, and accessible components using shadcn/ui.",
      "Optimized for performance, clarity, and ease of navigation."
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
    github: 'https://github.com/kappalasaimohith/portfolio',
    demo: 'https://kappalasaimohith.vercel.app/',
  },
  {
    title: "Chat App",
    description: [
      "A real-time chat application supporting group and direct messaging.",
      "Built with Node.js, Express, and Supabase for authentication and data storage.",
      "WebSocket integration for instant message delivery, with queued messages for offline users.",
      "Frontend built with React, Tailwind CSS, and Vite for a responsive UI with user status tracking.",
      "Includes user registration, login, chat creation, group management, and real-time updates."
    ],
    tech: ['Node.js', 'Express', 'Supabase', 'WebSocket', 'React', 'Tailwind CSS', 'Vite', 'dotenv'],
    github: "https://github.com/kappalasaimohith/chat_app_front",
    demo: "https://chat-app-frontend-jarvis.vercel.app/",
    image: "/placeholder.svg"
  },
  {
    title: 'Ecommerce Scraper',
    description : [
      "A Streamlit-based web app that scrapes product details from Amazon and Flipkart product pages.",
      "Extracts key information like title, price, MRP, rating, reviews, discount, description, and features using Requests and BeautifulSoup.",
      "Summarizes product content using a fine-tuned T5 model via Hugging Face Transformers.",
      "Displays extracted and summarized data in a user-friendly layout with expandable sections and interactive tables using Pandas and Streamlit components."
    ],
    tech : ['Python', 'Streamlit', 'Pandas', 'BeautifulSoup', 'Requests', 'Transformers (Hugging Face)', 'PyTorch', 'Regex (re)'],
    github: 'https://github.com/kappalasaimohith/scraper',
    demo: 'https://ecommerce-scraper.streamlit.app/',
  },
  {
    title: 'Weather App',
    description: [
      "Node.js and Express app fetching real-time weather from OpenWeather API.",
      "Shows key weather details like temperature, humidity, wind, and visibility.",
      "Caches data for 60 seconds to reduce API calls and boost performance.",
      "Includes rate limiting and a responsive UI with HTML, CSS, and vanilla JS."
    ],
    tech: ['Node.js', 'Express', 'HTML', 'CSS', 'JavaScript', 'Moment.js', 'express-rate-limit', 'dotenv', 'OpenWeather API'],
    github: 'https://github.com/kappalasaimohith/Weather',
    demo: 'https://weather-tc9g.onrender.com',
  },
  {
    title: "NOTES-APP",
    description: [
      "Full-stack CRUD note-taking app built with MongoDB, Express, React, and Node.js.",
      "Tailwind CSS for responsive and clean UI design.",
      "User authentication with secure login and session handling.",
      "Features include creating, reading, updating, and deleting notes with real-time updates."],
      tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      github: "https://github.com/kappalasaimohith/NOTES-MERN",
      demo: "https://notes-mern-beta.vercel.app/",
      image: "/placeholder.svg",
    },
  ];
  
/* =========================
   SKILLS
========================= */
export const skillCategories = [
  {
    category: "Frontend Development",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Ant Design",
      "shadcn/ui",
    ],
  },
  {
    category: "Backend Development",
    skills: [
      "Node.js",
      "Express.js",
      "Django",
      "REST APIs",
      "WebSockets",
      "Authentication & RBAC",
    ],
  },
  {
    category: "Databases & Storage",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "Supabase",
      "SQL",
      "Schema Design",
    ],
  },
  {
    category: "AI & Intelligent Systems",
    skills: [
      "Gemini API",
      "Ollama / Local LLMs",
      "AI Automation",
      "Lead Extraction (Apify)",
      "LLM-based Generation",
      "AI Integration",
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      "Git & GitHub",
      "Docker",
      "Linux",
      "Shell Scripting",
      "VS Code",
      "Postman",
    ],
  },
  {
    category: "Testing & Build",
    skills: [
      "Google Test (gtest)",
      "CMake",
      "Unit Testing",
      "Integration Testing",
      "Debugging",
      "CI/CD Concepts",
    ],
  },
];

/* =========================
   SOCIAL LINKS
========================= */
export const socialLinks = [
  {
    href: "https://linkedin.com/in/kappalasaimohith",
    label: "LinkedIn",
    icon: <FaLinkedin />,
  },
  {
    href: "https://github.com/kappalasaimohith",
    label: "GitHub",
    icon: <FaGithub />,
  },
  {
    href: "https://discord.com/users/kappalasaimohith",
    label: "Discord",
    icon: <FaDiscord />,
  },
  {
    href: "https://x.com/KappalaSaiMohit",
    label: "Twitter",
    icon: <FaXTwitter />,
  },
  {
    href: "https://instagram.com/saimohithk",
    label: "Instagram",
    icon: <FaInstagram />,
  },
];

/* =========================
   CONTACT
========================= */
export const email = "kappalasaimohith2003@gmail.com";

export const contact = [
  {
    label: "Email",
    value: email,
    href: `mailto:${email}`,
  },
  {
    header: "Get in Touch",
  },
  {
    description:
      "I'm currently open to new opportunities. Feel free to reach out if you have a project, question, or just want to connect.",
  },
];

/* =========================
    REPO URL
========================= */
export const repoUrl = "https://github.com/kappalasaimohith/kappalasaimohith.github.io";