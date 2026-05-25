"use client";

import Image from "next/image";

export function Logo() {
  return (
    <a
      href="/#hero"
      className="flex items-center"
      onClick={(e) => {
        e.preventDefault();
        const hero = document.getElementById("hero");
        if (hero) {
          hero.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", "/#hero");
          window.dispatchEvent(new Event("logo-click"));
        } else {
          window.location.href = "/#hero";
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
    </a>
  );
}
