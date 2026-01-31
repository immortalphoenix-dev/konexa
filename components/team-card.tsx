import Image from "next/image";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";

interface TeamCardProps {
  name: string;
  role: string;
  description?: string | null;
  imageUrl?: string | null;
  variant?: "default" | "large";
  className?: string;
}

export function TeamCard({
  name,
  role,
  description,
  imageUrl,
  variant = "default",
  className,
}: TeamCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-xl overflow-hidden bg-card border hover:shadow-lg transition-all duration-300",
        className
      )}
    >
      {/* Image Container */}
      <div
        className={cn(
          "relative bg-muted overflow-hidden",
          variant === "large" ? "aspect-[3/4]" : "aspect-square"
        )}
      >
        {imageUrl ? (
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <User size={64} className="text-muted-foreground/30" />
          </div>
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3
          className={cn(
            "font-semibold",
            variant === "large" ? "text-xl" : "text-lg"
          )}
        >
          {name}
        </h3>
        <p className="text-sm text-primary font-medium mt-0.5">{role}</p>
        {description && (
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
