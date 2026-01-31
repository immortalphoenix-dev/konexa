"use client";

import { ChevronDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ServicesHero() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0f1c2e] dark:bg-slate-950">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-[#00c853] text-white rounded-md text-[11px] font-bold mb-6 tracking-wider uppercase">
            OUR SERVICES & STRATEGY
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Our Integrated Distribution Model
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-3xl mx-auto">
            Transforming energy systems across Africa through innovative
            technology, customer-centricity, and sustainable infrastructure
            development.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#00c853] hover:bg-[#00b84a] text-white font-semibold px-8 py-6 text-[15px] rounded-md"
            >
              <a href="#services" className="flex items-center gap-2">
                Explore Our Model
                <ChevronDown size={18} />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-6 text-[15px] rounded-md"
            >
              <Play size={18} className="mr-2" />
              Watch our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
