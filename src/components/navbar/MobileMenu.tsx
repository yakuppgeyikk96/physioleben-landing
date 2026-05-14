"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { NavLinks } from "./NavLinks";
import { CTAButton } from "./CTAButton";
import { Logo } from "./Logo";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`lg:hidden fixed top-0 left-0 z-50 h-full w-full bg-white shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <Logo />
            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-primary-100 transition-colors text-primary-800"
              aria-label="Menü schließen"
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav links */}
          <NavLinks onClickLink={onClose} className="flex flex-col gap-1" size="base" />

          {/* CTA */}
          <div className="mt-auto pt-6 border-t border-primary-100">
            <CTAButton className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
}
