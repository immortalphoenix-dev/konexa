import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  title: string;
  excerpt?: string | null;
  category?: string | null;
  author?: string | null;
  publishedAt: string;
  imageUrl?: string | null;
  slug: string;
  className?: string;
}

export function ArticleCard({
  title,
  excerpt,
  category,
  author,
  publishedAt,
  imageUrl,
  slug,
  className,
}: ArticleCardProps) {
  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/news/${slug}`} className={cn("group block", className)}>
      <article className="h-full rounded-xl overflow-hidden border bg-card hover:shadow-lg transition-all duration-300">
        {/* Image */}
        <div className="relative aspect-video bg-muted overflow-hidden">
          {imageUrl ? (
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <ImageIcon size={48} className="text-muted-foreground/30" />
            </div>
          )}
          {category && (
            <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
              {category}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="text-xs text-muted-foreground mb-2">
            {formattedDate}
            {author && <span> By {author}</span>}
          </div>
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          {excerpt && (
            <p className="text-sm text-muted-foreground line-clamp-2">
              {excerpt}
            </p>
          )}
          <div className="flex items-center gap-1 text-sm text-primary font-medium mt-4 group-hover:gap-2 transition-all">
            <span>Read More</span>
            <ArrowRight size={14} />
          </div>
        </div>
      </article>
    </Link>
  );
}
