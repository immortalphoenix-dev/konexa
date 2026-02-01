import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, Download, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Metadata } from "next";
import { format } from "date-fns";

export const metadata: Metadata = {
    title: "News & Insights | Transforming Africa's Energy Landscape",
};

export const dynamic = "force-dynamic";

export default async function NewsPage() {
    const supabase = await createClient();
    const { data: allArticles } = await supabase
        .from('articles')
        .select('*')
        .order('published_at', { ascending: false });

    const featuredArticle = allArticles?.[0];
    const gridArticles = allArticles?.slice(1) || [];

    return (
        <>
            <SiteHeader />
            <main className="bg-gray-50/50 dark:bg-background min-h-screen">
                {/* Header */}
                <section className="bg-[#0f172a] py-20 text-center">
                    <div className="container mx-auto px-4">
                        <span className="text-[#00c055] font-extrabold tracking-widest uppercase text-xs mb-4 block">
                            MEDIA CENTER
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            News & Insights
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Latest updates on our projects, partnerships, and thoughts on the future of energy in Africa.
                        </p>
                    </div>
                </section>

                {/* Featured Article */}
                {featuredArticle && (
                    <section className="py-16 -mt-10">
                        <div className="container mx-auto px-4">
                            <div className="bg-white dark:bg-card rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800 flex flex-col lg:flex-row">
                                <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[500px]">
                                    {featuredArticle.image_url ? (
                                        <Image
                                            src={featuredArticle.image_url}
                                            alt={featuredArticle.title}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-[#0f172a] flex items-center justify-center text-white/10 dark:text-white/5">
                                            <FileText size={120} />
                                        </div>
                                    )}
                                </div>
                                <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                                    <div className="flex items-center gap-4 mb-6">
                                        <Badge variant="secondary" className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/40 rounded-full px-4 py-1">
                                            {featuredArticle.category}
                                        </Badge>
                                        <div className="flex items-center text-gray-400 dark:text-gray-500 text-sm font-medium">
                                            <Calendar size={14} className="mr-2" />
                                            {format(new Date(featuredArticle.published_at), 'MMMM dd, yyyy')}
                                        </div>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-[#0f1c2e] dark:text-white mb-6 leading-tight">
                                        {featuredArticle.title}
                                    </h2>
                                    <p className="text-gray-500 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                                        {featuredArticle.excerpt}
                                    </p>
                                    <Link href={`/news/${featuredArticle.slug}`}>
                                        <Button size="lg" className="rounded-full bg-[#0f1c2e] dark:bg-blue-600 hover:bg-[#1e3a8a] dark:hover:bg-blue-700 px-8 h-14 font-bold shadow-lg transition-all hover:scale-105">
                                            Read Full Story <ArrowRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Article Grid */}
                <section className="py-16 pb-24">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-between items-end mb-12">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-[#0f1c2e] dark:text-white mb-2">Editor's Choice</h3>
                                <p className="text-gray-500 text-sm">Deep dives into energy infrastructure and sustainable development.</p>
                            </div>
                            <div className="hidden md:flex gap-2">
                                {["All", "Analytics", "Insights", "Company"].map((cat, i) => (
                                    <Button key={cat} variant={i === 0 ? "default" : "outline"} size="sm" className={`rounded-full px-5 h-9 font-bold transition-all ${i === 0 ? "bg-[#00c055] hover:bg-[#00a047] border-0" : "border-gray-200 text-gray-500 hover:bg-gray-50"}`}>
                                        {cat}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {gridArticles.map((article, idx) => (
                                <Link href={`/news/${article.slug}`} key={article.id || idx} className="group block h-full">
                                    <div className="bg-white dark:bg-card rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 h-full flex flex-col group/card">
                                        <div className="relative h-64 overflow-hidden">
                                            {article.image_url ? (
                                                <Image
                                                    src={article.image_url}
                                                    alt={article.title}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 bg-[#0f172a] flex items-center justify-center text-white/5">
                                                    <FileText size={48} />
                                                </div>
                                            )}
                                            <div className="absolute top-6 left-6 bg-white/95 dark:bg-black/90 backdrop-blur-md text-[10px] font-black px-4 py-2 uppercase tracking-[0.2em] rounded-xl shadow-lg border border-gray-100 dark:border-gray-800">
                                                {article.category}
                                            </div>
                                        </div>
                                        <div className="p-10 flex flex-col flex-grow">
                                            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">
                                                {format(new Date(article.published_at), 'MMMM dd, yyyy')}
                                            </div>
                                            <h4 className="font-extrabold text-[#0f1c2e] dark:text-white text-2xl mb-6 line-clamp-2 group-hover/card:text-[#00c055] transition-colors leading-tight">
                                                {article.title}
                                            </h4>

                                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3">
                                                {article.excerpt}
                                            </p>

                                            <div className="mt-auto flex items-center text-sm font-black text-[#0f1c2e] dark:text-gray-300 group/link">
                                                Discover Path <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform text-[#00c055]" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Press Kit Section */}
                <section className="py-20 bg-white dark:bg-background border-t border-gray-100 dark:border-gray-800">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <h2 className="text-3xl font-bold mb-6 text-[#0f1c2e] dark:text-white">Media Resources</h2>
                        <p className="text-gray-500 dark:text-gray-400 mb-10">Download our official brand assets, executive bios, and high-resolution imagery for press usage.</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button variant="outline" className="h-14 px-8 border-2 dark:border-gray-800 rounded-xl gap-3 dark:text-gray-300 dark:hover:bg-card">
                                <Download size={18} /> Download Media Kit (ZIP)
                            </Button>
                            <Button variant="outline" className="h-14 px-8 border-2 dark:border-gray-800 rounded-xl gap-3 dark:text-gray-300 dark:hover:bg-card">
                                <Download size={18} /> Brand Guidelines (PDF)
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    );
}
