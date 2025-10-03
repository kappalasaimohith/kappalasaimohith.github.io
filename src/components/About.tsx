import { about, technologies } from "./data/data";

const About = () => {
  return (
    <section id="about" className="py-16 bg-navy-dark scroll-offset-mobile">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-8">About Me</h2>

        <div className="text-slate-light max-w-4xl mx-auto">
          {about[0].about_me.split("\n").map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph.trim()}</p>
          ))}

          <div className="mt-6">
            <p className="mb-2 font-semibold text-highlight">Technologies I've worked with recently:</p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
              {technologies.map((tech, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="text-highlight mr-2">•</span> {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
