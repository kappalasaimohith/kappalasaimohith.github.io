import { experiences } from "./data/data";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-navy-dark overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          className="section-heading mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >Where I've Worked
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-slate/20" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  } items-start md:items-center gap-8`}
              >
                <div className="absolute left-[-5px] md:left-1/2 md:transform md:-translate-x-1/2 w-2.5 h-2.5 bg-highlight rounded-full border-4 border-navy-dark z-10" />

                {/* Date Side (Desktop) */}
                <div className={`hidden md:block w-1/2 text-slate-light font-mono text-sm ${index % 2 === 0 ? "text-right pr-12" : "text-left pl-12"
                  }`}>
                  {experience.duration}
                </div>

                {/* Content Side */}
                <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                  }`}>
                  <div className="bg-navy-light p-6 rounded-lg shadow-lg border border-slate/10 hover:border-highlight/30 transition-colors duration-300 relative group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-highlight/50 rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <h3 className="text-xl font-bold text-slate-lighter mb-1">
                      {experience.jobTitle}
                    </h3>
                    <p className="text-highlight font-mono text-sm mb-4">
                      {experience.company} <span className="md:hidden">| {experience.duration}</span>
                    </p>

                    <div className="text-slate-light text-sm">
                      {Array.isArray(experience.description) ? (
                        <ul className="list-none space-y-2">
                          {experience.description.map((point, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-highlight mr-2 mt-1.5 text-xs">▹</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>{experience.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
