import {
  Activity,
  Dumbbell,
  Droplets,
  Hand,
  Crosshair,
  CircleDot,
  Flame,
  Snowflake,
  MapPinHouse,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";
import { SERVICES } from "@/constants/services";
import { ServiceCard } from "./ServiceCard";

const ICON_MAP: Record<string, LucideIcon> = {
  Activity,
  Dumbbell,
  Droplets,
  Hand,
  Crosshair,
  CircleDot,
  Flame,
  Snowflake,
  MapPinHouse,
};

export function Services() {
  return (
    <section id="leistungen" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading with decorative line */}
        <div className="flex flex-col gap-4 mb-14 max-w-3xl items-center text-center lg:items-start lg:text-left">
          <div className="flex items-center gap-3">
            <div className="hidden lg:block w-12 h-0.5 rounded-full bg-primary-400" />
            <span className="text-base font-semibold tracking-widest uppercase text-primary-400">
              Unsere Therapieleistungen
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary-900">
            Ganzheitliche Behandlungen für Ihr Wohlbefinden
          </h2>
          <p className="text-primary-700/60 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Von klassischer Krankengymnastik bis hin zu spezialisierten
            Therapieformen — wir bieten Ihnen ein breites Spektrum an
            Behandlungsmöglichkeiten.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              icon={ICON_MAP[service.icon]}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
