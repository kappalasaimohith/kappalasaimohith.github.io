import { useState } from "react";
import { Button } from "@/components/ui_components/button";
import { Code, ExternalLink, Folder } from "lucide-react";
import { projects } from "./data/data.tsx";
import { motion, AnimatePresence } from "framer-motion";

const INITIAL_PROJECTS = 6;
const LOAD_MORE_COUNT = 2;

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_PROJECTS);
  const visibleProjects = projects.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, projects.length));
  };

  return (
    <section id="projects" className="py-20 bg-navy-dark scroll-offset-mobile">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="section-heading mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Some Things I've Built
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <div className="group h-full bg-navy-dark p-8 rounded-lg shadow-xl border border-slate/10 hover:border-highlight/30 transition-all duration-300 hover:-translate-y-2 flex flex-col">
                  {/* Card Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="text-highlight">
                      <Folder size={40} strokeWidth={1} />
                    </div>
                    <div className="flex gap-4 text-slate-light">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-highlight transition-colors" aria-label="GitHub Link">
                          <Code size={20} />
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hover:text-highlight transition-colors" aria-label="Live Demo Link">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <h3 className="text-xl font-bold text-slate-lighter mb-2 group-hover:text-highlight transition-colors">
                    {project.title}
                  </h3>

                  <div className="text-slate-light text-sm mb-6 flex-grow">
                    {/* Assuming description is an array based on previous file content, but handling text as well just in case */}
                    <div className="space-y-2">
                      {project.description.map((point, i) => (
                        <p key={i}>{point}</p>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer (Tags) */}
                  <div className="flex flex-wrap gap-3 text-xs font-mono text-slate">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="hover:text-highlight transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {visibleCount < projects.length && (
          <div className="mt-16 flex justify-center">
            <Button
              variant="outline"
              className="border-highlight text-highlight hover:bg-highlight/10 px-8 py-6 rounded-md font-mono text-sm transition-all duration-300"
              onClick={handleLoadMore}
            >
              Show More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
