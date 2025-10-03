import { experiences } from "./data/data";
import { useMultipleInView } from "../hooks/use-in-view";
import clsx from "clsx";

const Experience = () => {
  const [refs, inViews] = useMultipleInView(experiences.length, 0.3);

  return (
  <section id="experience" className="py-16 bg-navy-dark scroll-offset-mobile">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Experience</h2>

        <div className="space-y-16 mt-12">
          {experiences.map((experience, index) => (
            <div
              key={index}
              ref={(el) => (refs.current[index] = el)}
              className={clsx(
                "transform transition-all duration-300 delay-150 ease-out bg-navy-dark p-6 rounded-lg shadow-lg border border-slate/10 hover:border-highlight/20 hover:border-highlight hover:shadow-[0_0_10px_2px] hover:shadow-highlight",
                {
                  "opacity-0 translate-y-10": !inViews[index],
                  "opacity-100 translate-y-0": inViews[index],
                }
              )}
            >
              <h3 className="text-2xl font-bold text-slate-lighter mb-3">
                {experience.jobTitle}
              </h3>
              <p className="text-slate-light mb-1">
                <span className="text-highlight">{experience.company}</span> | {experience.duration}
              </p>
              <div className="mt-4">
                {Array.isArray(experience.description) ? (
                  <ul className="list-none space-y-2">
                    {experience.description.map((point, i) => (
                      <li key={i} className="flex items-start text-slate-light">
                        <span className="text-highlight mr-2">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-light">{experience.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
