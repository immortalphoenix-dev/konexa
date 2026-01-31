import { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Zap, BarChart3, Users, Leaf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Kaduna Integrated Distribution | $50M Utilities Infrastructure",
    description: "Discover the Kaduna Integrated Distribution Project, a first-of-its-kind utility sub-franchise model in Nigeria.",
};

export default function KadunaProjectPage() {
    return (
        <>
            <SiteHeader />
            <main className="bg-white min-h-screen">
                {/* Hero Section */}
                <section className="relative h-[60vh] min-h-[500px] flex items-end pb-20">
                    <div className="absolute inset-0 z-0">
                        {/* Placeholder for real project image */}
                        <div className="absolute inset-0 bg-[#0f1c2e]" />
                        <Image
                            src="/kaduna-substation.png"
                            alt="Kaduna Project Background"
                            fill
                            className="object-cover opacity-40 mix-blend-overlay"
                        />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 text-white">
                        <Link href="/projects" className="inline-flex items-center text-[#00c055] hover:text-white mb-6 font-bold uppercase tracking-wider text-xs transition-colors">
                            <ArrowLeft className="mr-2" size={14} /> Back to Projects
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight max-w-4xl">
                            Kaduna Integrated Distribution Project
                        </h1>
                        <div className="flex flex-wrap gap-6 text-sm font-medium text-gray-300">
                            <span className="flex items-center gap-2"><Zap className="text-[#00c055]" size={16} /> Utilities Infrastructure</span>
                            <span className="flex items-center gap-2"><Users className="text-[#00c055]" size={16} /> Kaduna State, Nigeria</span>
                            <span className="flex items-center gap-2"><CheckCircle2 className="text-[#00c055]" size={16} /> Ongoing (Phase 2)</span>
                        </div>
                    </div>
                </section>

                {/* Project Overview Stats */}
                <section className="bg-[#f8f9fa] py-12 border-b">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div>
                                <div className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Customers</div>
                                <div className="text-3xl font-black text-[#0f1c2e]">50,000+</div>
                            </div>
                            <div>
                                <div className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Investment</div>
                                <div className="text-3xl font-black text-[#0f1c2e]">$50M</div>
                            </div>
                            <div>
                                <div className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Loss Reduction</div>
                                <div className="text-3xl font-black text-[#00c055]">30%</div>
                            </div>
                            <div>
                                <div className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Renewable Mix</div>
                                <div className="text-3xl font-black text-[#1e3a8a]">40%</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-20">
                    <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-16">

                        {/* Left Column - Article */}
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-[#0f1c2e] mb-4">The Challenge</h2>
                                <p className="text-gray-500 leading-relaxed text-lg">
                                    The Kaduna distribution network faced significant challenges with high technical and commercial losses (ATC&C), resulting in unreliable power supply for industrial zones. Businesses were forced to rely on expensive and polluting diesel generators, driving up operational costs and stifling economic growth.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-[#0f1c2e] mb-4">Our Solution</h2>
                                <p className="text-gray-500 leading-relaxed text-lg mb-6">
                                    Konexa implemented a first-of-its-kind integrated utility model. By sub-franchising the distribution network, we took operational control of the grid infrastructure within specific industrial clusters.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3 text-gray-600">
                                        <CheckCircle2 className="text-[#00c055] shrink-0 mt-1" size={18} />
                                        <span><strong>Network Rehabilitation:</strong> Replaced aging transformers and conductors to reduce technical losses.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-600">
                                        <CheckCircle2 className="text-[#00c055] shrink-0 mt-1" size={18} />
                                        <span><strong>Smart Metering:</strong> Installed 100% smart metering to ensure billing transparency and improve collections.</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-600">
                                        <CheckCircle2 className="text-[#00c055] shrink-0 mt-1" size={18} />
                                        <span><strong>Embedded Generation:</strong> Integrated 20MW of solar PV and battery storage directly into the distribution ring.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-[#0f1c2e] text-white p-8 rounded-2xl relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold mb-4">The Impact</h3>
                                    <blockquote className="text-xl italic text-gray-300 mb-6">
                                        "Since Konexa took over operations, our factory has run for 6 months without a single generator hour. The cost savings have been transformative."
                                    </blockquote>
                                    <cite className="not-italic text-[#00c055] font-bold">— CEO, Textile Manufacturing Partner</cite>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <h3 className="font-bold text-[#0f1c2e] mb-4">Project Partners</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                                        <span className="text-sm font-medium">Kaduna Electric</span>
                                    </li>
                                    <li className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                                        <span className="text-sm font-medium">Shell Foundation</span>
                                    </li>
                                    <li className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                                        <span className="text-sm font-medium">US ADF</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-[#00c055] p-8 rounded-2xl text-white text-center">
                                <h3 className="font-bold text-xl mb-4">Invest in Sustainability</h3>
                                <p className="text-green-50 text-sm mb-6">See how projects like Kaduna generate returns while saving the planet.</p>
                                <Button className="w-full bg-white text-[#00c055] hover:bg-green-50 font-bold">Download Investment Deck</Button>
                            </div>
                        </div>

                    </div>
                </section>

            </main>
            <SiteFooter />
        </>
    );
}
