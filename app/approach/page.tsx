import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ServicesHero } from "@/components/services/services-hero";
import { FrameworkSection } from "@/components/home/framework-section";
import { StatsSection } from "@/components/home/stats-section";
import { ConsultationSection } from "@/components/home/consultation-section";

export default function ApproachPage() {
    return (
        <>
            <SiteHeader />
            <main>
                <ServicesHero />
                <FrameworkSection />
                <StatsSection />
                <ConsultationSection />
            </main>
            <SiteFooter />
        </>
    );
}
