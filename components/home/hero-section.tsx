"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    title: (
      <>
        Powering Africa's <br />
        <span className="text-[#00c055]">Future</span>
      </>
    ),
    subtitle: "Konexa is the Energy Company of the Future. We are transforming energy systems across Africa through integrated utility models that deliver reliable, sustainable power.",
    image: "/hero-bg.png",
    badge: "Innovating Energy Systems"
  },
  {
    title: (
      <>
        Sustainable <br />
        <span className="text-[#00c055]">Energy Scale</span>
      </>
    ),
    subtitle: "Harnessing renewable resources into integrated utility models to provide clean, affordable power to industrial hubs and commercial districts.",
    image: "/hero-slide-1.png",
    badge: "Clean Energy Leadership"
  },
  {
    title: (
      <>
        Modernizing <br />
        <span className="text-[#00c055]">Grid Infrastructure</span>
      </>
    ),
    subtitle: "Through advanced smart metering and automated management, we are building the resilient infrastructure needed for Africa's rapid industrialization.",
    image: "/hero-slide-2.png",
    badge: "Next-Gen Grid Technology"
  },
  {
    title: (
      <>
        Empowering <br />
        <span className="text-[#00c055]">Communities</span>
      </>
    ),
    subtitle: "Our decentralized mini-grids bring reliable electricity to the last mile, driving local economic growth and enhancing quality of life.",
    image: "/hero-slide-3.png",
    badge: "Community-Led Impact"
  }
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 500); // Wait for fade out
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 500);
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000); // 7 seconds total
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#0f1c2e]">
      {/* Background Images with Crossfade */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          style={{
            backgroundImage: `url('${slide.image}')`,
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#0f1c2e]/70" />
        </div>
      ))}

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className={`max-w-4xl mx-auto flex flex-col items-center transition-all duration-700 ease-in-out ${isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-bold tracking-wider text-[#00c055] uppercase bg-[#00c055]/10 rounded-full border border-[#00c055]/20">
            <span className="w-2 h-2 rounded-full bg-[#00c055] animate-pulse"></span>
            {slides[currentSlide].badge}
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-sans text-white leading-tight mb-8">
            {slides[currentSlide].title}
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-12">
            {slides[currentSlide].subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-5">
            <Button asChild size="lg" className="bg-[#1e3a8a] hover:bg-blue-900 text-white rounded-xl px-8 h-12 text-base font-semibold transition-transform hover:scale-105">
              <Link href="/services">
                Learn More
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white/20 hover:bg-white/10 bg-transparent rounded-xl px-8 h-12 text-base font-semibold backdrop-blur-sm transition-transform hover:scale-105"
              asChild
            >
              <Link href="/about">Watch Our Vision</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Manual Controls - Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all hidden md:block z-20"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 transition-all hidden md:block z-20"
      >
        <ChevronRight size={32} />
      </button>

      {/* DOTS Pagination */}
      <div className="absolute bottom-12 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (index !== currentSlide) {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentSlide(index);
                  setIsTransitioning(false);
                }, 500);
              }
            }}
            className={`h-1.5 rounded-full transition-all duration-500 ${index === currentSlide ? "w-8 bg-[#00c055]" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/30 animate-bounce cursor-pointer hover:text-white transition-colors">
        <ChevronDown size={32} strokeWidth={2} />
      </div>
    </section>
  );
}
