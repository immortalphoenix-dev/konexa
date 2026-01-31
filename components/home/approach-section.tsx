import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Full integration with existing national power grids",
  "High-reliability solutions for commercial and industrial clients",
  "Substantial reduction in carbon emissions through solar hybridization",
];

export function ApproachSection() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side - Left */}
          <div className="relative">
            <div
              className="aspect-[4/3] rounded-3xl bg-cover bg-center overflow-hidden shadow-xl"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop')",
              }}
            />
            {/* Overlapping Green Card */}
            <div className="absolute -bottom-6 -right-6 lg:-right-12 w-64 md:w-72 bg-[#00c055] p-6 rounded-2xl shadow-xl text-white">
              <p className="font-bold text-lg leading-snug italic">
                “Transforming the energy landscape through innovative utility models and local empowerment.”
              </p>
            </div>
          </div>

          {/* Content Side - Right */}
          <div className="lg:pl-8 mt-12 lg:mt-0">
            <span className="inline-block text-xs font-bold text-[#00c055] uppercase tracking-widest mb-4">
              OUR APPROACH
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1e3a8a] dark:text-white mb-6 leading-tight">
              Revolutionizing the Integrated Utility Model
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-8">
              We work with existing utilities to develop integrated power systems
              that leverage the best of renewable energy and traditional
              infrastructure. Our model ensures reliability for industrial users
              while expanding access to local communities.
            </p>

            <ul className="space-y-5 mb-10">
              {[
                "Full integration with existing national power grids",
                "High-reliability solutions for commercial and industrial clients",
                "Substantial reduction in carbon emissions through solar hybridization",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full border-2 border-[#00c055] flex items-center justify-center">
                      <Check size={12} className="text-[#00c055] stroke-[4]" />
                    </div>
                  </div>
                  <span className="text-[#1e3a8a] dark:text-gray-200 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/services"
              className="inline-flex items-center text-[#1e3a8a] dark:text-[#00c055] font-bold hover:text-blue-800 dark:hover:text-green-400 transition-colors group"
            >
              Discover Our Model
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
