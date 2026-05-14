import { HeroActions } from "@/components/hero/HeroActions";
import { HeroCarousel } from "@/components/hero/HeroCarousel";
import { Services } from "@/components/services/Services";
import { About } from "@/components/about/About";
import { Contact } from "@/components/contact/Contact";

export default function Home() {
  return (
    <main className="flex-1">
      <section id="hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-10 items-center lg:items-start text-center lg:text-left">
            <div className="flex flex-col gap-6">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-primary-900 leading-tight">
                Aktiv Leben,
                <br />
                Besser Fühlen.
              </h1>
              <p className="text-lg sm:text-xl text-primary-700/80 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Ihre professionelle Physiotherapie-Praxis in Selm. Individuelle
                Behandlungen für Ihre Gesundheit und Ihr Wohlbefinden.
              </p>
            </div>
            <HeroActions />
          </div>

          {/* Right: Carousel */}
          <div className="hidden lg:block relative h-125 lg:h-137.5">
            <HeroCarousel />
          </div>
        </div>
      </section>

      <Services />
      <About />
      <Contact />
    </main>
  );
}
