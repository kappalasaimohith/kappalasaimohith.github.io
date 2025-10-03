import { useState, useEffect } from "react";
import { Button } from "@/components/ui_components/button";

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

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleResumeClick = () => {
    setShowResume(true);
    document.title = "My Resume";
    const link = document.createElement("a");
    link.href = "/Sai_Mohith_Kappala_Resume.pdf";
    link.download = "Sai_Mohith_Kappala_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const closeResume = () => {
    setShowResume(false);
    document.title = "Kappala Sai Mohith";
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-transparent backdrop-blur-2xl py-6 shadow-lg"
            : "bg-navy-dark py-5"
        }`}
      >
        <div className="relative container mx-auto font-bold px-4 py-2 md:px-6 flex items-center justify-between">

          <div className="flex-1 hidden md:block" />

          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-2">
            <nav className="flex items-center space-x-1">
              {menuItems.map((id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="nav-link"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}
            </nav>
            <Button
              variant="outline"
              size="sm"
              className="border-highlight text-highlight hover:bg-highlight/10 hover:text-highlight hover:shadow-[0_0_10px_2px] hover:shadow-highlight transition-shadow duration-300"
              onClick={handleResumeClick}
            >
              Resume
            </Button>
          </div>

          <div className="flex w-full justify-end md:hidden">
            <button
              className="text-slate-light hover:text-highlight"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
                className="transition-transform duration-3000 ease-in-out"
              >
                {mobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <>
                    <path d="M3 6h18" />
                    <path d="M3 12h18" />
                    <path d="M3 18h18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="absolute top-full w-60 right-0 bg-navy-dark/95 backdrop-blur-lg md:hidden border-b border-slate/80 animate-fade-in z-40 rounded-lg">
            <nav className="flex flex-col">
              {menuItems.map((id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="nav-link text-center border-b border-slate/10 last:border-0 py-2"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}
              <Button
                variant="outline"
                size="sm"
                className="border-highlight text-highlight hover:bg-highlight/10 hover:text-highlight hover:shadow-[0_0_10px_2px] hover:shadow-highlight transition-shadow duration-300"
                onClick={handleResumeClick}
              >
                Resume
              </Button>
            </nav>
          </div>
        )}
      </header>

      {showResume && (
        <div className="fixed inset-0 z-50 bg-navy-dark bg-opacity-95 backdrop-blur-md flex flex-col items-center justify-start pt-4 px-4">
          <div className="flex justify-between items-center w-full max-w-6xl mb-4">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-highlight font-bold text-center sm:text-left">
              Sai_Mohith_Kappala_Resume
            </h2>
            <button
              onClick={closeResume}
              className="text-slate-light hover:text-red-500 text-xl"
              aria-label="Close Resume"
            >
              ✕
            </button>
          </div>
          <iframe
            src="/Sai_Mohith_Kappala_Resume.pdf"
            className="w-full max-w-6xl h-[90vh] border border-highlight rounded-md shadow-lg"
            title="Resume PDF"
          />
        </div>
      )}
    </>
  );
};

export default NavBar;
