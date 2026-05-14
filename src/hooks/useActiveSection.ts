"use client";

import { useState, useEffect } from "react";

export function useActiveSection(hrefs: readonly string[]) {
  const [activeHref, setActiveHref] = useState(hrefs[0]);

  useEffect(() => {
    const ids = hrefs.map((href) => href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [hrefs]);

  return activeHref;
}
