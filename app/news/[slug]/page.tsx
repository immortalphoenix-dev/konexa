import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { Metadata } from "next";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const supabase = await createClient();
    const { data: article } = await supabase
        .from("articles")
        .select("title, excerpt")
        .eq("slug", slug)
        .single();

    if (!article) return { title: "Article Not Found" };

    return {
        title: `${article.title} | Konexa News`,
        description: article.excerpt,
    };
}

export default async function ArticleDetailPage({ params }: Props) {
    const { slug } = await params;
    const supabase = await createClient();

    const { data: article } = await supabase
        .from("articles")
        .select("*")
        .eq("slug", slug)
        .single();

    if (!article) {
        notFound();
    }

    return (
        <>
            <SiteHeader />
            <main className="bg-white dark:bg-background min-h-screen">
                <article className="container mx-auto px-4 py-20 max-w-4xl">
                    <Link
                        href="/news"
                        className="inline-flex items-center text-sm font-medium text-[#00c055] hover:text-[#00a047] mb-12 transition-colors"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to News
                    </Link>

                    <header className="mb-12">
                        <div className="flex items-center gap-4 mb-6">
                            <Badge className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-full px-4 py-1">
                                {article.category}
                            </Badge>
                            <div className="flex items-center text-gray-400 text-sm">
                                <Calendar size={14} className="mr-2" />
                                {format(new Date(article.published_at), 'MMMM dd, yyyy')}
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-[#0f1c2e] dark:text-white mb-8 leading-tight">
                            {article.title}
                        </h1>

                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                                <User size={20} className="text-gray-500" />
                            </div>
                            <span className="font-bold text-[#0f1c2e] dark:text-gray-300">{article.author}</span>
                        </div>
                    </header>

                    {article.image_url && (
                        <div className="relative aspect-video rounded-3xl overflow-hidden mb-12 shadow-2xl">
                            <Image
                                src={article.image_url}
                                alt={article.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}

                    <div className="max-w-none">
                        {article.content ? (
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm, remarkBreaks]}
                                components={{
                                    h1: ({ children }) => <h1 className="text-4xl md:text-5xl font-black text-[#0f1c2e] dark:text-white mt-16 mb-8 leading-tight">{children}</h1>,
                                    h2: ({ children }) => <h2 className="text-2xl md:text-3xl font-black text-[#0f1c2e] dark:text-white mt-12 mb-6 border-b pb-3 border-gray-100 dark:border-gray-800">{children}</h2>,
                                    h3: ({ children }) => <h3 className="text-xl md:text-2xl font-bold text-[#0f1c2e] dark:text-white mt-10 mb-4">{children}</h3>,
                                    p: ({ children }) => <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{children}</p>,
                                    blockquote: ({ children }) => (
                                        <blockquote className="border-l-4 border-[#00c055] bg-gray-50 dark:bg-gray-900/40 py-6 px-8 italic rounded-r-2xl my-10 text-xl text-gray-700 dark:text-gray-300 shadow-sm">
                                            {children}
                                        </blockquote>
                                    ),
                                    ul: ({ children }) => <ul className="my-8 ml-6 space-y-4 list-disc marker:text-[#00c055]">{children}</ul>,
                                    ol: ({ children }) => <ol className="my-8 ml-6 space-y-4 list-decimal marker:text-[#00c055] marker:font-bold">{children}</ol>,
                                    li: ({ children }) => (
                                        <li className="text-lg text-gray-600 dark:text-gray-400 pl-2">
                                            {children}
                                        </li>
                                    ),
                                    strong: ({ children }) => <strong className="font-bold text-[#0f1c2e] dark:text-white underline decoration-[#00c055]/30 decoration-2 underline-offset-2">{children}</strong>,
                                    a: ({ href, children }) => (
                                        <a href={href} className="text-[#00c055] font-semibold hover:underline decoration-2 underline-offset-4 transition-all" target="_blank" rel="noopener noreferrer">
                                            {children}
                                        </a>
                                    ),
                                }}
                            >
                                {article.content}
                            </ReactMarkdown>
                        ) : (
                            <div className="bg-gray-50 dark:bg-gray-900/20 p-8 rounded-2xl border border-dashed border-gray-200 dark:border-gray-800 text-center">
                                <p className="text-gray-400 italic mb-0">Detailed analysis and full report for this entry are being finalized and will be available shortly.</p>
                            </div>
                        )}
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
                                        <Image
                                            src={url}
                                            alt={`Story visual ${index + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </article>
            </main>
            <SiteFooter />
        </>
    );
}
