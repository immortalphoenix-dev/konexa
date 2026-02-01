import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Badge } from "@/components/ui/badge";
import { MapPin, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { ResilientImage } from "@/components/ui/resilient-image";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const supabase = await createClient();
    const { data: project } = await supabase
        .from("projects")
        .select("title, description")
        .eq("slug", slug)
        .single();

    if (!project) return { title: "Project Not Found" };

    return {
        title: `${project.title} | Konexa Projects`,
        description: project.description,
    };
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params;
    const supabase = await createClient();

    const { data: project } = await supabase
        .from("projects")
        .select("*")
        .eq("slug", slug)
        .single();

    if (!project) {
        notFound();
    }

    const stats = project.stats as Record<string, string> || {};

    const statusColors: Record<string, string> = {
        ongoing: "bg-[#00c055]",
        completed: "bg-[#1e3a8a]",
        planned: "bg-slate-500",
    };
    const currentStatus = project.status?.toLowerCase() || "ongoing";

    return (
        <>
            <SiteHeader />
            <main className="bg-white dark:bg-background">
                {/* Hero */}
                <section className="relative h-[60vh] min-h-[400px] flex items-end">
                    <ResilientImage
                        src={project.image_url}
                        alt={project.title}
                        fill
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1c2e] via-[#0f1c2e]/40 to-transparent" />

                    <div className="container mx-auto px-4 relative z-10 pb-16">
                        <Link
                            href="/projects"
                            className="inline-flex items-center text-sm font-medium text-white hover:text-[#00c055] mb-8 transition-colors"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
                        </Link>

                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <Badge className={`${statusColors[currentStatus] || "bg-[#00c055]"} text-white border-none rounded-full px-4 py-1`}>
                                {project.status?.toUpperCase()}
                            </Badge>
                            <div className="flex items-center text-gray-200">
                                <MapPin size={16} className="mr-2 text-[#00c055]" />
                                {project.location}
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight max-w-4xl">
                            {project.title}
                        </h1>
                    </div>
                </section>

                {/* Content */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-3 gap-16">
                            {/* Left Column: Details */}
                            <div className="lg:col-span-2">
                                <h2 className="text-2xl font-bold text-[#0f1c2e] dark:text-white mb-6">Project Overview</h2>
                                <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="prose prose-lg dark:prose-invert max-w-none prose-p:text-gray-600 dark:prose-p:text-gray-400">
                                    <div className="whitespace-pre-wrap">
                                        {project.content || "Detailed case study coming soon."}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Stats & Meta */}
                            <div className="space-y-8">
                                <div className="bg-gray-50 dark:bg-card p-8 rounded-3xl border border-gray-100 dark:border-gray-800">
                                    <h3 className="text-lg font-bold text-[#0f1c2e] dark:text-white mb-6 flex items-center">
                                        <CheckCircle2 className="mr-2 text-[#00c055]" size={20} /> Impact Metrics
                                    </h3>
                                    <div className="space-y-6">
                                        {Object.entries(stats).map(([key, value]) => (
                                            <div key={key}>
                                                <div className="text-xs text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider mb-1">
                                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                                </div>
                                                <div className="text-3xl font-black text-[#1e3a8a] dark:text-blue-400">
                                                    {value}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-[#0f1c2e] p-8 rounded-3xl text-white">
                                    <h3 className="font-bold text-lg mb-4">Interested in similar projects?</h3>
                                    <p className="text-gray-400 mb-6 text-sm">
                                        Contact our team for investment opportunities or strategic partnerships in sustainable energy.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="inline-flex w-full items-center justify-center bg-[#00c055] hover:bg-[#00a047] text-white font-bold h-12 rounded-xl transition-colors"
                                    >
                                        Inquire Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    );
}
