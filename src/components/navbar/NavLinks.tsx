import { NAV_ITEMS } from "@/constants/navigation";

interface NavLinksProps {
  onClickLink?: () => void;
  className?: string;
}

export function NavLinks({ onClickLink, className = "" }: NavLinksProps) {
  return (
    <ul className={className}>
      {NAV_ITEMS.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            onClick={onClickLink}
            className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
