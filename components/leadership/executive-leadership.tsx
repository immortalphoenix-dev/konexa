import { useEffect, useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { TeamCard } from "@/components/team-card";
import axios from "axios";
import { TeamMember } from "@/lib/types/database";

export function ExecutiveLeadership() {
  const [executives, setExecutives] = useState<TeamMember[]>([]);

  useEffect(() => {
    async function fetchExecutives() {
      try {
        const response = await axios.get("/api/team?category=executive");
        setExecutives(response.data);
      } catch (error) {
        console.error("Error fetching executive leadership data:", error);
      }
    }

    fetchExecutives();
  }, []);

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading
          label="OUR MANAGEMENT"
          title="World-class Expertise in Energy Systems"
          description="Konexa is led by a diverse team of professionals with deep roots in the global energy sector, project finance, and sustainable development. Our leadership combines international standards with local African insights to deliver integrated energy solutions that provide reliable, sustainable electricity to communities and industries alike."
        />

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6">Executive Leadership</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {executives.map((executive) => (
              <TeamCard
                key={executive.id}
                name={executive.name}
                role={executive.role}
                description={executive.description}
                imageUrl={executive.image_url}
                variant="large"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
