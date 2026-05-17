"use client";

import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { CTAButton } from "./CTAButton";
import { MobileMenuButton } from "./MobileMenuButton";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="sticky top-0 z-50 py-3 px-4 sm:px-6 lg:px-8">
        <nav
          className={`max-w-6xl mx-auto rounded-full px-4 sm:px-6 py-3 transition-all duration-300 ${
            isScrolled
              ? "bg-white/80 backdrop-blur-md shadow-lg shadow-primary-900/5"
              : "bg-white/40 backdrop-blur-sm"
          }`}
        >
          <div className="flex items-center justify-between">
            <Logo />

            <NavLinks className="hidden lg:flex items-center gap-1" />

            <div className="hidden lg:block">
              <CTAButton />
            </div>

            <MobileMenuButton
              isOpen={isMobileMenuOpen}
              onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </nav>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
