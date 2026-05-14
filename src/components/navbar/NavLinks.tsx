"use client";

import { NAV_ITEMS } from "@/constants/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";

interface NavLinksProps {
  onClickLink?: () => void;
  className?: string;
}

export function NavLinks({ onClickLink, className = "" }: NavLinksProps) {
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
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
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
