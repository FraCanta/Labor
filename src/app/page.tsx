import {
  AboutSection,
  ContactSection,
  Footer,
  Header,
  Hero,
  LocationSection,
  ProcessSection,
  ServicesSection,
} from "@/components";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
