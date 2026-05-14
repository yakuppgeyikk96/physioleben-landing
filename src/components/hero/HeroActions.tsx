import { CONTACT } from "@/constants/navigation";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { ChevronDownIcon } from "@/components/icons/ChevronDownIcon";

export function HeroActions() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <a
        href={CONTACT.phoneHref}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-primary-dark transition-colors duration-200"
      >
        <PhoneIcon size={18} />
        Termin vereinbaren
      </a>
      <a
        href="#leistungen"
        className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary/20 px-7 py-3.5 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors duration-200"
      >
        Unsere Leistungen
        <ChevronDownIcon size={16} />
      </a>
    </div>
  );
}
