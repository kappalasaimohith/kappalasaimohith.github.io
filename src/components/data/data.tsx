import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
// import { FaWhatsapp } from 'react-icons/fa';

export const about = [
  {
    about_me: `I'm a developer passionate about creating seamless and scalable web applications. I specialize in React, Node.js, MongoDB, Django, and I thrive on complex problems to enhance user experiences.
              I believe in continuous learning and collaboration, tackling complex challenges with innovative solutions.
              Outside of coding, I like exploring new tech, playing chess, and spending time outdoors.`,
  },
];


export const experiences = [
  {
    jobTitle: 'AI Engineering Intern',
    company: 'Deep Learning Titans',
    duration: 'November 2025 - December 2025',
    description: [
      'Extracted profiles from external websites using Apify for automated data collection and analysis',
      'Used DeepSeek API to analyze data and score leads based on quality',
      'Created personalized outreach messages using lead scores using DeepSeek API'
    ]
  },
  // {
  //   jobTitle: 'Data Analyst Intern',
  //   company: 'Uptoskills',
  //   duration: 'January 2025 - April 2025',
  //   description: [
  //     'Collaborated with a team to collect, analyze, clean, and interpret data on engineering colleges.',
  //     'Used Python and Power BI to create interactive dashboards and reports, improving the clarity and effectiveness of data presentation.',
  //     'Developed a strong understanding of data analysis and data-driven decision-making processes.'
  //   ],
  // },
  {
    jobTitle: 'Full Stack Developer Intern',
    company: 'G. A. Digital Solutions',
    duration: 'May 2024 - July 2024',
    description: [
      'Developed core modules in a recruitment management platform, including user authentication, role-based access control, and resume parsing using React and Django.',
      'Implemented secure registration and login workflows with structured dashboards for clients, recruiters, and candidates, and automated role-based permission logic.',
      'Designed and built responsive UI components such as sidebars, status trackers, and job posting forms to streamline navigation and improve user experience across modules.',
    ],
  },
];



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
    image: '/placeholder.svg',
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
    image: '/placeholder.svg',
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
    image: '/placeholder.svg',
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
    image: '/placeholder.svg',
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
    image: '/placeholder.svg',
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
    image: '/placeholder.svg',
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

export const skillCategories = [
  {
    category: "Frontend Development",
    skills: [
      "HTML5", "CSS3", "JavaScript", "React", "TypeScript", 
      "Next.js", "Tailwind CSS", "Bootstrap", "Material UI", "shadcn/ui", "Ant Design",
    ]
  },
  {
    category: "Backend Development",
    skills: [
      "Node.js", "Express", "Python", "Django", "Next.js",
      "REST API", "MongoDB", "PostgreSQL", "Supabase",
    ]
  },
  {
    category: "Languages",
    skills: [
      "Java", "JavaScript", "Python", "C++", "Go", "TypeScript"
    ]
  },
  {
    category: "Version Control & CI/CD",
    skills: [
      "Git", "GitHub"
    ]
  },
  {
    category: "Cloud & Hosting",
    skills: [
      "Vercel", "Netlify", "Render", "Github Pages (gh-pages)", // "AWS (basic)"
    ]
  },
  // {
  //   category: "Tools & Design",
  //   skills: [
  //     "VS Code", "Docker", "Figma", "Postman", "Sublime Text"
  //   ]
  // },
  {
    category: "Data Analysis & Tools",
    skills: [
      "Pandas", "NumPy", "Matplotlib", "Seaborn", "Excel", "Jupyter Notebook",
      "VS Code", "Docker", "Figma", "Postman", "Sublime Text"
    ]
  }
];

export const socialLinks = [
  { href: 'https://linkedin.com/in/kappalasaimohith', label: 'LinkedIn', icon: <FaLinkedin /> },
  { href: 'https://github.com/kappalasaimohith', label: 'GitHub', icon: <FaGithub /> },
  { href: 'https://x.com/KappalaSaiMohit', label: 'Twitter', icon: <FaTwitter /> }, 
  { href: 'https://instagram.com/saimohithk', label: 'Instagram', icon: <FaInstagram /> },
  // { href: 'https://t.me/kappalasaimohith', label: 'Telegram', icon: <FaTelegram /> },
  // { href: 'https://wa.me/917569400290', label: 'WhatsApp', icon: <FaWhatsapp /> },
];

export const info = {
  greeting: "Hello, I'm ",
  name: 'Sai Mohith Kappala',
  more: 'I love building amazing web experiences',
};

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

export const contact = [
  {
    label: 'Email',
    value: 'kappalasaimohith2003@gmail.com',
    href: 'mailto:kappalsaimohith2003@gmail.com',
  },
  {
    header: 'Get in Touch',
  },
  {
    description: `I'm currently open to new opportunities. Whether you have a question, a project in mind, or just want to say hi, feel free to reach out and I'll do my best to get back to you!`,
  },
]

export const email = 'kappalasaimohith2003@gmail.com';
