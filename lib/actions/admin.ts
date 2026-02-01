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
        gallery_images: formData.gallery_images,
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

    // If making this project featured, ensure we don't exceed the limit of 2
    if (formData.featured) {
        // Fetch current featured projects (excluding this one if updating)
        let query = supabase
            .from("projects")
            .select("id")
            .eq("featured", true);

        if (id) {
            query = query.neq("id", id);
        }

        const { data: featuredProjects } = await query.order('updated_at', { ascending: true });

        if (featuredProjects && featuredProjects.length >= 2) {
            // Need to un-feature the oldest ones to make room for 2
            const idsToUnfeature = featuredProjects
                .slice(0, featuredProjects.length - 1) // Keep the most recent 1, unfeature others
                .map(p => p.id);

            // To ensure we only have 1 older one left (because current set to true will make it 2), 
            // we unfeature all but the single most recent.
            const allOldFeaturedIds = featuredProjects.map(p => p.id);
            // We want to keep ONLY the most recent one among the old ones.
            const idsToKeep = [featuredProjects[featuredProjects.length - 1].id];
            const actuallyUnfeature = allOldFeaturedIds.filter(fid => !idsToKeep.includes(fid));

            if (actuallyUnfeature.length > 0) {
                await supabase
                    .from("projects")
                    .update({ featured: false })
                    .in("id", actuallyUnfeature);
            }
        }
    }

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
    revalidatePath("/");
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

// --- IMAGE UPLOAD ---

export async function uploadImage(formData: FormData) {
    const supabase = await createClient();
    const file = formData.get("file") as File;

    if (!file) {
        throw new Error("No file provided");
    }

    // Generate a unique filename
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { data, error } = await supabase.storage
        .from("media")
        .upload(filePath, file, {
            cacheControl: "3600",
            upsert: false,
        });

    if (error) {
        throw new Error(error.message);
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
        .from("media")
        .getPublicUrl(filePath);

    return { url: publicUrl };
}

// --- SERVICES ---

export async function saveService(formData: any, id?: string) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("services")
        .upsert({
            id: id || undefined,
            title: formData.title,
            subtitle: formData.subtitle,
            slug: formData.slug,
            description: formData.description,
            icon: formData.icon,
            order_index: formData.order_index,
            features: formData.features,
            stats: formData.stats,
            updated_at: new Date().toISOString(),
        })
        .select()
        .single();

    if (error) throw new Error(error.message);

    revalidatePath("/admin/services");
    revalidatePath("/services");
    revalidatePath(`/services/${formData.slug}`);
    revalidatePath("/");

    return { success: true };
}

export async function deleteService(id: string) {
    const supabase = await createClient();
    const { error } = await supabase.from("services").delete().eq("id", id);
    if (error) throw new Error(error.message);

    revalidatePath("/admin/services");
    revalidatePath("/services");
    revalidatePath("/");
    return { success: true };
}
