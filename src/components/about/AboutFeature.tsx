import { type LucideIcon } from "lucide-react";

interface AboutFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function AboutFeature({
  icon: Icon,
  title,
  description,
}: AboutFeatureProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <div className="shrink-0 w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600">
          <Icon size={20} />
        </div>
        <h3 className="font-semibold text-primary-900">{title}</h3>
      </div>
      <p className="text-sm text-primary-700/80 leading-relaxed pl-3">
        {description}
      </p>
    </div>
  );
}
