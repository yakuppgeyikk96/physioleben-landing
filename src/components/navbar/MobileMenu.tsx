import { NavLinks } from "./NavLinks";
import { CTAButton } from "./CTAButton";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
      <nav className="flex flex-col gap-2 p-6">
        <NavLinks
          onClickLink={onClose}
          className="flex flex-col gap-4"
        />
        <hr className="my-2 border-gray-100" />
        <CTAButton className="w-full" />
      </nav>
    </div>
  );
}
