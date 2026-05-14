interface SectionHeadingProps {
  title: string;
  subtitle: string;
  description?: string;
  align?: "center" | "left";
}

export function SectionHeading({ title, subtitle, description, align = "center" }: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`flex flex-col gap-3 max-w-2xl ${isCenter ? "items-center text-center mx-auto" : "items-start text-left"}`}>
      <span className="text-sm font-semibold tracking-widest uppercase text-primary-400">
        {subtitle}
      </span>
      <h2 className="font-serif text-3xl sm:text-4xl text-primary-900">
        {title}
      </h2>
      {description && (
        <p className="text-primary-700/80 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
