import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Zap, BarChart3, Users, Leaf, ShieldCheck, Cpu } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

// Icon mapping
const iconMap: Record<string, any> = {
    BarChart3,
    Zap,
    ShieldCheck,
    Leaf,
    Users,
    Cpu
};

export default async function ServicePillarPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const supabase = await createClient();

    const { data: service } = await supabase
        .from('services')
        .select('*')
        .eq('slug', slug)
        .single();

    if (!service) {
        return notFound();
    }

    const Icon = iconMap[service.icon || 'Zap'] || Zap;
    const features = service.features?.map((f: string) => f) || [];
    const stats = service.stats || [];

    return (
        <>
            <SiteHeader />
            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="bg-[#0f1c2e] text-white py-20 lg:py-28 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                    </div>

                    <div className="container mx-auto px-4 max-w-4xl relative z-10">
                        <Link href="/services" className="inline-flex items-center text-[#00c055] hover:text-white mb-8 font-bold uppercase tracking-wider text-xs transition-colors">
                            <ArrowLeft className="mr-2" size={14} /> Back to Services
                        </Link>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-lg bg-[#00c055] flex items-center justify-center text-white">
                                <Icon size={24} />
                            </div>
                            <span className="text-[#00c055] font-bold uppercase tracking-widest text-sm">Service Pillar</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                            {service.title}
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                            {service.subtitle}
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-3 gap-12">

                        {/* Main Description */}
                        <div className="md:col-span-2">
                            <h2 className="text-3xl font-bold text-[#0f1c2e] mb-6">Overview</h2>
                            <p className="text-gray-500 text-lg leading-relaxed mb-10">
                                {service.description}
                            </p>

                            <h3 className="text-xl font-bold text-[#0f1c2e] mb-6">Key Capabilities</h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {features.map((feature: string, idx: number) => (
                                    <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100/50">
                                        <CheckCircle2 className="text-[#00c055] shrink-0" size={20} />
                                        <span className="font-medium text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar Stats */}
                        <div className="md:col-span-1">
                            <div className="bg-[#f8f9fa] p-8 rounded-3xl border border-gray-100 sticky top-24">
                                <h3 className="font-bold text-[#0f1c2e] mb-6">Impact Metrics</h3>
                                <div className="space-y-6">
                                    {stats.map((stat: any, idx: number) => (
                                        <div key={idx} className="pb-6 border-b border-gray-200 last:border-0 last:pb-0">
                                            <div className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">{stat.label}</div>
                                            <div className="text-3xl font-black text-[#1e3a8a]">{stat.value}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 pt-8 border-t border-gray-200">
                                    <Button className="w-full bg-[#00c055] hover:bg-[#00a047] text-white font-bold h-12 rounded-xl">
                                        <Link href="/contact">Learn More</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* How We Do It - 3 Step Approach */}
                <section className="py-20 bg-gray-50 border-t border-gray-100">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl font-bold text-[#0f1c2e]">Our Approach</h2>
                            <p className="text-gray-500 mt-2">A systematic path to grid transformation</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10"></div>

                            {/* Step 1 */}
                            <div className="text-center bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative">
                                <div className="w-16 h-16 mx-auto bg-[#e6f8ef] text-[#00c055] rounded-full flex items-center justify-center font-black text-xl mb-6 border-4 border-white">01</div>
                                <h3 className="font-bold text-[#0f1c2e] mb-3">Assess & Audit</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    We start with deep data collection, mapping existing assets and analyzing load profiles to identify inefficiencies.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="text-center bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative">
                                <div className="w-16 h-16 mx-auto bg-[#e6f8ef] text-[#00c055] rounded-full flex items-center justify-center font-black text-xl mb-6 border-4 border-white">02</div>
                                <h3 className="font-bold text-[#0f1c2e] mb-3">Deploy Solution</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    We fund and install the necessary upgrades—from smart meters to renewable generation—with zero disruption.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="text-center bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative">
                                <div className="w-16 h-16 mx-auto bg-[#e6f8ef] text-[#00c055] rounded-full flex items-center justify-center font-black text-xl mb-6 border-4 border-white">03</div>
                                <h3 className="font-bold text-[#0f1c2e] mb-3">Optimize & Scale</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    Our systems monitor performance 24/7, allowing us to continuously optimize efficiency and expand coverage.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Spotlight */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="bg-[#0f1c2e] rounded-3xl overflow-hidden flex flex-col md:flex-row relative">
                            {/* Content */}
                            <div className="p-10 md:p-12 md:w-1/2 relative z-10">
                                <div className="inline-block bg-[#00c055] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
                                    Case Study
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-4">
                                    See This in Action: <br /> Kaduna Distribution
                                </h2>
                                <p className="text-gray-400 mb-8 leading-relaxed">
                                    Discover how we applied our {service.title} principles to transform the grid for 50,000+ customers in Kaduna State.
                                </p>
                                <Button asChild className="bg-white text-[#0f1c2e] hover:bg-gray-100 font-bold rounded-lg h-12 px-6">
                                    <Link href="/projects/kaduna">Read Case Study</Link>
                                </Button>
                            </div>

                            {/* Image/Graphic Placeholder */}
                            <div className="md:w-1/2 bg-gray-800 relative min-h-[300px]">
                                <div className="absolute inset-0 bg-[url('/kaduna-substation.png')] bg-cover bg-center opacity-60 mix-blend-overlay"></div>
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0f1c2e]"></div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <SiteFooter />
        </>
    );
}
