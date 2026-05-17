import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { CONTACT } from "@/constants/contact";

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: "Telefon",
    value: CONTACT.phone,
    href: CONTACT.phoneHref,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: CONTACT.whatsapp,
    href: CONTACT.whatsappHref,
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: CONTACT.address,
    href: `https://maps.google.com/?q=${encodeURIComponent(CONTACT.address)}`,
  },
];

const HOURS = [
  { day: "Mo — Fr", time: "08:00 — 18:00" },
  { day: "Sa", time: "Nach Vereinbarung" },
  { day: "So", time: "Geschlossen" },
];

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-4">
      {/* Contact items */}
      {CONTACT_ITEMS.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="group flex items-center gap-4 bg-white/40 rounded-xl p-4 hover:bg-white/60 transition-colors duration-300"
        >
          <div className="shrink-0 w-11 h-11 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
            <item.icon size={20} />
          </div>
          <div>
            <p className="text-sm text-primary-500 font-medium">{item.label}</p>
            <p className="text-primary-900 group-hover:text-primary-600 transition-colors">
              {item.value}
            </p>
          </div>
        </a>
      ))}

      {/* Opening hours */}
      <div className="bg-white/40 rounded-xl p-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="shrink-0 w-11 h-11 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600">
            <Clock size={20} />
          </div>
          <h3 className="font-semibold text-primary-900">Öffnungszeiten</h3>
        </div>
        <div className="flex flex-col gap-2 pl-15">
          {HOURS.map((h) => (
            <div key={h.day} className="flex justify-between text-sm">
              <span className="text-primary-700/80 font-medium">{h.day}</span>
              <span className="text-primary-900 font-medium">{h.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
