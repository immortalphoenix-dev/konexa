import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ArrowRight, CheckCircle2, Leaf, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
import { Metadata } from "next";
import { ProjectsGrid } from "@/components/projects-grid";

export const metadata: Metadata = {
    title: "Projects & Impact | Strategic Infrastructure Across Africa",
};

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
    const supabase = await createClient();
    const { data: allProjects } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

    const featuredProjects = allProjects?.filter(p => p.featured) || [];
    const regularProjects = allProjects?.filter(p => !p.featured) || [];

    return (
        <>
            <SiteHeader />
            <main className="bg-gray-50/50 dark:bg-background pb-20">
                {/* Hero Section */}
                <section className="container mx-auto px-4 pt-8 lg:pt-12 pb-16">
                    <div className="relative rounded-[2.5rem] overflow-hidden min-h-[500px] flex items-center justify-center text-center px-4">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: "url('/hero-solar.png')",
                            }}
                        >
                            <div className="absolute inset-0 bg-[#0f1c2e]/70 mix-blend-multiply" />
                        </div>

                        <div className="relative z-10 max-w-4xl mx-auto text-white py-20">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                                Driving the Energy Transition <br className="hidden md:block" />
                                Across Africa
                            </h1>
                            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                                We combine innovative technology with sustainable infrastructure to
                                deliver reliable, affordable, and clean energy to millions.
                            </p>
                            <Button size="lg" className="bg-[#00c055] hover:bg-[#00a047] text-white border-0 font-bold h-14 px-8 rounded-lg text-base shadow-lg transition-all hover:scale-105">
                                <Download className="mr-2 h-5 w-5" />
                                Download 2023 Impact Report
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="container mx-auto px-4 mb-20">
                    <div className="mb-10">
                        <span className="text-[#1e3a8a] dark:text-blue-400 text-xs font-extrabold uppercase tracking-widest block mb-2">
                            THE NUMBERS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                            Impact at Scale
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-card p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col justify-between h-full">
                            <div>
                                <div className="text-xs text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider mb-4">TOTAL CONNECTIONS</div>
                                <div className="text-4xl lg:text-5xl font-extrabold text-[#0f1c2e] dark:text-white mb-3">150,000+</div>
                            </div>
                            <div className="flex items-center text-[#00c055] font-bold text-sm">
                                <span className="mr-2">↗</span> +15% year-over-year
                            </div>
                        </div>

                        <div className="bg-white dark:bg-card p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col justify-between h-full">
                            <div>
                                <div className="text-xs text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider mb-4">RELIABILITY INCREASE</div>
                                <div className="text-4xl lg:text-5xl font-extrabold text-[#0f1c2e] dark:text-white mb-3">95.4%</div>
                            </div>
                            <div className="flex items-center text-[#00c055] font-bold text-sm">
                                <CheckCircle2 className="w-4 h-4 mr-2" strokeWidth={3} />
                                Industry leading uptime
                            </div>
                        </div>

                        <div className="bg-white dark:bg-card p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col justify-between h-full">
                            <div>
                                <div className="text-xs text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider mb-4">CO2 DISPLACED</div>
                                <div className="text-4xl lg:text-5xl font-extrabold text-[#0f1c2e] dark:text-white mb-3">40k Tons</div>
                            </div>
                            <div className="flex items-center text-[#00c055] font-bold text-sm">
                                <Leaf className="w-4 h-4 mr-2" strokeWidth={3} />
                                Annual carbon reduction
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Case Studies Section - Alternating Layout */}
                <section className="container mx-auto px-4 mb-24">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-1 flex-1 bg-[#1e3a8a] max-w-[100px] md:max-w-[200px]"></div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1e1e1e] dark:text-white whitespace-nowrap">Featured Case Studies</h2>
                        <div className="h-1 flex-1 bg-[#00c055]"></div>
                    </div>

                    <div className="flex flex-col gap-12">
                        {featuredProjects.map((project, idx) => {
                            const isOdd = idx % 2 !== 0;
                            const stats = project.stats as any || {};
                            return (
                                <div key={project.id} className="bg-white dark:bg-card rounded-xl overflow-hidden shadow-lg grid md:grid-cols-2 min-h-[500px] border border-transparent dark:border-gray-800">
                                    <div className={`relative h-64 md:h-auto overflow-hidden ${isOdd ? 'md:order-2' : ''}`}>
                                        <Image
                                            src={project.image_url || '/placeholder.svg'}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className={`absolute top-6 ${isOdd ? 'right-6 bg-[#00c055]' : 'left-6 bg-[#1e3a8a]'} text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider rounded-sm shadow-sm`}>
                                            Ongoing Project
                                        </div>
                                    </div>
                                    <div className={`p-8 md:p-12 lg:p-16 flex flex-col justify-center ${isOdd ? 'md:order-1' : ''}`}>
                                        <h3 className="text-3xl font-black text-[#0f1c2e] dark:text-white mb-6 leading-tight">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed text-[15px]">
                                            {project.description}
                                        </p>

                                        <div className="grid grid-cols-2 gap-6 mb-10">
                                            {Object.entries(stats).map(([key, value], i) => (
                                                <div key={key} className={`${i % 2 === 0 ? 'bg-blue-50 dark:bg-blue-900/20' : 'bg-green-50 dark:bg-green-900/20'} p-4 rounded-lg`}>
                                                    <div className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase mb-1">
                                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                                    </div>
                                                    <div className={`text-2xl font-black ${i % 2 === 0 ? 'text-[#1e3a8a] dark:text-blue-400' : 'text-[#00c055] dark:text-green-500'}`}>
                                                        {value as string}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <Link href={`/projects/${project.slug}`} className="inline-flex items-center text-[#1e3a8a] dark:text-[#00c055] font-bold text-sm group hover:underline">
                                            Read Case Study <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* All Projects Grid Section */}
                <ProjectsGrid projects={regularProjects} />

                {/* Our Footprint Section */}
                <section className="bg-[#0f1416] py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16 max-w-2xl mx-auto">
                            <h2 className="text-4xl font-extrabold text-white mb-6">Our Footprint</h2>
                            <p className="text-gray-400 leading-relaxed font-medium">
                                Strategically positioned to catalyze energy reform across West Africa and beyond.
                            </p>
                        </div>

                        <div className="bg-[#1a2226] rounded-3xl p-8 mb-16 relative overflow-hidden min-h-[600px] flex items-center justify-center border border-white/5">
                            <div className="relative w-[600px] h-[600px]">
                                <Image
                                    src="/footprint-map.png"
                                    alt="Map of Africa"
                                    fill
                                    className="object-contain opacity-90"
                                />
                                <div className="absolute inset-0 z-10">
                                    {/* Nigeria Marker */}
                                    <div className="absolute top-[45%] left-[48%] group cursor-pointer">
                                        <div className="relative w-4 h-4 bg-[#00c055] rounded-full border-[2px] border-white z-10 box-content"></div>
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 bg-white dark:bg-card p-4 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 text-center z-50 border border-transparent dark:border-gray-800">
                                            <div className="text-[10px] text-gray-400 font-bold mb-1 uppercase">Active Hub</div>
                                            <div className="text-sm font-black text-[#0f1c2e] dark:text-white">Nigeria Operations</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="bg-[#1a2226] p-8 rounded-2xl border border-white/5 text-center group hover:border-[#00c055]/30 transition-colors">
                                <div className="text-5xl font-black text-[#00c055] mb-2">04</div>
                                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Countries</div>
                            </div>
                            <div className="bg-[#1a2226] p-8 rounded-2xl border border-white/5 text-center group hover:border-[#1e3a8a]/30 transition-colors">
                                <div className="text-5xl font-black text-[#1e3a8a] mb-2">18</div>
                                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Active Sites</div>
                            </div>
                            <div className="bg-[#1a2226] p-8 rounded-2xl border border-white/5 text-center group hover:border-[#00c055]/30 transition-colors">
                                <div className="text-5xl font-black text-[#00c055] mb-2">120MW</div>
                                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Under Management</div>
                            </div>
                            <div className="bg-[#1a2226] p-8 rounded-2xl border border-white/5 text-center group hover:border-[#1e3a8a]/30 transition-colors">
                                <div className="text-5xl font-black text-[#1e3a8a] mb-2">2026</div>
                                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Pan-Africa Goal</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Partner Section */}
                <section className="container mx-auto px-4 py-24">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f1c2e] dark:text-white mb-6">Partner with the Future of Energy</h2>
                        <p className="text-gray-500 dark:text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                            We are looking for investment and strategic partners to accelerate our mission of universal energy access.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="lg" className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white font-bold h-12 px-8 min-w-[200px] rounded-lg">
                                <Link href="/investors">Investor Relations</Link>
                            </Button>
                            <Button size="lg" className="bg-[#00c055] hover:bg-[#00c055]/90 text-white font-bold h-12 px-8 min-w-[200px] rounded-lg">
                                <Link href="/careers">Work With Us</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    );
}
