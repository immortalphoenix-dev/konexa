import { createClient } from "@/lib/supabase/server";
import { Project, Article, Service, TeamMember } from "@/lib/types/database";

export async function getFeaturedProjects(limit: number = 2) {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("featured", true)
        .order("updated_at", { ascending: false })
        .limit(limit);

    if (error) {
        console.error("Error fetching featured projects:", error);
        return [];
    }

    return data as Project[];
}

export async function getRecentArticles(limit: number = 3) {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from("articles")
        .select("*")
        .order("published_at", { ascending: false })
        .limit(limit);

    if (error) {
        console.error("Error fetching recent articles:", error);
        return [];
    }

    return data as Article[];
}

export async function getAllServices() {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from("services")
        .select("*")
        .order("order_index", { ascending: true });

    if (error) {
        console.error("Error fetching services:", error);
        return [];
    }

    return data as Service[];
}

export async function getTeamMembers() {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from("team_members")
        .select("*")
        .order("order_index", { ascending: true });

    if (error) {
        console.error("Error fetching team members:", error);
        return [];
    }

    return data as TeamMember[];
}

export async function getProjectCount() {
    const supabase = await createClient();
    const { count, error } = await supabase
        .from("projects")
        .select("*", { count: "exact", head: true })
        .eq("status", "active");

    if (error) {
        console.error("Error fetching project count:", error);
        return 0;
    }

    return count || 0;
}
