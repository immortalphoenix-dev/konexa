import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ServicesHero } from "@/components/services/services-hero";
import { FrameworkSection } from "@/components/home/framework-section";
import { StatsSection } from "@/components/home/stats-section";
import { ConsultationSection } from "@/components/home/consultation-section";
import { getAllServices } from "@/lib/supabase/queries";

export const dynamic = "force-dynamic";

export default async function ApproachPage() {
    const services = await getAllServices();

    return (
        <>
            <SiteHeader />
            <main>
                <ServicesHero />
                <FrameworkSection services={services} />
                <StatsSection />
                <ConsultationSection />
            </main>
            <SiteFooter />
        </>
    );
}
