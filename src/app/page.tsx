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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://laborpatronatoecafgiovinazzo.vercel.app/#business",
  name: "Labor Patronato e CAF Giovinazzo",
  description:
    "Assistenza fiscale, previdenziale e pratiche CAF e Patronato a Giovinazzo.",
  url: "https://laborpatronatoecafgiovinazzo.vercel.app/",
  image: "https://laborpatronatoecafgiovinazzo.vercel.app/labor-logo.jpg",
  telephone: "+39 080 237 6085",
  email: "labor.giovinazzo@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Marconi, 95",
    addressLocality: "Giovinazzo",
    addressRegion: "BA",
    postalCode: "70054",
    addressCountry: "IT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.184834,
    longitude: 16.67074,
  },
  areaServed: {
    "@type": "City",
    name: "Giovinazzo",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:30",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Thursday"],
      opens: "16:30",
      closes: "19:00",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
        }}
      />
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
