export function HeroHeading() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
        Aktiv Leben,
        <br />
        <span className="text-primary">Besser Fühlen.</span>
      </h1>
      <p className="max-w-lg text-lg text-muted leading-relaxed">
        Ihre professionelle Physiotherapie-Praxis in Selm. Wir bieten
        individuelle Behandlungen für Ihre Gesundheit und Ihr Wohlbefinden
        — von Krankengymnastik bis Hausbesuche.
      </p>
    </div>
  );
}
