import { CONTACT } from "@/constants/contact";
import { SERVICES } from "@/constants/services";

const SITE_URL = "https://physioleben.com";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Physiotherapist",
    "@id": `${SITE_URL}#practice`,
    name: "Physioleben",
    description:
      "Physiotherapie-Praxis in Selm — Krankengymnastik, Manuelle Lymphdrainage, Klassische Massage, Triggerpunkt- und Wärmetherapie. Alle Kassen & Privat, Hausbesuche möglich.",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo_physio_leben.webp`,
    image: `${SITE_URL}/images/about.jpg`,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kreisstraße 89C",
      postalCode: "59379",
      addressLocality: "Selm",
      addressRegion: "Nordrhein-Westfalen",
      addressCountry: "DE",
    },
    areaServed: [
      { "@type": "City", name: "Selm" },
      { "@type": "City", name: "Lünen" },
      { "@type": "City", name: "Werne" },
      { "@type": "City", name: "Olfen" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    medicalSpecialty: "Physiotherapy",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Leistungen",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalTherapy",
          name: service.title,
          description: service.description,
        },
      })),
    },
    sameAs: [CONTACT.whatsappHref],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
