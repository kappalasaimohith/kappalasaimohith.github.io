import { skillCategories } from "./data/data";
import { useInView } from "../hooks/use-in-view";
const Skills = () => {
  const [ref, isInView] = useInView(0.2);

  return (
  <section id="skills" className="py-16 scroll-offset-mobile" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <h2 className={`section-heading`}>
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-navy-dark p-6 rounded-lg border border-slate/10 hover:border-highlight/20 transition-all duration-300 opacity-0 hover:border-highlight hover:shadow-[0_0_10px_2px] hover:shadow-highlight ${
                isInView ? "fade-in-up" : ""
              }`}
              style={{
                animationDelay: isInView ? `${index * 150}ms` : "0ms",
                animationFillMode: "forwards",
              }}
            >
              <h3 className="text-xl font-bold text-highlight mb-4">
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`skill-tag opacity-0 ${isInView ? "fade-in-up" : ""}`}
                    style={{
                      animationDelay: isInView
                        ? `${index * 150 + skillIndex * 50}ms`
                        : "0ms",
                      animationFillMode: "forwards",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
