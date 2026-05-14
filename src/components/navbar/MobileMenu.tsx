import { NavLinks } from "./NavLinks";
import { CTAButton } from "./CTAButton";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden bg-white/95 backdrop-blur-sm rounded-xl mt-2 shadow-lg border border-primary-100">
      <nav className="flex flex-col gap-2 p-6">
        <NavLinks onClickLink={onClose} className="flex flex-col gap-2" />
        <hr className="my-2 border-primary-100" />
        <CTAButton className="w-full" />
      </nav>
    </div>
  );
}
