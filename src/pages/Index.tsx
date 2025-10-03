import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";
import Experience from "@/components/Experiences";

const Index = () => {
  return (
    <div className="bg-navy min-h-screen">
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;