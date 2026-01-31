import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Project } from "@/lib/types/database";

interface FeaturedProjectSectionProps {
  project: Project | null;
}

export function FeaturedProjectSection({ project }: FeaturedProjectSectionProps) {
  if (!project) return null;

  return (
    <section className="py-12 md:py-24 bg-[#0a192f] text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={project.image_url || "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070"}
          alt="Power Grid"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0a192f]/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-3 py-1 text-xs font-bold text-white bg-green-600 rounded-md uppercase tracking-wider mb-4">
              FEATURED PROJECT
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              {project.title}
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-8">
              {project.description}
            </p>

            {/* Testimonial - Hidden for now as it relies on specific relational data not in basic project schema */}
            {/* <div className="mb-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl relative border border-white/10">
              <Quote
                size={28}
                className="text-green-500 mb-3"
              />
              <p className="text-gray-300 italic mb-4">
                "Konexa's model hasn't just provided power; it's provided certainty. Our production downtime has decreased by 85% since the project launch."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white font-semibold">
                  IA
                </div>
                <div>
                  <div className="font-semibold text-white">Ibrahim Ahmed</div>
                  <div className="text-sm text-gray-400">
                    Managing Director, North-Gate Textiles
                  </div>
                </div>
              </div>
            </div> */}

            <Button asChild className="bg-green-600 hover:bg-green-700 text-white border-none">
              <Link href={`/projects/${project.slug}`}>
                View Project Case Study
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src={project.image_url || "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"}
                alt={project.title}
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
