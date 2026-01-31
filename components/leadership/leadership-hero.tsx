import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LeadershipHero() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-muted/50 to-muted">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-foreground">Leadership Team</span>
        </nav>

        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            Konexa Leadership Team
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            Meet the visionaries transforming energy systems across Africa
            through innovation, sustainability, and world-class management
            expertise.
          </p>

          <Button asChild className="mt-8">
            <Link href="/contact">Request A Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
