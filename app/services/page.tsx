import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FrameworkSection } from "@/components/home/framework-section";
import { StatsSection } from "@/components/home/stats-section";
import { WhyPartnerSection } from "@/components/home/why-partner-section";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { getAllServices, getProjectCount } from "@/lib/supabase/queries";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Distribution Services | Integrated Energy Solutions",
};

export const dynamic = "force-dynamic";

export default async function ServicesPage() {
  const [services, projectCount] = await Promise.all([
    getAllServices(),
    getProjectCount()
  ]);

  return (

    <>
      <SiteHeader />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
          <div
            className="absolute inset-0 opacity-10 dark:opacity-20"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-green-400 uppercase bg-green-900/40 rounded-full border border-green-800">
              Our Services & Strategy
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-background dark:text-white leading-tight text-balance mb-6">
              Our Integrated Distribution Model
            </h1>

            <p className="text-lg md:text-xl text-background/80 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
              Transforming energy systems across Africa through innovative
              technology, customer-centricity, and sustainable infrastructure
              development.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white rounded-full px-8">
                <Link href="/contact">
                  Request a Quote
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white/30 hover:bg-white/10 bg-white/5 rounded-full px-8 backdrop-blur-sm"
              >
                <Play size={18} className="mr-2 fill-current" />
                Watch our Story
              </Button>
            </div>
          </div>
        </section>

        <FrameworkSection services={services} />
        <StatsSection projectCount={projectCount} />
        <WhyPartnerSection />
      </main>
      <SiteFooter />
    </>
  );
}
