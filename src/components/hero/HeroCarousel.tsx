"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const IMAGES = [
  { src: "/images/hero-1.jpg", alt: "Physiotherapie Behandlung" },
  { src: "/images/hero-2.jpg", alt: "Krankengymnastik Training" },
  { src: "/images/hero-3.jpg", alt: "Manuelle Therapie" },
] as const;

const INTERVAL = 5000;

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % IMAGES.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full min-h-100 lg:min-h-0">
      {/* Decorative fill behind blob */}
      <svg
        className="absolute w-[102%] h-[102%]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M44,2 C58,-2 78,4 90,15 C102,26 104,42 98,58 C92,74 96,88 86,95 C76,102 58,102 42,97 C26,92 12,88 6,74 C0,60 -2,42 4,28 C10,14 30,6 44,2"
          fill="#3aade0"
          fillOpacity="0.6"
        />
      </svg>

      <svg
        className="absolute -left-4 w-[102%] h-[102%]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M44,2 C58,-2 78,4 90,15 C102,26 104,42 98,58 C92,74 96,88 86,95 C76,102 58,102 42,97 C26,92 12,88 6,74 C0,60 -2,42 4,28 C10,14 30,6 44,2"
          fill="#4a9e3d"
          fillOpacity="0.6"
        />
      </svg>
      {/* Decorative dots pattern */}
      <div
        className="absolute -bottom-8 -left-8 w-24 h-24 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-secondary-500) 2px, transparent 2px)",
          backgroundSize: "12px 12px",
        }}
      />

      <svg className="absolute" width="0" height="0">
        <defs>
          <clipPath id="hero-blob" clipPathUnits="objectBoundingBox">
            <path d="M0.44,0.02 C0.58,-0.02 0.78,0.04 0.9,0.15 C1.02,0.26 1.04,0.42 0.98,0.58 C0.92,0.74 0.96,0.88 0.86,0.95 C0.76,1.02 0.58,1.02 0.42,0.97 C0.26,0.92 0.12,0.88 0.06,0.74 C0,0.6 -0.02,0.42 0.04,0.28 C0.1,0.14 0.3,0.06 0.44,0.02" />
          </clipPath>
        </defs>
      </svg>

      <div
        className="relative w-full h-full"
        style={{ clipPath: "url(#hero-blob)" }}
      >
        {IMAGES.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            priority={index === 0}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        ))}
      </div>
    </div>
  );
}
