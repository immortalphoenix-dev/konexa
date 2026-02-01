import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import { ResilientImage } from "@/components/ui/resilient-image";

interface Props {
    params: Promise<{ slug: string }>;
}

export default async function NewsDetailPage({ params }: Props) {
    const { slug } = await params;
    const supabase = await createClient();

    const { data: article } = await supabase
        .from('articles')
        .select('*')
        .eq('slug', slug)
        .single();

    if (!article) {
        notFound();
    }

    return (
        <>
            <SiteHeader />
            <main className="bg-white dark:bg-background">
                {/* Hero section with featured image */}
                <section className="relative h-[50vh] min-h-[400px] flex items-end">
                    <ResilientImage
                        src={article.image_url}
                        alt={article.title}
                        fill
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1c2e] via-[#0f1c2e]/20 to-transparent" />

                    <div className="container mx-auto px-4 relative z-10 pb-12">
                        <Link
                            href="/news"
                            className="inline-flex items-center text-sm font-medium text-white hover:text-[#00c055] mb-8 transition-colors"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to News Hub
                        </Link>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-4xl drop-shadow-2xl">
                            {article.title}
                        </h1>
                    </div>
                </section>

                <article className="py-20 lg:py-32">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            {/* Meta Info */}
                            <div className="flex flex-wrap items-center gap-8 mb-16 pb-12 border-b border-gray-100 dark:border-gray-800">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-[#00c055]/10 flex items-center justify-center text-[#00c055]">
                                        <User size={18} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">WRITTEN BY</div>
                                        <div className="text-sm font-bold text-[#0f1c2e] dark:text-white">{article.author}</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-[#1e3a8a]/10 flex items-center justify-center text-[#1e3a8a] dark:text-blue-400">
                                        <Calendar size={18} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">PUBLISHED</div>
                                        <div className="text-sm font-bold text-[#0f1c2e] dark:text-white" suppressHydrationWarning>
                                            {format(new Date(article.published_at), 'MMMM dd, yyyy')}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                                        <Clock size={18} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">READ TIME</div>
                                        <div className="text-sm font-bold text-[#0f1c2e] dark:text-white">6 min read</div>
                                    </div>
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="prose prose-lg md:prose-xl dark:prose-invert max-w-none prose-headings:text-[#0f1c2e] dark:prose-headings:text-white prose-headings:font-black prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-strong:text-[#0f1c2e] dark:prose-strong:text-white prose-a:text-[#00c055] transition-all">
                                <ReactMarkdown>{article.content || article.excerpt || ''}</ReactMarkdown>
                            </div>

                            {/* Article Gallery */}
                            {article.gallery_images && article.gallery_images.length > 0 && (
                                <div className="mt-20">
                                    <h2 className="text-2xl font-black text-[#0f1c2e] dark:text-white mb-8 flex items-center gap-3">
                                        <div className="h-8 w-1 bg-[#00c055] rounded-full" />
                                        Interactive Gallery
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {article.gallery_images.map((url: string, index: number) => (
                                            <div
                                                key={url + index}
                                                className={`relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl group cursor-zoom-in ${index === 0 && article.gallery_images.length % 2 !== 0 ? 'md:col-span-2 aspect-video' : ''
                                                    }`}
                                            >
                                                <ResilientImage
                                                    src={url}
                                                    alt={`Story visual ${index + 1}`}
                                                    fill
                                                    className="group-hover:scale-110 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Share & tags */}
                            <div className="mt-20 pt-12 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-8">
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-black text-[#0f1c2e] dark:text-white uppercase tracking-widest">Share this story</span>
                                    <div className="flex gap-2">
                                        {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                                            <button key={i} className="h-10 w-10 rounded-full border border-gray-100 dark:border-gray-800 flex items-center justify-center text-gray-500 hover:text-[#00c055] hover:border-[#00c055] transition-all">
                                                <Icon size={18} />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <Link
                                    href="/news"
                                    className="inline-flex items-center text-sm font-black text-[#00c055] hover:gap-3 transition-all"
                                >
                                    Explore More Articles <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
            <SiteFooter />
        </>
    );
}
