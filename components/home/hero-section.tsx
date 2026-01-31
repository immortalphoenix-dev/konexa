"use client";

import Link from "next/link";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.png')",
        }}
      >
        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-[#0f1c2e]/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-bold tracking-wider text-[#00c055] uppercase bg-[#00c055]/10 rounded-full border border-[#00c055]/20">
            <span className="w-2 h-2 rounded-full bg-[#00c055]"></span>
            Innovating Energy Systems
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-sans text-white leading-tight mb-8">
            Powering Africa's <br />
            <span className="text-[#00c055]">Future</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-12">
            Konexa is the Energy Company of the Future. We are transforming
            energy systems across Africa through integrated utility models that
            deliver reliable, sustainable power.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-5">
            <Button asChild size="lg" className="bg-[#1e3a8a] hover:bg-blue-900 text-white rounded-xl px-8 h-12 text-base font-semibold">
              <Link href="/services">
                Learn More
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white/20 hover:bg-white/10 bg-transparent rounded-xl px-8 h-12 text-base font-semibold backdrop-blur-sm"
              asChild
            >
              <Link href="/about">Watch Our Vision</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer">
        <ChevronDown size={40} strokeWidth={2.5} />
      </div>
    </section>
  );
}
