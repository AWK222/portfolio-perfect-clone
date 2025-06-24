import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Clients from "@/components/Clients";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import ContentCreator from "@/components/contentcreator";
import BrandsAndPartnerships from "@/components/Brandsandpartnerships";
import ContentCreatorContact from "@/components/ContentCreatorContact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Clients />
      <Certifications />
      <Contact />
      <ContentCreator />
      <BrandsAndPartnerships />
      <ContentCreatorContact />
    </div>
  );
};

export default Index;
