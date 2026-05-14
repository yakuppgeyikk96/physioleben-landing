import { CONTACT } from "@/constants/contact";
import { PhoneIcon } from "@/components/icons/PhoneIcon";

interface CTAButtonProps {
  className?: string;
}

export function CTAButton({ className = "" }: CTAButtonProps) {
  return (
    <a
      href={CONTACT.phoneHref}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-600 transition-colors duration-200 ${className}`}
    >
      <PhoneIcon size={15} />
      Termin vereinbaren
    </a>
  );
}
