interface MobileMenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileMenuButton({ isOpen, onToggle }: MobileMenuButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 rounded-lg hover:bg-gray-100 transition-colors"
      aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
      aria-expanded={isOpen}
    >
      <span
        className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${
          isOpen ? "translate-y-2 rotate-45" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${
          isOpen ? "-translate-y-2 -rotate-45" : ""
        }`}
      />
    </button>
  );
}
