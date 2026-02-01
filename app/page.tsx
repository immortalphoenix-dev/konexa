import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroSection } from "@/components/home/hero-section";
import { ChallengeSection } from "@/components/home/challenge-section";
import { OperationalFrameworkSection } from "@/components/home/operational-framework-section";
import { RegionalPresenceSection } from "@/components/home/regional-presence-section";
import { SustainabilitySection } from "@/components/home/sustainability-section";
import { ApproachSection } from "@/components/home/approach-section";
import { LeadershipPreviewSection } from "@/components/home/leadership-preview-section";
import { PartnersSection } from "@/components/home/partners-section";
import { ArticlesSection } from "@/components/home/articles-section";
import { ScrollAnimation } from "@/components/scroll-animation";

import { getFeaturedProjects, getRecentArticles, getTeamMembers } from "@/lib/supabase/queries";
import { ProjectsSlider } from "@/components/home/projects-slider";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [featuredProjects, articles, teamMembers] = await Promise.all([
    getFeaturedProjects(2),
    getRecentArticles(3),
    getTeamMembers(),
  ]);

  return (

    <>
      <SiteHeader />
      <main>
        {/* Hero Section - Visible immediately */}
        <HeroSection />

        {/* Challenge & Solution */}
        <ScrollAnimation>
          <ChallengeSection />
        </ScrollAnimation>

        {/* Operational Framework */}
        <ScrollAnimation>
          <OperationalFrameworkSection />
        </ScrollAnimation>

        {/* Regional Presence */}
        <ScrollAnimation>
          <RegionalPresenceSection />
        </ScrollAnimation>

        {/* Projects Slider */}
        <ScrollAnimation>
          <ProjectsSlider projects={featuredProjects} />
        </ScrollAnimation>

        {/* Sustainability - UN SDGs */}
        <ScrollAnimation>
          <SustainabilitySection />
        </ScrollAnimation>

        {/* Our Approach */}
        <ScrollAnimation>
          <ApproachSection />
        </ScrollAnimation>

        {/* Leadership Preview */}
        <ScrollAnimation>
          <LeadershipPreviewSection teamMembers={teamMembers} />
        </ScrollAnimation>

        {/* Partners */}
        <ScrollAnimation>
          <PartnersSection />
        </ScrollAnimation>

        {/* Recent Articles */}
        <ScrollAnimation>
          <ArticlesSection articles={articles} />
        </ScrollAnimation>
      </main>
      <SiteFooter />
    </>
  );
}
