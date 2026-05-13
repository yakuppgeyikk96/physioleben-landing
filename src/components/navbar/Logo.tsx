import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M12 2C10.5 4 8 6 8 9c0 2 1 3 2 4l-3 7c-.2.5.1 1 .6 1h8.8c.5 0 .8-.5.6-1l-3-7c1-1 2-2 2-4 0-3-2.5-5-4-7z"
            fill="white"
          />
          <circle cx="12" cy="6" r="2" fill="white" opacity="0.8" />
        </svg>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-lg font-bold text-primary tracking-tight">
          Physio<span className="text-secondary">leben</span>
        </span>
        <span className="text-[10px] text-muted tracking-wide uppercase">
          Aktiv Leben, Besser Fühlen
        </span>
      </div>
    </Link>
  );
}
