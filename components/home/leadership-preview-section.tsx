import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TeamMember } from "@/lib/types/database";

interface LeadershipPreviewSectionProps {
  teamMembers?: TeamMember[];
}

export function LeadershipPreviewSection({ teamMembers = [] }: LeadershipPreviewSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-background">
      <div className="container mx-auto px-4">
        {/* Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold text-[#00c055] uppercase tracking-widest mb-4">
            LEADERSHIP
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1e3a8a] dark:text-white mb-6">
            Driven by World-Class Experts
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
            Our team brings decades of experience from the global energy sector,
            dedicated to solving Africa's most pressing power challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: Team Image - using unified image */}
          <div className="relative h-full min-h-[400px]">
            <div
              className="absolute inset-0 rounded-3xl bg-cover bg-center shadow-lg"
              style={{
                backgroundImage: "url('/team-teal.png')",
              }}
            />
          </div>

          {/* Right: Visionary Team & Stats */}
          <div className="flex flex-col gap-6">
            {/* Visionary Team Card */}
            <div className="bg-white dark:bg-card p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm grow flex flex-col justify-center">
              <h3 className="text-xl font-bold text-[#1e3a8a] dark:text-white mb-4">
                A Visionary Team
              </h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                From former utility CEOs to renewable energy engineers and policy
                experts, our diverse team understands the complexities of the
                African energy market.
              </p>

              {teamMembers.length > 0 && (
                <div className="mb-6 space-y-3">
                  <div className="text-sm font-bold text-[#1e3a8a] dark:text-white uppercase tracking-wider">Key Leaders</div>
                  <div className="flex flex-wrap gap-2">
                    {teamMembers.slice(0, 3).map((member) => (
                      <div key={member.id} className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 p-2 rounded-lg">
                        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden relative">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={member.image_url || "/placeholder-user.jpg"} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                          {member.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <Link
                href="/leadership"
                className="inline-flex items-center text-[#00c055] font-bold hover:text-green-700 dark:hover:text-green-400 transition-colors group"
              >
                Meet the whole team
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Stats row */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-card p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <div className="text-4xl font-bold text-[#00c055] mb-2">
                  100+
                </div>
                <div className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                  ENERGY SPECIALISTS
                </div>
              </div>
              <div className="bg-white dark:bg-card p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <div className="text-4xl font-bold text-[#1e3a8a] dark:text-white mb-2">4</div>
                <div className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                  REGIONAL OFFICES
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
