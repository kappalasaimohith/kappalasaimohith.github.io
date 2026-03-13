import { useState, useEffect } from "react";
import { Button } from "@/components/ui_components/button";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = ["about", "experience", "projects", "skills", "contact"];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleResumeClick = () => {
    setShowResume(true);
    document.title = "My Resume";
  };

  const closeResume = () => {
    setShowResume(false);
    document.title = "Kappala Sai Mohith";
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-[background,padding] duration-300 ${
          isScrolled
            ? "bg-navy-dark backdrop-blur-md shadow-lg border-b border-highlight/10 py-3"
            : "bg-navy-dark/0 py-6"
        }`}
      >
        <div className="w-full px-8 md:container md:mx-auto md:px-6 flex items-center justify-between">
          <span
            className="text-highlight font-mono text-2xl md:text-xl font-semibold tracking-wide cursor-pointer"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
          >
            &lt;SaiMohith /&gt;
          </span>

          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((id, index) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-slate-light hover:text-highlight font-mono text-sm"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="border-highlight text-highlight"
              onClick={handleResumeClick}
            >
              Resume
            </Button>
          </div>

          <button
            className="md:hidden z-[60] p-2 text-highlight"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              className="fixed top-0 right-0 h-full w-full max-w-xs bg-navy-dark z-50 flex flex-col items-center justify-center space-y-8"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
            >
              {menuItems.map((id, index) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-xl text-slate-light hover:text-highlight font-mono"
                >
                  <span className="text-highlight block text-sm mb-1">
                    0{index + 1}.
                  </span>
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}

              <Button
                variant="outline"
                size="lg"
                className="border-highlight text-highlight"
                onClick={handleResumeClick}
              >
                Resume
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {showResume && (
        <div className="fixed inset-0 z-[100] bg-navy-dark/95 backdrop-blur-md flex flex-col items-center justify-center p-4">
          <div className="w-full max-w-5xl h-full flex flex-col">
            <div className="flex justify-between items-center mb-4 px-2">
              <h2 className="text-xl text-highlight font-mono font-bold">
                Resume.pdf
              </h2>
              <button
                onClick={closeResume}
                className="text-slate-light hover:text-red-500"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 w-full bg-white/5 rounded-lg overflow-hidden">
              <iframe
                src="/Sai_Mohith_Kappala_Resume.pdf"
                className="w-full h-full"
                title="Resume PDF"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;