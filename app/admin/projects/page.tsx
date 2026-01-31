import { createClient } from "@/lib/supabase/server";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Manage Projects",
};

export const dynamic = "force-dynamic";

import { ProjectsTable } from "@/components/admin/projects-table";

export default async function AdminProjectsPage() {
    const supabase = await createClient();
    const { data: projects } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

    return <ProjectsTable projects={projects || []} />;
}
