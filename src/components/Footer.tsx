import { socialLinks } from "./data/data";
import { Star, GitFork } from "lucide-react";
import { repoUrl } from "./data/data";
const Footer = () => {
  return (
    <footer className="bg-navy-dark py-8 border-t border-slate/10 text-center">
      <div className="container mx-auto px-6">
        <div className="flex justify-center gap-6 mb-8 md:hidden">
          {socialLinks.map(({ href, icon, label }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-slate hover:text-highlight transition-colors text-xl"
            >
              {icon}
            </a>
          ))}
        </div>
        <div className="flex justify-center gap-6 mb-4 text-sm font-mono">
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-slate-light hover:text-highlight transition-colors group"
            aria-label="Star repository"
          >
            <Star size={14} className="group-hover:fill-highlight transition-colors" />
            Star
          </a>

          <a
            href={`${repoUrl}/fork`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-slate-light hover:text-highlight transition-colors group"
            aria-label="Fork repository"
          >
            <GitFork size={14} className="group-hover:fill-highlight transition-colors" />
            Fork
          </a>
        </div>

        <p className="text-slate text-sm font-mono">
          Designed & Built by <span className="text-highlight">Sai Mohith Kappala</span>
        </p>
        <p className="text-slate-dark text-xs mt-2">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;