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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link key={article.slug} href={`/news/${article.slug}`} className="group block h-full">
              <article className="flex flex-col h-full bg-white dark:bg-card rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Image Area */}
                <div className="relative h-56 w-full overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${article.image_url || '/placeholder.svg'}')` }}
                  />
                  {/* Badge */}
                  {article.category && (
                    <div className="absolute bottom-4 left-4 bg-[#00c055] text-white text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-wider">
                      {article.category}
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col grow">
                  <h3 className="text-xl font-bold text-[#1e3a8a] dark:text-white mb-3 line-clamp-2 group-hover:text-blue-700 dark:group-hover:text-green-500 transition-colors leading-tight">
                    {article.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-gray-400 font-medium mb-4">
                    <span>{new Date(article.published_at || article.created_at).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>By {article.author || 'Konexa'}</span>
                  </div>

                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4 grow">
                    {article.excerpt}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
