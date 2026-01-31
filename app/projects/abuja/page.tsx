"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";
import { ArrowLeft, Check, Zap, MapPin, BarChart3, Users } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AbujaProjectPage() {
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
                            src="/industrial_power_plant_1769596269064.png"
                            alt="Abuja Commercial Mini-Grid"
                            fill
                            className="object-cover opacity-60 mix-blend-overlay"
                        />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 text-white">
                        <Link href="/projects" className="inline-flex items-center text-[#00c055] hover:text-white mb-6 font-bold uppercase tracking-wider text-xs transition-colors">
                            <ArrowLeft className="mr-2" size={14} /> Back to Projects
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl leading-tight">
                            Abuja Commercial Mini-Grid
                        </h1>
                        <div className="flex flex-wrap gap-4 text-sm font-medium">
                            <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2">
                                <MapPin size={16} className="text-[#00c055]" /> Abuja, Nigeria
                            </span>
                            <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2">
                                <Zap size={16} className="text-[#00c055]" /> 2.5MW Solar Hybrid
                            </span>
                        </div>
                    </div>
                </section>

                {/* Project Overview Stats */}
                <section className="bg-[#f8f9fa] py-12 border-b">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div>
                                <div className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Capacity</div>
                                <div className="text-3xl font-bold text-[#1e3a8a]">2.5 MW</div>
                            </div>
                            <div>
                                <div className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Type</div>
                                <div className="text-3xl font-bold text-[#1e3a8a]">Solar Hybrid</div>
                            </div>
                            <div>
                                <div className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Beneficiaries</div>
                                <div className="text-3xl font-bold text-[#1e3a8a]">350+ SMEs</div>
                            </div>
                            <div>
                                <div className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Status</div>
                                <div className="text-3xl font-bold text-[#00c853]">Operational</div>
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
                                <h2 className="text-3xl font-bold text-[#1e3a8a] mb-6">Project Overview</h2>
                                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                                    The Abuja Commercial Mini-Grid project is a flagship initiative designed to power a major commercial cluster in Nigeria's capital. By deploying a 2.5MW solar hybrid system, Konexa has provided reliable, clean energy to over 350 small and medium enterprises (SMEs) that previously relied on expensive and polluting backup generators.
                                </p>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    This project demonstrates the viability of distributed renewable energy solutions in urban commercial settings, significantly reducing operational costs for businesses while mitigating carbon emissions.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6">Key Challenges Solved</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Unreliable grid supply causing frequent business interruptions.",
                                        "High cost of diesel generation for backup power.",
                                        "Noise and air pollution in a dense commercial area.",
                                        "Lack of smart metering and transparent billing."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-1 min-w-5">
                                                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                                    <Check size={12} className="text-green-600" strokeWidth={3} />
                                                </div>
                                            </div>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                                <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Impact Metrics</h3>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-white p-3 rounded-lg shadow-sm text-blue-600">
                                            <BarChart3 size={24} />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-gray-900">40%</div>
                                            <div className="text-sm text-gray-600">Cost Savings</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="bg-white p-3 rounded-lg shadow-sm text-green-600">
                                            <Zap size={24} />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-gray-900">99.9%</div>
                                            <div className="text-sm text-gray-600">Reliability</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-[#f8f9fa] p-8 rounded-2xl border border-gray-100">
                                <h3 className="font-bold text-[#1e3a8a] mb-6 uppercase tracking-wider text-sm">Project Gallery</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="aspect-square bg-gray-200 rounded-lg relative overflow-hidden">
                                        <Image src="/solar_panels_1769594689032.png" alt="Gallery 1" fill className="object-cover" />
                                    </div>
                                    <div className="aspect-square bg-gray-200 rounded-lg relative overflow-hidden">
                                        <Image src="/wind_turbines_landscape_1769777937746.png" alt="Gallery 2" fill className="object-cover" />
                                    </div>
                                    <div className="aspect-square bg-gray-200 rounded-lg relative overflow-hidden">
                                        <Image src="/power_grid_field_1769594612745.png" alt="Gallery 3" fill className="object-cover" />
                                    </div>
                                    <div className="aspect-square bg-gray-200 rounded-lg relative overflow-hidden">
                                        <Image src="/industrial_power_plant_1769596269064.png" alt="Gallery 4" fill className="object-cover" />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#1e3a8a] text-white p-8 rounded-2xl">
                                <h3 className="font-bold text-xl mb-4">Partner with Konexa</h3>
                                <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                                    Interested in developing a similar project for your commercial cluster or industrial zone?
                                </p>
                                <Button asChild className="w-full bg-[#00c853] hover:bg-[#00b84a] text-white font-semibold">
                                    <Link href="/contact">Contact Our Projects Team</Link>
                                </Button>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    );
}
