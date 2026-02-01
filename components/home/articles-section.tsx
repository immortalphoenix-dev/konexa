import Link from "next/link";
import { Article } from "@/lib/types/database";

interface ArticlesSectionProps {
  articles: Article[];
}

export function ArticlesSection({ articles }: ArticlesSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] dark:text-white mb-4">
            Recent Articles
          </h2>
          <div className="w-16 h-1 bg-[#00c055] rounded-full mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articles.map((article) => (
            <Link key={article.slug} href={`/news/${article.slug}`} className="group block h-full">
              <article className="flex flex-col h-full bg-white dark:bg-card rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Image Area */}
                <div className="relative h-56 w-full overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${article.image_url || '/placeholder.svg'}')` }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  {/* Badge */}
                  {article.category && (
                    <div className="absolute bottom-4 left-4 bg-[#00c055] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider shadow-lg">
                      {article.category}
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col grow">
                  <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">
                    <span>{new Date(article.published_at || article.created_at).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0f1c2e] dark:text-white mb-4 line-clamp-2 group-hover:text-[#00c055] transition-colors leading-tight">
                    {article.title}
                  </h3>

                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6 grow">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center text-[#0f1c2e] dark:text-gray-300 text-sm font-bold group/btn">
                    Read Full Story
                    <div className="ml-2 w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center group-hover/btn:bg-[#00c055] group-hover/btn:text-white transition-all duration-300">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0f1c2e] hover:bg-[#1e3a8a] text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Explore Media Center
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
