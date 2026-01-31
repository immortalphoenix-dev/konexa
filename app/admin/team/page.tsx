import { createClient } from "@/lib/supabase/server";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Manage Team",
};

export const dynamic = "force-dynamic";

import { TeamTable } from "@/components/admin/team-table";

export default async function AdminTeamPage() {
    const supabase = await createClient();
    const { data: teamMembers } = await supabase
        .from("team_members")
        .select("*")
        .order("order_index", { ascending: true });

    return <TeamTable teamMembers={teamMembers || []} />;
}
