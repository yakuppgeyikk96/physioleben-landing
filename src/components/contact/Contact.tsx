import { ContactInfo } from "./ContactInfo";
import { ContactMap } from "./ContactMap";

export function Contact() {
  return (
    <section id="kontakt" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col gap-4 mb-14 max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-0.5 rounded-full bg-primary-400" />
            <span className="text-base font-semibold tracking-widest uppercase text-primary-400">
              Kontakt & Anfahrt
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary-900">
            Wir freuen uns auf Sie
          </h2>
          <p className="text-primary-700/80 leading-relaxed max-w-2xl">
            Vereinbaren Sie einen Termin oder besuchen Sie uns in unserer Praxis
            in Selm. Wir sind gerne für Sie da.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <ContactInfo />
          <ContactMap />
        </div>
      </div>
    </section>
  );
}
