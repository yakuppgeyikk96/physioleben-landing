import { CONTACT } from "@/constants/contact";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { MailIcon } from "@/components/icons/MailIcon";
import { LocationIcon } from "@/components/icons/LocationIcon";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function TopBar() {
  return (
    <div className="bg-primary-800 text-white text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          {/* Left: Contact info */}
          <div className="flex items-center divide-x divide-white/20">
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-2 pr-4 hover:text-white/80 transition-colors"
            >
              <PhoneIcon size={13} />
              <span className="hidden sm:inline">{CONTACT.phone}</span>
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="hidden md:flex items-center gap-2 px-4 hover:text-white/80 transition-colors"
            >
              <MailIcon size={13} />
              {CONTACT.email}
            </a>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 hover:text-white/80 transition-colors"
            >
              <WhatsAppIcon size={13} />
              <span className="hidden sm:inline">{CONTACT.whatsapp}</span>
            </a>
            <span className="hidden lg:flex items-center gap-2 pl-4">
              <LocationIcon size={13} />
              {CONTACT.address}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
