import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { TeamCard } from "@/components/team-card";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function LeadershipPage() {
  const supabase = await createClient();
  const { data: teamMembers } = await supabase
    .from('team_members')
    .select('*')
    .order('order_index', { ascending: true });

  const executives = teamMembers?.filter(member => member.category === 'executive') || [];
  const management = teamMembers?.filter(member => member.category === 'management') || [];

  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[45vh] flex items-center justify-center bg-[#0a121e] py-24 lg:py-32 text-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/leadership-hero.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Dark Gradient Overlay for Depth and Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a121e]/90 via-[#0a121e]/60 to-[#0a121e]"></div>
          </div>

          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 text-white tracking-tight">
              Konexa Leadership Team
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Meet the visionaries transforming energy systems across Africa
              through innovation, sustainability, and world-class management.
            </p>
          </div>
        </section>

        {/* Intro Text */}
        <section className="py-20 bg-white dark:bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <span className="text-[#00c055] font-extrabold tracking-widest uppercase text-xs mb-4 block">
              OUR MANAGEMENT
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#1e3a8a] dark:text-white mb-8">
              World-class Expertise in Energy Systems
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
              Konexa is led by a diverse team of professionals with deep roots in the global energy sector, project
              finance, and sustainable development. Our leadership combines international standards with local
              African insights to deliver integrated energy solutions that provide reliable, sustainable electricity to
              communities and industries alike.
            </p>
          </div>
        </section>

        {/* Executive Leadership */}
        <section className="py-12 bg-white dark:bg-background">
          <div className="container mx-auto px-4">
            <h3 className="text-sm font-extrabold mb-10 text-[#1e3a8a] dark:text-white uppercase tracking-widest border-b dark:border-gray-800 pb-4">Executive Leadership</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {executives.map((exec, idx) => (
                <TeamCard
                  key={exec.id || idx}
                  name={exec.name}
                  role={exec.role}
                  description={exec.description}
                  imageUrl={exec.image_url}
                  variant="large"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Management Team */}
        <section className="py-12 bg-white dark:bg-background mb-20">
          <div className="container mx-auto px-4">
            <h3 className="text-sm font-extrabold mb-10 text-[#1e3a8a] dark:text-white uppercase tracking-widest border-b dark:border-gray-800 pb-4">Our Management Team</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {management.map((leader, idx) => (
                <TeamCard
                  key={leader.id || idx}
                  name={leader.name}
                  role={leader.role}
                  description={null}
                  imageUrl={leader.image_url}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Brand Logos Section */}
        <section className="py-16 border-t border-b border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-card/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {["WOLVES", "BRAND NAME", "acrevis", "BAYERN", "aquuire", "Burflex"].map((brand) => (
                <span key={brand} className="text-xl font-black tracking-tighter text-gray-400">{brand}</span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white dark:bg-background">
          <div className="container mx-auto px-4">
            <div className="bg-[#00c055] rounded-[2.5rem] p-10 md:p-16 text-white relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl">
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                  Ready to transform your energy future?
                </h2>
                <p className="text-green-50 text-lg mb-10 max-w-lg leading-relaxed">
                  Join hands with the experts. We offer scalable and sustainable energy solutions tailored to your infrastructure needs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-white text-[#00c055] hover:bg-green-50 font-bold h-14 px-8 rounded-xl shadow-lg">
                    <Link href="/contact">Contact Team</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="bg-transparent border-2 border-white/50 text-white hover:bg-white/10 h-14 px-8 rounded-xl">
                    <Link href="/services">Our Services</Link>
                  </Button>
                </div>
              </div>

              <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-md max-w-sm w-full relative z-10 border border-white/20">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-white rounded-full p-2">
                    <CheckCircle2 className="text-[#00c055] h-6 w-6" strokeWidth={3} />
                  </div>
                  <span className="font-black text-2xl tracking-tight">10+ Years</span>
                </div>
                <p className="text-base text-green-50 leading-relaxed font-medium">
                  Of excellence in energy transformation across the African continent.
                </p>
              </div>

              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-black/10 rounded-full blur-[80px]"></div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
