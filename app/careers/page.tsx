import { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Briefcase, Heart, Award, Zap, Globe, Users, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Careers | Join the Future of Energy in Africa",
    description: "Join Konexa and help us build a more sustainable and reliable energy future for Africa. Explore our open positions.",
};

const benefits = [
    {
        icon: <Zap className="text-[#00c055]" size={24} />,
        title: "Impact Driven",
        description: "Work on projects that directly improve lives and power economies across Africa."
    },
    {
        icon: <Globe className="text-[#1e3a8a]" size={24} />,
        title: "Global Reach",
        description: "Collaborate with international experts and partners from London to Lagos."
    },
    {
        icon: <Award className="text-[#00c055]" size={24} />,
        title: "Development",
        description: "Continuous learning opportunities, certifications, and leadership training."
    },
    {
        icon: <Heart className="text-[#1e3a8a]" size={24} />,
        title: "Health & Wellbeing",
        description: "Comprehensive health coverage for you and your family, plus wellness programs."
    }
];

const openPositions = [
    {
        title: "Senior Electrical Engineer",
        department: "Engineering",
        location: "Lagos, Nigeria",
        type: "Full-time",
        id: "eng-001"
    },
    {
        title: "Project Finance Manager",
        department: "Finance",
        location: "London, UK",
        type: "Full-time",
        id: "fin-002"
    },
    {
        title: "Grid Operations Specialist",
        department: "Operations",
        location: "Kaduna, Nigeria",
        type: "Full-time",
        id: "ops-003"
    },
    {
        title: "Sustainability Analyst",
        department: "ESG",
        location: "Remote / Hybrid",
        type: "Contract",
        id: "esg-004"
    }
];

export default function CareersPage() {
    return (
        <>
            <SiteHeader />
            <main className="bg-white dark:bg-background min-h-screen">
                {/* Hero Section */}
                <section className="relative py-24 lg:py-32 px-4 overflow-hidden text-center">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/careers/hero.png"
                            alt="Konexa Team"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Overlay: Navy blue that adapts or stays consistent for readability */}
                        <div className="absolute inset-0 bg-[#0f172a]/70 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/40 via-transparent to-[#0f172a]/60" />
                    </div>

                    <div className="container mx-auto relative z-10">
                        <span className="text-[#00c055] font-extrabold tracking-widest uppercase text-xs mb-6 block drop-shadow-sm">
                            JOIN OUR MISSION
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight drop-shadow-md">
                            Powering Africa's Future, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c055] to-emerald-400">Together.</span>
                        </h1>
                        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-sm">
                            We are looking for passionate innovators, engineers, and changemakers to help us build the most reliable and sustainable energy utility in Africa.
                        </p>
                        <Button size="lg" className="h-14 px-8 rounded-full bg-[#00c055] hover:bg-[#00a047] text-white font-bold text-base shadow-lg hover:shadow-green-900/20 transition-all">
                            View Open Roles
                        </Button>
                    </div>
                </section>

                {/* Culture / Benefits Section */}
                <section className="py-20 bg-gray-50 dark:bg-background">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-[#0f1c2e] dark:text-white mb-4">Why Konexa?</h2>
                            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">More than just a job, a career at Konexa is an opportunity to be at the forefront of the global energy transition.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="bg-white dark:bg-card p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-muted/30 flex items-center justify-center mb-6">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-[#0f1c2e] dark:text-white mb-3">{benefit.title}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Positions List */}
                <section className="py-24 bg-white dark:bg-background">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-[#0f1c2e] dark:text-white mb-12 text-center">Open Positions</h2>

                        <div className="space-y-4">
                            {openPositions.map((job) => (
                                <div key={job.id} className="group flex flex-col md:flex-row items-center justify-between p-6 bg-white dark:bg-card rounded-xl border border-gray-200 dark:border-gray-800 hover:border-[#00c055] transition-colors shadow-sm">
                                    <div className="flex items-start gap-4 mb-4 md:mb-0 w-full md:w-auto">
                                        <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 text-[#1e3a8a] dark:text-blue-400 flex items-center justify-center shrink-0">
                                            <Briefcase size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-[#0f1c2e] dark:text-white group-hover:text-[#00c055] transition-colors">{job.title}</h3>
                                            <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400 mt-1">
                                                <span className="flex items-center gap-1"><Globe size={12} /> {job.location}</span>
                                                <span className="flex items-center gap-1"><Users size={12} /> {job.department}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                                        <span className="text-sm font-semibold text-[#1e3a8a] dark:text-blue-400 bg-blue-50 dark:bg-blue-900/40 px-3 py-1 rounded-full">{job.type}</span>
                                        <Button variant="ghost" className="text-[#00c055] font-bold hover:text-[#00a047] hover:bg-green-50 dark:hover:bg-green-900/20">
                                            Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-8 bg-[#0f172a] rounded-2xl text-center text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-4">Don't see the right role?</h3>
                                <p className="text-gray-400 mb-6 text-sm">We are always looking for talent. Send your CV to careers@konexa.com</p>
                                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-white hover:text-black">
                                    Email Us
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
