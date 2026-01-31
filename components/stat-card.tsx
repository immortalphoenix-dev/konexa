import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
  variant?: "default" | "primary" | "outline";
}

export function StatCard({
  value,
  label,
  className,
  variant = "default",
}: StatCardProps) {
  return (
    <div
      className={cn(
        "p-6 rounded-lg text-center",
        variant === "default" && "bg-muted",
        variant === "primary" && "bg-primary text-primary-foreground",
        variant === "outline" && "border-2 border-primary",
        className
      )}
    >
      <div
        className={cn(
          "text-3xl md:text-4xl font-bold",
          variant === "primary" ? "text-primary-foreground" : "text-primary"
        )}
      >
        {value}
      </div>
      <div
        className={cn(
          "text-sm mt-1",
          variant === "primary"
            ? "text-primary-foreground/80"
            : "text-muted-foreground"
        )}
      >
        {label}
      </div>
    </div>
  );
}
