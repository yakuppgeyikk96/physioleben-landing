import { Phone, Mail, MapPin, CalendarCheck } from "lucide-react";
import { CONTACT } from "@/constants/contact";
import { NAV_ITEMS } from "@/constants/navigation";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function Footer() {
  return (
    <footer className="relative bg-primary-800 text-primary-100">
      {/* Wave separator */}
      <div className="absolute -top-12 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
          <path
            d="M0,40 C200,80 400,0 600,40 C800,80 1000,0 1200,40 L1200,120 L0,120 Z"
            className="fill-primary-800"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand + CTA */}
          <div className="flex flex-col gap-5">
            <div>
              <span className="font-serif text-2xl text-white">Physio</span>
              <span className="font-serif text-2xl text-primary-300">leben</span>
            </div>
            <p className="text-primary-200/80 text-sm leading-relaxed">
              Ihre Praxis für Physiotherapie in Selm. Individuell, professionell
              und nah — für ein aktives und schmerzfreies Leben.
            </p>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-400 hover:scale-105 transition-all duration-200 w-fit"
            >
              <CalendarCheck size={16} />
              Termin vereinbaren
            </a>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-white">Schnellzugriff</h3>
            <ul className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="relative text-sm text-primary-200/80 hover:text-white transition-colors inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-white">Kontakt</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href={CONTACT.phoneHref} className="flex items-center gap-3 text-sm text-primary-200/80 hover:text-white transition-colors">
                  <Phone size={16} />
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-sm text-primary-200/80 hover:text-white transition-colors">
                  <Mail size={16} />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-primary-200/80 hover:text-white transition-colors"
                >
                  <MapPin size={16} />
                  {CONTACT.address}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-primary-200/80 hover:text-white transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-white">Öffnungszeiten</h3>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <span className="text-primary-200/80">Mo — Fr</span>
                <span className="text-white font-medium">08:00 — 18:00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-primary-200/80">Sa</span>
                <span className="text-white font-medium">Nach Vereinbarung</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-primary-200/80">So</span>
                <span className="text-white font-medium">Geschlossen</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-primary-300/70">
            &copy; {new Date().getFullYear()} Physioleben. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-sm text-primary-300/70">
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
