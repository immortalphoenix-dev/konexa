"use client";

import { Landmark, Zap, Globe, Droplet, Leaf } from "lucide-react";

const partners = [
  { name: "DFID", icon: Landmark },
  { name: "Power Africa", icon: Zap },
  { name: "USAID", icon: Globe },
  { name: "Shell Foundation", icon: Droplet },
  { name: "Climate Fund", icon: Leaf },
];

export function PartnersSection() {
  return (
    <section className="py-16 bg-white dark:bg-background border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-xs font-bold tracking-[0.2em] text-blue-900/40 dark:text-gray-500 uppercase mb-12">
          Trusted by Global Partners
        </h3>

        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center gap-3 group cursor-default">
              <partner.icon
                strokeWidth={2.5}
                className="w-6 h-6 text-gray-400 group-hover:text-blue-900 dark:group-hover:text-white transition-colors"
              />
              <span className="text-lg font-bold text-gray-400 group-hover:text-blue-900 dark:group-hover:text-white transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
