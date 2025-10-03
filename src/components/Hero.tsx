import { useEffect, useState } from "react";
import { Button } from "@/components/ui_components/button";
import { ArrowRight } from "lucide-react";
import { info } from "@/components/data/data";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScrollToProjects = () => {
    const section = document.getElementById("projects");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center py-4 bg-navy-dark"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container px-16a md:px-6 flex justify-center">
        <div
          className={`max-w-3xl text-center transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-highlight font-mono mb-5 text-2xl">{info.greeting}</p>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-lighter mb-4">
            {info.name}
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-slate mb-6">
            {info.more}
          </h2>
          <Button
            className="group bg-transparent hover:bg-highlight/10 text-highlight border-2 border-highlight rounded-md px-7 py-6 text-lg transition duration-300 hover:border-highlight hover:shadow-[0_0_10px_2px] hover:shadow-highlight"
            onClick={handleScrollToProjects}
          >
            Check out my work
            <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2">
              <ArrowRight strokeWidth={4} />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
