import { about, technologies } from "./data/data";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export type CodeToken = {
  text: string;
  className: string;
};

export const useTypewriterTokens = (
  tokens: CodeToken[],
  speed: number = 20,
  isActive: boolean = true
) => {
  const [displayed, setDisplayed] = useState<CodeToken[]>([]);
  const [tokenIndex, setTokenIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setDisplayed([]);
      setTokenIndex(0);
      setCharIndex(0);
      return;
    }

    if (tokenIndex >= tokens.length) return;

    const currentToken = tokens[tokenIndex];

    const timeout = setTimeout(() => {
      const nextChar = currentToken.text[charIndex];

      setDisplayed((prev) => {
        const updated = [...prev];
        if (!updated[tokenIndex]) {
          updated[tokenIndex] = {
            text: nextChar,
            className: currentToken.className,
          };
        } else {
          updated[tokenIndex] = {
            ...updated[tokenIndex],
            text: updated[tokenIndex].text + nextChar,
          };
        }
        return updated;
      });

      if (charIndex + 1 < currentToken.text.length) {
        setCharIndex((prev) => prev + 1);
      } else {
        setTokenIndex((prev) => prev + 1);
        setCharIndex(0);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, tokenIndex, tokens, speed, isActive]);

  return displayed;
};

const CODE_TOKENS: CodeToken[] = [
  { text: "const ", className: "text-purple-400" },
  { text: "person ", className: "text-yellow-400" },
  { text: "= ", className: "text-slate-light" },
  { text: "{\n", className: "text-purple-400" },
  { text: "  name: ", className: "text-slate-light" },
  { text: '"Sai Mohith"', className: "text-green-400" },
  { text: ",\n", className: "text-slate-light" },
  { text: "  role: ", className: "text-slate-light" },
  { text: '"Full Stack Developer"', className: "text-green-400" },
  { text: ",\n", className: "text-slate-light" },
  { text: "  passion: ", className: "text-slate-light" },
  { text: '"Building scalable web apps"', className: "text-green-400" },
  { text: ",\n", className: "text-slate-light" },
  { text: "  status: ", className: "text-slate-light" },
  { text: '"Open to work"', className: "text-green-400" },
  { text: ",\n", className: "text-slate-light" },
  { text: "};\n\n", className: "text-purple-400" },
  { text: "// Always learning", className: "text-slate/50" },
];

const About = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const typedTokens = useTypewriterTokens(CODE_TOKENS, 15, isVisible);
  const hasTyped = useRef(false);

  useEffect(() => {
    if (!terminalRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!hasTyped.current) {
              setIsVisible(true);
            }
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(terminalRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-navy-dark overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading mb-12 flex items-center">
            <span className="text-highlight mr-2"></span>About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <motion.div
            className="md:col-span-3 text-slate-light text-lg leading-relaxed"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {about[0].about_me.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-6">
                {paragraph.trim()}
              </p>
            ))}

            <p className="mb-4">
              Here are a few technologies I have been working with recently:
            </p>

            <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
              {technologies.map((tech, idx) => (
                <li key={idx} className="flex items-center text-slate">
                  <span className="text-highlight mr-2">▹</span>
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            ref={terminalRef}
            className="md:col-span-2 relative group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative w-full aspect-square md:aspect-auto md:h-full max-h-[400px]">
              <div className="absolute inset-0 border-2 border-highlight rounded-lg translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />

              <div className="absolute inset-0 bg-navy-light rounded-lg overflow-hidden shadow-xl border border-slate/20 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1">
                <div className="bg-navy-dark px-4 py-2 border-b border-slate/20 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="ml-4 text-xs text-slate font-mono">
                    sai_mohith_profile.ts
                  </div>
                </div>

                <div className="p-6 font-mono text-sm whitespace-pre-wrap">
                  {typedTokens.map((token, idx) => (
                    <span key={idx} className={token.className}>
                      {token.text}
                    </span>
                  ))}
                  <span className="animate-pulse text-highlight">_</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;