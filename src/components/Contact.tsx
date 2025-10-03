import { Button } from "@/components/ui_components/button";
import { Mail } from "lucide-react";
import { email, socialLinks, contact } from "@/components/data/data";

const ContactSection = () => {
  return (
  <section id="contact" className="py-4 lg:py-16 bg-navy-dark scroll-offset-mobile">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-lighter mb-6">
            {contact[1].header}
          </h2>
          <p className="text-slate mb-8">
            {contact[2].description}
          </p>
          <div className="flex justify-center">
            <Button
              className="group bg-transparent hover:bg-highlight/10 text-highlight border-2 border-highlight rounded-md px-6 py-6 text-base transition duration-300 hover:shadow-[0_0_10px_2px] hover:shadow-highlight flex gap-2 items-center"
              onClick={() => (window.location.href = `mailto:${email}`)}
            >
              <Mail className="mr-2 h-5 w-5" />
              Say Hello
            </Button>
          </div>
          <div className="flex justify-center mt-12 space-x-8 text-2xl">
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-slate hover:text-highlight transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
