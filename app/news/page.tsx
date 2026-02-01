import { createClient } from "@/lib/supabase/server";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, FileText, ChevronLeft, ChevronRight } from "lucide-react";
import { ResilientImage } from "@/components/ui/resilient-image";
import Link from "next/link";
import { Metadata } from "next";
import { format } from "date-fns";

export const metadata: Metadata = {
    title: "News & Insights | Transforming Africa's Energy Landscape",
};

export const dynamic = "force-dynamic";

export default async function NewsPage(props: {
    searchParams: Promise<{ page?: string }>
}) {
    const searchParams = await props.searchParams;
    const currentPage = parseInt(searchParams.page || "1");
    const pageSize = 6;

    const supabase = await createClient();

    // Get total count for pagination
    const { count: totalCount } = await supabase
        .from('articles')
        .select('*', { count: 'exact', head: true });

    // Fetch articles for current page
    const from = (currentPage - 1) * pageSize;
    const to = from + pageSize - 1;

    const { data: articles } = await supabase
        .from('articles')
        .select('*')
        .order('published_at', { ascending: false })
        .range(from, to);

    const featuredArticle = currentPage === 1 ? articles?.[0] : null;
    const gridArticles = currentPage === 1 ? articles?.slice(1) || [] : articles || [];

    const totalPages = Math.ceil((totalCount || 0) / pageSize);

    return (
        <>
            <SiteHeader />
            <main className="bg-gray-50/50 dark:bg-background min-h-screen">
                {/* Header with Cinematic Background */}
                <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0f172a]">
                    <div className="absolute inset-0 z-0">
                        <ResilientImage
                            src="/news-hero.png"
                            alt="Energy Network"
                            fill
                            priority
                            className="opacity-40 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/80 via-[#0f172a]/60 to-[#0f172a]" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <span className="text-[#00c055] font-extrabold tracking-[0.3em] uppercase text-xs mb-6 block drop-shadow-sm">
                            MEDIA CENTER
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-none">
                            News & Insights
                        </h1>
                        <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
                            Latest updates on our projects, partnerships, and thoughts on the future of energy in Africa.
                        </p>
                    </div>
                </section>

                {/* Featured Article with ample spacing */}
                {featuredArticle && (
                    <section className="py-24 relative z-20">
                        <div className="container mx-auto px-4">
                            <div className="bg-white dark:bg-card rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 flex flex-col lg:flex-row min-h-[500px] group">
                                <div className="lg:w-1/2 relative min-h-[350px] lg:min-h-full bg-[#0f1c2e] overflow-hidden">
                                    <ResilientImage
                                        src={featuredArticle.image_url}
                                        alt={featuredArticle.title}
                                        fill
                                        priority
                                        className="group-hover:scale-105 transition-transform duration-1000 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-[#0f1c2e] flex items-center justify-center text-white/5 -z-10">
                                        <FileText size={120} />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent lg:hidden" />
                                </div>
                                <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                                    <div className="flex items-center gap-4 mb-8">
                                        <Badge variant="secondary" className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/40 rounded-full px-5 py-1.5 font-bold text-xs">
                                            {featuredArticle.category}
                                        </Badge>
                                        <div className="flex items-center text-gray-400 dark:text-gray-500 text-sm font-bold uppercase tracking-widest" suppressHydrationWarning>
                                            <Calendar size={14} className="mr-2" />
                                            {featuredArticle.published_at && format(new Date(featuredArticle.published_at), 'MMM dd, yyyy')}
                                        </div>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-black text-[#0f1c2e] dark:text-white mb-8 leading-[1.15]">
                                        {featuredArticle.title}
                                    </h2>
                                    <p className="text-gray-500 dark:text-gray-400 text-lg mb-10 leading-relaxed max-w-xl">
                                        {featuredArticle.excerpt}
                                    </p>
                                    <Link href={`/news/${featuredArticle.slug}`}>
                                        <Button size="lg" className="rounded-full bg-[#0f1c2e] dark:bg-blue-600 hover:bg-[#1e3a8a] dark:hover:bg-blue-700 px-10 h-16 font-black shadow-xl transition-all hover:scale-105 uppercase tracking-widest text-xs">
                                            Explore Story <ArrowRight className="ml-3 h-5 w-5" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Article Grid */}
                <section className="py-16 pb-32">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
                            <div>
                                <h3 className="text-3xl font-black text-[#0f1c2e] dark:text-white mb-3">Editor's Choice</h3>
                                <p className="text-gray-500 text-base font-medium max-w-md">In-depth analysis and technical breakthroughs in the African energy sector.</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {["All", "Sustainability", "Innovation", "Company"].map((cat, i) => (
                                    <Button key={cat} variant={i === 0 ? "default" : "outline"} size="sm" className={`rounded-full px-6 h-10 font-bold transition-all ${i === 0 ? "bg-[#00c055] hover:bg-[#00a047] border-0 text-white" : "border-gray-200 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800"}`}>
                                        {cat}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {gridArticles.map((article, idx) => (
                                <Link href={`/news/${article.slug}`} key={article.id || idx} className="group block h-full">
                                    <div className="bg-white dark:bg-card rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 h-full flex flex-col group/card">
                                        <div className="relative h-72 overflow-hidden bg-[#0f1c2e]">
                                            <ResilientImage
                                                src={article.image_url}
                                                alt={article.title}
                                                fill
                                                className="object-cover transition-transform duration-1000 group-hover/card:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-[#0f1c2e] flex items-center justify-center text-white/5 -z-10">
                                                <FileText size={48} />
                                            </div>
                                            <div className="absolute top-6 left-6 bg-white/95 dark:bg-black/90 backdrop-blur-md text-[10px] font-black px-4 py-2 uppercase tracking-[0.2em] rounded-xl shadow-lg border border-gray-100 dark:border-gray-800">
                                                {article.category}
                                            </div>
                                        </div>
                                        <div className="p-10 flex flex-col flex-grow">
                                            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-6 flex items-center gap-2" suppressHydrationWarning>
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#00c055]" />
                                                {article.published_at && format(new Date(article.published_at), 'MMMM dd, yyyy')}
                                            </div>
                                            <h4 className="font-extrabold text-[#0f1c2e] dark:text-white text-2xl mb-6 line-clamp-2 group-hover/card:text-[#00c055] transition-colors leading-tight">
                                                {article.title}
                                            </h4>

                                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-10 line-clamp-3">
                                                {article.excerpt}
                                            </p>

                                            <div className="mt-auto flex items-center text-sm font-black text-[#0f1c2e] dark:text-gray-300 group/link">
                                                <span className="border-b-2 border-transparent group-hover/link:border-[#00c055] transition-all pb-1">Discover Path</span>
                                                <ArrowRight size={16} className="ml-3 group-hover/link:translate-x-2 transition-transform text-[#00c055]" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Pagination UI - Synced with Projects Style */}
                        {totalPages > 1 && (
                            <div className="mt-24 flex justify-center items-center gap-4">
                                <Button
                                    variant="ghost"
                                    asChild
                                    disabled={currentPage === 1}
                                    className={`font-bold text-gray-500 hover:text-[#0f1c2e] ${currentPage === 1 ? 'pointer-events-none opacity-50' : ''}`}
                                >
                                    <Link href={`/news?page=${Math.max(1, currentPage - 1)}`}>
                                        <ChevronLeft size={20} className="mr-2" /> Previous
                                    </Link>
                                </Button>

                                <div className="flex gap-2">
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                                        <Link
                                            key={pageNum}
                                            href={`/news?page=${pageNum}`}
                                            className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold transition-all ${currentPage === pageNum
                                                ? 'bg-[#0f1c2e] text-white shadow-lg'
                                                : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'
                                                }`}
                                        >
                                            {pageNum}
                                        </Link>
                                    ))}
                                </div>

                                <Button
                                    variant="ghost"
                                    asChild
                                    disabled={currentPage === totalPages}
                                    className={`font-bold text-gray-500 hover:text-[#0f1c2e] ${currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}`}
                                >
                                    <Link href={`/news?page=${Math.min(totalPages, currentPage + 1)}`}>
                                        Next <ChevronRight size={20} className="ml-2" />
                                    </Link>
                                </Button>
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    );
}
