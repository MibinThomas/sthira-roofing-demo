import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import RoofingSolutions from "@/components/RoofingSolutions";
import PebSolutions from "@/components/PebSolutions";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProjectHighlights from "@/components/ProjectHighlights";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import ContactCta from "@/components/ContactCta";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f2f6fa] text-slate-900 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      <Header />
      <Hero />
      <AboutSection />
      <RoofingSolutions />
      <PebSolutions />
      <WhyChooseUs />
      <ProjectHighlights />
      <Testimonials />
      <FaqSection />
      <ContactCta />
      <FloatingWhatsApp />
      <Footer />
    </main>
  );
}
