"use client";

import { NAV_ITEMS } from "@/constants/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";

interface NavLinksProps {
  onClickLink?: () => void;
  className?: string;
  size?: "sm" | "base";
}

export function NavLinks({ onClickLink, className = "", size = "sm" }: NavLinksProps) {
  const activeHref = useActiveSection(NAV_ITEMS.map((item) => item.href));

  return (
    <ul className={className}>
      {NAV_ITEMS.map((item) => {
        const isActive = activeHref === item.href;
        return (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={onClickLink}
              className={`block px-4 py-2.5 rounded-full ${size === "base" ? "text-base" : "text-sm"} font-medium transition-colors duration-200 ${
                isActive
                  ? "bg-primary-500 text-white"
                  : "text-primary-800 hover:text-primary-600"
              }`}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
