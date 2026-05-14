import { CONTACT } from "@/constants/contact";
import { CalendarCheck, Stethoscope } from "lucide-react";

export function HeroActions() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
      <a
        href={CONTACT.phoneHref}
        className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary-500 px-8 py-4 text-base font-semibold text-white hover:bg-primary-600 transition-colors duration-200 shadow-md shadow-primary-500/20"
      >
        <CalendarCheck size={20} />
        Termin vereinbaren
      </a>
      <a
        href="#leistungen"
        className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-primary-500 px-8 py-4 text-base font-semibold text-primary-700 hover:bg-primary-50 transition-colors duration-200"
      >
        <Stethoscope size={20} />
        Unsere Leistungen
      </a>
    </div>
  );
}
