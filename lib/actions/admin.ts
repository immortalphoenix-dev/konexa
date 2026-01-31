"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

// --- ARTICLES ---

export async function saveArticle(formData: any, id?: string) {
    const supabase = await createClient();

    const data = {
        title: formData.title,
        slug: formData.slug,
        excerpt: formData.excerpt,
        content: formData.content,
        category: formData.category,
        author: formData.author,
        image_url: formData.image_url,
        published_at: formData.published_at || new Date().toISOString(),
        updated_at: new Date().toISOString(),
    };

    let error;
    if (id) {
        const result = await supabase.from("articles").update(data).eq("id", id);
        error = result.error;
    } else {
        const result = await supabase.from("articles").insert([data]);
        error = result.error;
    }

    if (error) throw new Error(error.message);

    revalidatePath("/admin/articles");
    revalidatePath("/news");
    return { success: true };
}

export async function deleteArticle(id: string) {
    const supabase = await createClient();
    const { error } = await supabase.from("articles").delete().eq("id", id);
    if (error) throw new Error(error.message);

    revalidatePath("/admin/articles");
    revalidatePath("/news");
    return { success: true };
}

// --- TEAM MEMBERS ---

export async function saveTeamMember(formData: any, id?: string) {
    const supabase = await createClient();

    const data = {
        name: formData.name,
        role: formData.role,
        title: formData.title,
        description: formData.description,
        category: formData.category,
        order_index: formData.order_index,
        image_url: formData.image_url,
        updated_at: new Date().toISOString(),
    };

    let error;
    if (id) {
        const result = await supabase.from("team_members").update(data).eq("id", id);
        error = result.error;
    } else {
        const result = await supabase.from("team_members").insert([data]);
        error = result.error;
    }

    if (error) throw new Error(error.message);

    revalidatePath("/admin/team");
    revalidatePath("/leadership");
    revalidatePath("/about");
    return { success: true };
}

export async function deleteTeamMember(id: string) {
    const supabase = await createClient();
    const { error } = await supabase.from("team_members").delete().eq("id", id);
    if (error) throw new Error(error.message);

    revalidatePath("/admin/team");
    revalidatePath("/leadership");
    revalidatePath("/about");
    return { success: true };
}

// --- PROJECTS ---

export async function saveProject(formData: any, id?: string) {
    const supabase = await createClient();

    const data = {
        title: formData.title,
        slug: formData.slug,
        description: formData.description,
        content: formData.content,
        location: formData.location,
        image_url: formData.image_url,
        stats: formData.stats,
        featured: formData.featured,
        status: formData.status,
        updated_at: new Date().toISOString(),
    };

    let error;
    if (id) {
        const result = await supabase.from("projects").update(data).eq("id", id);
        error = result.error;
    } else {
        const result = await supabase.from("projects").insert([data]);
        error = result.error;
    }

    if (error) throw new Error(error.message);

    revalidatePath("/admin/projects");
    revalidatePath("/projects");
    return { success: true };
}

export async function deleteProject(id: string) {
    const supabase = await createClient();
    const { error } = await supabase.from("projects").delete().eq("id", id);
    if (error) throw new Error(error.message);

    revalidatePath("/admin/projects");
    revalidatePath("/projects");
    return { success: true };
}

// --- CONTACTS ---

export async function deleteContactSubmission(id: string) {
    const supabase = await createClient();
    const { error } = await supabase.from("contacts").delete().eq("id", id);
    if (error) throw new Error(error.message);

    revalidatePath("/admin/contacts");
    return { success: true };
}
