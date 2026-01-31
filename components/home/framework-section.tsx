"use client";

import {
  BarChart3,
  Zap,
  TrendingUp,
  Users,
  Home,
  Sun,
  Smartphone,
  Briefcase,
  Landmark,
  ShieldCheck,
  Cpu,
  Leaf
} from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Service } from "@/lib/types/database";

const iconMap: Record<string, any> = {
  "BarChart3": BarChart3,
  "Zap": Zap,
  "TrendingUp": TrendingUp,
  "Users": Users,
  "Home": Home,
  "Sun": Sun,
  "Smartphone": Smartphone,
  "Briefcase": Briefcase,
  "Landmark": Landmark,
  "ShieldCheck": ShieldCheck,
  "Cpu": Cpu,
  "Leaf": Leaf,
};

interface FrameworkSectionProps {
  services: Service[];
}

export function FrameworkSection({ services }: FrameworkSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-green-500 font-bold uppercase tracking-wider text-sm mb-2 block">Service Pillars</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pioneering the Future of Energy</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We combine technical excellence with social impact to provide reliable, affordable, and clean energy to communities and industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon || "Zap"] || Zap;
            return (
              <div
                key={service.id}
                id={service.slug}
                className="p-8 rounded-2xl bg-card border hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-green-50 dark:bg-green-900/20 flex items-center justify-center mb-6 text-green-600 dark:text-green-400 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed min-h-[60px]">{service.description}</p>

                <div className="space-y-2 mb-6">
                  {(service.features || []).map((point, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                      {point}
                    </div>
                  ))}
                </div>

                <Link href={`/services/${service.slug}`} className="text-green-600 font-semibold text-sm inline-flex items-center hover:underline">
                  Learn More <ArrowRight className="ml-1 w-3 h-3" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
