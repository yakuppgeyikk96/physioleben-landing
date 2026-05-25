import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link
      href="/#hero"
      className="flex items-center"
      onClick={() => {
        const hero = document.getElementById("hero");
        if (hero) {
          hero.scrollIntoView({ behavior: "smooth" });
          window.dispatchEvent(new Event("logo-click"));
        }
      }}
    >
      <Image
        src="/images/logo_physio_leben.png"
        alt="Physioleben"
        width={160}
        height={40}
        className="h-8 w-auto"
        priority
      />
    </Link>
  );
}
