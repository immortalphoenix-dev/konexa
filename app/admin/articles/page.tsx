import { createClient } from "@/lib/supabase/server";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Manage Articles",
};

export const dynamic = "force-dynamic";

import { ArticlesTable } from "@/components/admin/articles-table";

export default async function AdminArticlesPage() {
    const supabase = await createClient();
    const { data: articles } = await supabase
        .from("articles")
        .select("*")
        .order("published_at", { ascending: false });

    return <ArticlesTable articles={articles || []} />;
}
