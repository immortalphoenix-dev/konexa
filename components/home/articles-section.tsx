import Link from "next/link";
import { ResilientImage } from "@/components/ui/resilient-image";

interface Article {
  slug: string;
  image_url?: string;
  title: string;
  excerpt?: string;
}

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
        </div>
        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {articles.map((article) => (
            <Link key={article.slug} href={`/news/${article.slug}`} className="group block h-full">
              <article className="flex flex-col h-full bg-white dark:bg-card rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Image Area */}
                <div className="relative h-56 w-full overflow-hidden bg-[#0f1c2e]">
                  <ResilientImage
                    src={article.image_url}
                    alt={article.title}
                    fill
                    className="group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                {/* Content Area */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#1e3a8a] dark:text-white mb-4 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">{article.excerpt}</p>
                  <div className="mt-auto">
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">Read More &rarr;</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
