import { CONTACT } from "@/constants/navigation";
import { PhoneIcon } from "@/components/icons/PhoneIcon";

interface CTAButtonProps {
  className?: string;
}

export function CTAButton({ className = "" }: CTAButtonProps) {
  return (
    <a
      href={CONTACT.phoneHref}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition-colors duration-200 ${className}`}
    >
      <PhoneIcon size={16} />
      Termin vereinbaren
    </a>
  );
}
