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

                    <div className="prose prose-lg dark:prose-invert max-w-none 
                        prose-headings:text-[#0f1c2e] dark:prose-headings:text-white 
                        prose-headings:font-black prose-p:text-gray-600 dark:prose-p:text-gray-400 
                        prose-p:leading-relaxed prose-a:text-[#00c055] prose-strong:text-[#0f1c2e] 
                        dark:prose-strong:text-white prose-blockquote:border-l-[#00c055] 
                        prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-gray-900/40 
                        prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl">
                        {article.content ? (
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {article.content}
                            </ReactMarkdown>
                        ) : (
                            <p className="text-gray-400 italic">Full article content is coming soon...</p>
                        )}
                    </div>
                </article>
            </main>
            <SiteFooter />
        </>
    );
}
