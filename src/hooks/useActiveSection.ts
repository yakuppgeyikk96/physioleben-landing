"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export function useActiveSection(hrefs: readonly string[]) {
  const [activeHref, setActiveHref] = useState(hrefs[0]);
  const isClickScrolling = useRef(false);
  const clickTimeout = useRef<ReturnType<typeof setTimeout>>(null);

  const handleClick = useCallback((href: string) => {
    setActiveHref(href);
    isClickScrolling.current = true;

    if (clickTimeout.current) clearTimeout(clickTimeout.current);
    clickTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000);
  }, []);

  useEffect(() => {
    const ids = hrefs.map((href) => href.replace("/#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;

        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHref(`/#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => {
      observer.disconnect();
      if (clickTimeout.current) clearTimeout(clickTimeout.current);
    };
  }, [hrefs]);

  return { activeHref, handleClick };
}
