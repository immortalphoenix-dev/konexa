import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LeadershipCta() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              Ready to transform your energy future?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Join hands with the experts. We offer scalable and sustainable
              energy solutions tailored to your infrastructure needs.
            </p>

            <div className="flex items-center gap-2 mt-6">
              <div className="text-3xl font-bold text-primary">10+ Years</div>
            </div>
            <p className="text-muted-foreground">
              Of excellence in energy transformation across the African
              continent.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button asChild>
                <Link href="/contact">
                  Contact Team
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-primary flex items-center justify-center">
                <Zap size={48} className="text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
