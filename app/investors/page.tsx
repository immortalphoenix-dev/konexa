import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, ShieldCheck, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function InvestorsPage() {
    return (
        <>
            <SiteHeader />
            <main>
                {/* Hero Section */}
                <section className="relative py-24 lg:py-32 bg-[#0f1c2e] dark:bg-slate-950 overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-20">
                        <Image
                            src="/hero-bg.png"
                            alt="Investors Background"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <span className="inline-block px-4 py-2 bg-[#00c853] text-white rounded-md text-[11px] font-bold mb-6 tracking-wider uppercase">
                            INVESTOR RELATIONS
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Invest in the Future of Energy
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
                            Konexa offers a unique opportunity to back a proven, scalable model that is transforming African energy markets through integrated utility management and renewable technology.
                        </p>
                        <Button asChild size="lg" className="bg-[#00c853] hover:bg-[#00b84a] text-white font-semibold px-8 py-6 text-[15px] rounded-full">
                            <Link href="/contact">
                                Contact Our IR Team
                                <ArrowRight className="ml-2" size={18} />
                            </Link>
                        </Button>
                    </div>
                </section>

                {/* Why Invest Section */}
                <section className="py-20 bg-white dark:bg-background">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] dark:text-white mb-4">Why Invest in Konexa?</h2>
                            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                We bridge the gap between grid reliability and renewable sustainability, creating a high-growth, high-impact investment vehicle.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-gray-50 dark:bg-card p-8 rounded-2xl border border-transparent dark:border-gray-800">
                                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-6 text-[#1e3a8a] dark:text-blue-400">
                                    <TrendingUp className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-[#1e3a8a] dark:text-white">Scalable Model</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Our integrated distribution model is designed for replication across multiple African markets, unlocking massive growth potential.
                                </p>
                            </div>
                            <div className="bg-gray-50 dark:bg-card p-8 rounded-2xl border border-transparent dark:border-gray-800">
                                <div className="w-14 h-14 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-6 text-[#00c853]">
                                    <ShieldCheck className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-[#1e3a8a] dark:text-white">De-Risked Assets</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    By partnering with governments and securing long-term concessions, we mitigate regulatory and operational risks.
                                </p>
                            </div>
                            <div className="bg-gray-50 dark:bg-card p-8 rounded-2xl border border-transparent dark:border-gray-800">
                                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-6 text-[#1e3a8a] dark:text-blue-400">
                                    <Globe className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-[#1e3a8a] dark:text-white">ESG Impact</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Directly contribute to UN Sustainable Development Goals (SDG 7) by providing clean, affordable energy to underserved communities.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-[#f8f9fa] dark:bg-slate-900">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-[#1e3a8a] dark:text-white mb-6">Ready to learn more?</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
                            Request our investor presentation or schedule a meeting with our leadership team.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button asChild size="lg" className="bg-[#1e3a8a] hover:bg-blue-900 text-white rounded-full px-8">
                                <a href="mailto:investors@konexa.com">Email IR Team</a>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    );
}
