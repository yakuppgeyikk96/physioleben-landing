import Image from "next/image";

export function HeroImage() {
  return (
    <div className="hidden lg:flex items-center justify-center">
      <div className="relative">
        {/* Decorative blob behind the image */}
        <div className="absolute -inset-4 bg-linear-to-br from-primary/20 to-secondary/20 rounded-4xl rotate-3" />
        <div className="absolute -inset-4 bg-linear-to-tr from-secondary/10 to-primary/10 rounded-4xl -rotate-2" />

        {/* Main image */}
        <div className="relative w-120 h-140 rounded-2xl overflow-hidden ring-1 ring-black/5">
          <Image
            src="/images/hero.jpg"
            alt="Physiotherapie-Behandlung bei Physioleben"
            fill
            className="object-cover"
            priority
            sizes="(min-width: 1024px) 480px, 0px"
          />
        </div>

        {/* Small accent circle */}
        <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-primary/15 blur-sm" />
        <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-secondary/20 blur-sm" />
      </div>
    </div>
  );
}
