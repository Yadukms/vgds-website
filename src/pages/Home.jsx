import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats";
import Solutions from "../components/Solutions";
import AboutSection from "../components/AboutSection";
import QuoteSection from "../components/QuoteSection";
import ServicesSection from "../components/ServicesSection";
import WhyVGDS from "../components/WhyVGDS";
import FAQSection from "../components/FAQSection";
import OurProcess from "../components/OurProcess";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Solutions />
      <AboutSection />
      <QuoteSection />
      <ServicesSection />
      <WhyVGDS />
      <FAQSection />
      <OurProcess />
    </>
  );
}
