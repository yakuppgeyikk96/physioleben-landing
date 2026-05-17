import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/topbar/TopBar";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Physioleben - Aktiv Leben, Besser Fühlen",
  description:
    "Ihre Physiotherapie-Praxis in Selm. Krankengymnastik, Massage, Lymphdrainage und mehr.",
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
        <TopBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
