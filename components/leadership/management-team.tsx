import { useEffect, useState } from "react";
import { TeamCard } from "@/components/team-card";
import axios from "axios";
import { TeamMember } from "@/lib/types/database";

export function ManagementTeam() {
  const [managementTeam, setManagementTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    async function fetchManagementTeam() {
      try {
        const response = await axios.get("/api/team?category=management");
        setManagementTeam(response.data);
      } catch (error) {
        console.error("Error fetching management team data:", error);
      }
    }

    fetchManagementTeam();
  }, []);

  return (
    <section className="py-12 lg:py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h3 className="text-xl font-semibold mb-6">Our Management Team</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {managementTeam.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              role={member.role}
              description={member.description}
              imageUrl={member.image_url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
