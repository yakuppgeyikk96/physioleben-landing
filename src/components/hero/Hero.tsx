import { HeroHeading } from "./HeroHeading";
import { HeroActions } from "./HeroActions";
import { HeroContact } from "./HeroContact";
import { HeroImage } from "./HeroImage";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] flex items-center bg-primary/5 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-10">
            <HeroHeading />
            <HeroActions />
            <HeroContact />
          </div>
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
