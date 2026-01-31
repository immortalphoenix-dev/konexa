import Link from "next/link";
import {
  Network,
  Zap,
  TrendingUp,
  Home,
  Users,
  Sun,
  Cpu,
  Building,
  Landmark,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  network: Network,
  zap: Zap,
  "trending-up": TrendingUp,
  home: Home,
  users: Users,
  sun: Sun,
  cpu: Cpu,
  building: Building,
  landmark: Landmark,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
  features?: string[];
  href?: string;
  className?: string;
}

export function ServiceCard({
  title,
  description,
  icon = "zap",
  features = [],
  href,
  className,
}: ServiceCardProps) {
  const IconComponent = iconMap[icon] || Zap;

  const content = (
    <div
      className={cn(
        "group relative p-6 rounded-xl border bg-card hover:shadow-lg transition-all duration-300 h-full flex flex-col",
        className
      )}
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        <IconComponent size={24} className="text-primary group-hover:text-primary-foreground" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 flex-grow">
        {description}
      </p>
      {features.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {features.map((feature) => (
            <span
              key={feature}
              className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground"
            >
              {feature}
            </span>
          ))}
        </div>
      )}
      {href && (
        <div className="flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
          <span>Learn More</span>
          <ArrowRight size={14} />
        </div>
      )}
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
