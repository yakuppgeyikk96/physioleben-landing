import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/topbar/TopBar";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { StructuredData } from "@/components/seo/StructuredData";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://physioleben.com"),
  title: {
    default:
      "Physiotherapie Selm | Physioleben — Krankengymnastik, Massage, Lymphdrainage",
    template: "%s | Physioleben Selm",
  },
  description:
    "Physiotherapie-Praxis Physioleben in Selm — Krankengymnastik, Manuelle Lymphdrainage, Klassische Massage, Triggerpunkt- und Wärmetherapie. Alle Kassen & Privat, Hausbesuche möglich. Jetzt Termin vereinbaren.",
  keywords: [
    "Physiotherapie Selm",
    "Krankengymnastik Selm",
    "Massage Selm",
    "Lymphdrainage Selm",
    "Physiotherapeut Selm",
    "Physiotherapie Praxis Selm",
    "Hausbesuche Physiotherapie Selm",
    "Physioleben",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://physioleben.com/",
    siteName: "Physioleben",
    title:
      "Physiotherapie Selm | Physioleben — Aktiv Leben, Besser Fühlen",
    description:
      "Ihre Physiotherapie-Praxis in Selm. Krankengymnastik, Massage, Lymphdrainage, Triggerpunkt- und Wärmetherapie. Alle Kassen & Privat. Hausbesuche möglich.",
    images: [
      {
        url: "/images/about.jpg",
        width: 640,
        height: 427,
        alt: "Physioleben Praxis in Selm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Physiotherapie Selm | Physioleben — Aktiv Leben, Besser Fühlen",
    description:
      "Ihre Physiotherapie-Praxis in Selm. Krankengymnastik, Massage, Lymphdrainage und mehr.",
    images: ["/images/about.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <StructuredData />
        <TopBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
