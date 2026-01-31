"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ArrowRight, Download, Leaf, CheckCircle2, Heart, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function ImpactPage() {
    return (
        <>
            <SiteHeader />
            <main>
                {/* Hero Section */}
                <section className="relative min-h-[60vh] flex items-center justify-center text-center px-4 overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1497435334941-8c899ac6e85c?q=80&w=2070&auto=format&fit=crop')", // Changed to a more "people/nature" focused image if possible, using placeholder for now
                        }}
                    >
                        <div className="absolute inset-0 bg-[#0f172a]/70 mix-blend-multiply" />
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto text-white">
                        <span className="text-[#00c055] font-extrabold tracking-widest uppercase text-xs mb-6 block">
                            ESG & SUSTAINABILITY
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                            Measuring What Matters
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                            We believe energy is a catalyst for human potential. Our integrated model is designed to decarbonize economies while uplifting communities.
                        </p>
                        <Button size="lg" className="bg-[#00c055] hover:bg-[#00a047] text-white border-0 font-bold rounded-full h-14 px-8">
                            <Download className="mr-2 h-4 w-4" />
                            Download 2024 Impact Report
                        </Button>
                    </div>
                </section>

                {/* Impact Stats */}
                <section className="py-20 bg-white dark:bg-background">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-[#0f1c2e] dark:text-white mb-4">Our Collective Achievement</h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Real-time metrics tracking our progress towards a zero-carbon, inclusive future.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="p-10 rounded-3xl bg-[#f8f9fa] dark:bg-card border border-gray-100 dark:border-gray-800 text-center">
                                <div className="w-16 h-16 mx-auto bg-green-100 dark:bg-green-900/20 text-[#00c055] rounded-full flex items-center justify-center mb-6">
                                    <Users size={32} />
                                </div>
                                <div className="text-5xl font-black text-[#0f1c2e] dark:text-white mb-2">150k+</div>
                                <div className="text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider text-xs">Lives Impacted</div>
                            </div>

                            {/* Card 2 */}
                            <div className="p-10 rounded-3xl bg-[#f8f9fa] dark:bg-card border border-gray-100 dark:border-gray-800 text-center">
                                <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/20 text-[#1e3a8a] dark:text-blue-400 rounded-full flex items-center justify-center mb-6">
                                    <Leaf size={32} />
                                </div>
                                <div className="text-5xl font-black text-[#0f1c2e] dark:text-white mb-2">40k</div>
                                <div className="text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider text-xs">Tons CO2 Avoided</div>
                            </div>

                            {/* Card 3 */}
                            <div className="p-10 rounded-3xl bg-[#f8f9fa] dark:bg-card border border-gray-100 dark:border-gray-800 text-center">
                                <div className="w-16 h-16 mx-auto bg-green-100 dark:bg-green-900/20 text-[#00c055] rounded-full flex items-center justify-center mb-6">
                                    <Heart size={32} />
                                </div>
                                <div className="text-5xl font-black text-[#0f1c2e] dark:text-white mb-2">$12M</div>
                                <div className="text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider text-xs">Customer Savings</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* UN SDGs Section */}
                <section className="py-20 bg-[#0f172a] text-white overflow-hidden relative">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

                    <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-[#00c055] font-extrabold tracking-widest uppercase text-xs mb-4 block">
                                GLOBAL GOALS
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                                Aligned with the UN Sustainable Development Goals
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                Our business model is purpose-built to address the critical challenges of our time. We track our performance against key SDG indicators.
                            </p>
                            <Link href="/projects" className="text-[#00c055] font-bold inline-flex items-center hover:text-white transition-colors">
                                View Projects contributing to these goals <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <div className="text-4xl font-black text-white mb-2">07</div>
                                <div className="text-sm font-bold text-gray-300">Affordable & Clean Energy</div>
                            </div>
                            <div className="p-6 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <div className="text-4xl font-black text-white mb-2">09</div>
                                <div className="text-sm font-bold text-gray-300">Industry, Innovation & Infrastructure</div>
                            </div>
                            <div className="p-6 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <div className="text-4xl font-black text-white mb-2">11</div>
                                <div className="text-sm font-bold text-gray-300">Sustainable Cities & Communities</div>
                            </div>
                            <div className="p-6 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <div className="text-4xl font-black text-white mb-2">13</div>
                                <div className="text-sm font-bold text-gray-300">Climate Action</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Partner CTA */}
                <section className="py-24 text-center bg-white dark:bg-background">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-black mb-6 text-[#0f1c2e] dark:text-white">Partner with a Purpose</h2>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
                            We work with development finance institutions, impact investors, and foundations to prove that sustainable energy is both profitable and transformative.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Button size="lg" className="bg-[#1e3a8a] hover:bg-blue-900 h-14 px-8 rounded-full font-bold">
                                Investor Relations
                            </Button>
                            <Button variant="outline" size="lg" className="border-2 border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-[#00c055] hover:text-[#00c055] h-14 px-8 rounded-full font-bold">
                                Download ESG Policy
                            </Button>
                        </div>
                    </div>
                </section>

            </main>
            <SiteFooter />
        </>
    );
}
