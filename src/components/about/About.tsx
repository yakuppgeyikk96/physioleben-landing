import Image from "next/image";
import { UserCheck, HeartPulse, ShieldCheck, Home } from "lucide-react";
import { AboutFeature } from "./AboutFeature";

export function About() {
  return (
    <section id="ueber-uns" className="py-20 sm:py-28 bg-primary-200/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="relative h-100 sm:h-125 lg:h-full min-h-100 rounded-3xl overflow-hidden">
            <Image
              src="/images/about.jpg"
              alt="Physioleben Praxis in Selm"
              fill
              loading="eager"
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-primary-900/30 to-transparent" />
            {/* Accent overlay corner */}
            <div className="absolute bottom-0 right-0 bg-primary-500 px-5 py-3 rounded-tl-2xl">
              <Image
                src="/images/logo_physio_leben.png"
                alt="Physioleben"
                width={120}
                height={30}
                className="h-7 w-auto brightness-0 invert"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="hidden sm:block w-12 h-0.5 rounded-full bg-secondary-500" />
                <span className="text-base font-semibold tracking-widest uppercase text-secondary-500">
                  Über Uns
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary-900">
                Ihre Gesundheit liegt uns am Herzen
              </h2>
              <p className="text-primary-700/80 leading-relaxed">
                Bei Physioleben in Selm verbinden wir fachliche Kompetenz mit
                persönlicher Betreuung. Unser Ziel ist es, Ihnen zu einem aktiven
                und schmerzfreien Leben zu verhelfen — individuell, professionell
                und nah.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <AboutFeature
                icon={UserCheck}
                title="Individuelle Betreuung"
                description="Jeder Patient erhält einen persönlichen Behandlungsplan, abgestimmt auf seine Bedürfnisse."
              />
              <AboutFeature
                icon={HeartPulse}
                title="Ganzheitlicher Ansatz"
                description="Wir behandeln nicht nur Symptome, sondern suchen die Ursache Ihrer Beschwerden."
              />
              <AboutFeature
                icon={ShieldCheck}
                title="Alle Kassen & Privat"
                description="Wir behandeln sowohl gesetzlich als auch privat versicherte Patienten."
              />
              <AboutFeature
                icon={Home}
                title="Hausbesuche möglich"
                description="Für Patienten mit eingeschränkter Mobilität kommen wir gerne zu Ihnen nach Hause."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
