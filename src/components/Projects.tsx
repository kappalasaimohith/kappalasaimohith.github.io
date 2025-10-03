import { useState } from "react";
import { Button } from "@/components/ui_components/button";
import { Code, Link } from "lucide-react";
import { projects } from "./data/data";
import { useMultipleInView } from "@/hooks/use-in-view";

const INITIAL_PROJECTS = 4;
const LOAD_MORE_COUNT = 2;

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_PROJECTS);
  const visibleProjects = projects.slice(0, visibleCount);

  const [refs, inViews] = useMultipleInView(visibleProjects.length);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, projects.length));
  };

  const isOdd = visibleProjects.length % 2 !== 0;

  return (
  <section id="projects" className="py-16 bg-navy-dark scroll-offset-mobile">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {visibleProjects.map((project, index) => {
            const animationClass = inViews[index]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6";
            const isLastOdd =
              isOdd && index === visibleProjects.length - 1;

            return (
              <div
                key={index}
                ref={(el) => (refs.current[index] = el)}
                className={`transition-all duration-700 ease-out ${animationClass} ${
                  isLastOdd ? "md:col-span-2 md:mx-auto md:w-1/2" : ""
                }`}
              >
                <div className="bg-navy-dark p-6 rounded-lg shadow-md border border-slate/10 h-full flex flex-col justify-between transition duration-300 hover:border-highlight hover:shadow-[0_0_20px_2px] hover:shadow-highlight">
                  <div>
                    <h3 className="text-2xl font-semibold text-highlight mb-4">
                      {project.title}
                    </h3>

                    <ul className="list-none space-y-2 mb-6">
                      {project.description.map((point, i) => (
                        <li key={i} className="flex items-start text-slate-light">
                          <span className="text-highlight mr-2">▹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="skill-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 mt-auto">
                    <Button
                      className="group bg-transparent hover:bg-highlight/10 text-highlight border-2 border-highlight rounded-md px-6 py-3 text-base transition duration-300 hover:shadow-[0_0_10px_2px] hover:shadow-highlight flex gap-2 items-center"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Code size={16} />
                      Code
                    </Button>
                    {project.demo && (
                      <Button
                        className="group bg-transparent hover:bg-highlight/10 text-highlight border-2 border-highlight rounded-md px-6 py-3 text-base transition duration-300 hover:shadow-[0_0_10px_2px] hover:shadow-highlight flex gap-2 items-center"
                        onClick={() => window.open(project.demo, "_blank")}
                      >
                        <Link size={16} />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {visibleCount < projects.length && (
          <div className="mt-12 flex justify-center">
            <Button
              className="group bg-transparent hover:bg-highlight/10 text-highlight border-2 border-highlight rounded-md px-6 py-3 text-base transition duration-300 hover:shadow-[0_0_10px_2px] hover:shadow-highlight flex gap-2 items-center"
              onClick={handleLoadMore}
            >
              Load More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
