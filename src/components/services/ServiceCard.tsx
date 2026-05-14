import { type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group bg-white/60 rounded-2xl p-6 border border-primary-100 hover:border-primary-200 hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600 group-hover:bg-primary-200 transition-colors duration-300">
          <Icon size={22} />
        </div>
        <h3 className="font-semibold text-primary-900">{title}</h3>
      </div>
      <p className="text-sm text-primary-700/80 leading-relaxed">{description}</p>
    </div>
  );
}
