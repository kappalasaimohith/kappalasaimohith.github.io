import { Button } from "@/components/ui_components/button";
import { Mail } from "lucide-react";
import { email, socialLinks, contact } from "@/components/data/data";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-navy-dark overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-lighter mb-6">
            {contact[1].header}
          </h2>
          <p className="text-slate text-lg mb-10 leading-relaxed">
            {contact[2].description}
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button
              className="group bg-transparent hover:bg-highlight/10 text-highlight border border-highlight rounded-md px-8 py-6 text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(100,255,218,0.3)] flex gap-2 items-center"
              onClick={() => (window.location.href = `mailto:${email}`)}
            >
              <Mail className="w-5 h-5 group-hover:animate-bounce" />
              Say Hello
            </Button>
          </motion.div>
        </motion.div>

        <div className="mt-20 flex justify-center space-x-8">
          {socialLinks.map(({ href, label, icon }, index) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              whileHover={{ y: -5, color: '#64ffda' }}
              className="text-slate hover:text-highlight text-3xl transition-colors duration-300"
            >
              {icon}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
