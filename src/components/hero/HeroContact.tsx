import { CONTACT } from "@/constants/navigation";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function HeroContact() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-muted">
      <a
        href={CONTACT.phoneHref}
        className="flex items-center gap-2 hover:text-primary transition-colors"
      >
        <PhoneIcon size={16} />
        {CONTACT.phone}
      </a>
      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-primary transition-colors"
      >
        <WhatsAppIcon size={16} />
        WhatsApp
      </a>
    </div>
  );
}
