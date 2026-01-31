"use client";

import Link from "next/link";

interface KonexaLogoProps {
  variant?: "default" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
}

export function KonexaLogo({
  variant = "default",
  size = "md",
  href = "/",
}: KonexaLogoProps) {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10",
  };

  const textClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  // Text color based on variant
  const textColor = variant === "white" ? "text-white" : "text-[#0f1c2e] dark:text-white";

  const content = (
    <div className="flex items-center gap-2.5">
      {/* Custom Icon: Blue/Green Brand Symbol */}
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses[size]} w-auto aspect-square`}
      >
        {/* Blue Leg (Bottom-Left) */}
        <rect
          x="10"
          y="20"
          width="8"
          height="18"
          rx="4"
          transform="rotate(-45 10 20)"
          className="fill-[#1e3a8a] dark:fill-white"
        />
        {/* Green Leg (Top-Right) */}
        <rect
          x="18"
          y="12"
          width="18"
          height="8"
          rx="4"
          transform="rotate(-45 18 12)"
          className="fill-[#00c055]"
        />
      </svg>
      <span
        className={`font-bold tracking-tight ${textClasses[size]} ${textColor}`}
      >
        KONEXA
      </span>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="flex items-center">
        {content}
      </Link>
    );
  }

  return content;
}
