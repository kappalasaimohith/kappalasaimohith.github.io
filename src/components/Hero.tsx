import { motion } from "framer-motion";
import { Button } from "@/components/ui_components/button";
import { ArrowRight } from "lucide-react";
import { info } from "@/components/data/data.tsx";
import { useEffect, useState } from "react";

export const useTypewriter = (fullText, speed = 100) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!fullText) return;

    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.substring(0, index + 1));
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, fullText, speed]);

  return text;
};

const Hero = () => {
  const typedName = useTypewriter(info.name, 100);

  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-dark"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-highlight/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-highlight font-mono mb-4 text-xl md:text-2xl"
          >
            {info.greeting}
          </motion.p>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-lighter mb-4 min-h-[80px] md:min-h-[96px]">
            {typedName}
            <span className="animate-pulse text-highlight">|</span>
          </h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-slate mb-6"
          >
            {info.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 1 }}
            className="text-lg md:text-xl text-slate-light mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {info.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.5 }}
          >
            <Button
              className="group relative bg-transparent hover:bg-highlight/10 text-highlight border border-highlight rounded-md px-8 py-6 text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(100,255,218,0.3)] overflow-hidden"
              onClick={scrollToProjects}
            >
              <span className="relative z-10 flex items-center gap-2">
                My Works
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
