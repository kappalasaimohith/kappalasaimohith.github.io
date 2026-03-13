import { skillCategories } from "./data/data";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython,
  FaGitAlt, FaGithub, FaDocker, FaJava
} from "react-icons/fa";
import {
  SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb,
  SiPostgresql, SiSupabase, SiExpress, SiDjango, SiGo,
  SiVercel, SiNetlify, SiRender, SiAntdesign, SiBootstrap,
  SiMui, SiGoogle, SiPostman, SiGnubash, SiLinux, SiCplusplus,
  SiCmake,
  SiOllama, 
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const iconMap: { [key: string]: JSX.Element } = {
  "HTML5": <FaHtml5 />,
  "CSS3": <FaCss3Alt />,
  "JavaScript": <FaJs />,
  "TypeScript": <SiTypescript />,
  "React": <FaReact />,
  "Tailwind CSS": <SiTailwindcss />,
  "Ant Design": <SiAntdesign />,
  "shadcn/ui": <span className="font-bold text-xs">cn</span>, // No specific icon, custom
  "Material UI": <SiMui />,
  "Bootstrap": <SiBootstrap />,
  "Next.js": <SiNextdotjs />,

  "Node.js": <FaNodeJs />,
  "Express.js": <SiExpress />,
  "Django": <SiDjango />,
  "Python": <FaPython />,
  "Go": <SiGo />,
  "C++": <SiCplusplus />,
  "Java": <FaJava />,
  "REST APIs": <span className="font-mono text-xs">API</span>,

  "MongoDB": <SiMongodb />,
  "PostgreSQL": <SiPostgresql />,
  "Supabase": <SiSupabase />,
  "SQL": <span className="font-mono text-xs">SQL</span>,

  "Git & GitHub": <FaGithub />,
  "Docker": <FaDocker />,
  "Vercel": <SiVercel />,
  "Netlify": <SiNetlify />,
  "Render": <SiRender />,
  "Linux": <SiLinux />,
  "Shell Scripting": <SiGnubash />,
  "CMake": <SiCmake />,
  "VS Code": <TbBrandVscode />,
  "Postman": <SiPostman />,
  "Google Test (gtest)": <span className="font-mono text-xs">Test</span>,
  
  "Gemini API": <SiGoogle />,
  "Ollama / Local LLMs": <SiOllama />,
  "DeepSeek API": <span className="font-mono text-xs">AI</span>,
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-navy-dark scroll-offset-mobile">
      <div className="container mx-auto px-6">
        <motion.h2
          className="section-heading mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-navy-dark p-6 rounded-lg border border-slate/10 hover:border-highlight/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-highlight mb-6 border-b border-slate/10 pb-2">
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-2 bg-navy-dark px-3 py-2 rounded-md text-sm text-slate-light border border-slate/10 hover:border-highlight/50 hover:text-highlight transition-all duration-300"
                  >
                    <span className="text-lg">
                      {iconMap[skill] || <span className="w-1 h-1 rounded-full bg-highlight" />}
                    </span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
