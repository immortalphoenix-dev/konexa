'use server';

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const newsletterSchema = z.object({
    email: z.string().email(),
});

const contactSchema = z.object({
    full_name: z.string().min(1),
    email: z.string().email(),
    subject: z.string().optional(),
    location: z.string().optional(),
    service_interest: z.string().optional(),
    message: z.string().min(1),
});

export async function subscribeToNewsletter(prevState: any, formData: FormData) {
    const supabase = await createClient();
    const email = formData.get("email");

    const validatedFields = newsletterSchema.safeParse({
        email,
    });

    if (!validatedFields.success) {
        return {
            success: false,
            message: "Please enter a valid email address.",
        };
    }

    try {
        const { error } = await supabase
            .from("newsletter_subscribers")
            .insert({ email: validatedFields.data.email });

        if (error) {
            if (error.code === '23505') { // Unique violation
                return {
                    success: true, // Treat duplicate as success to avoid leaking info? Or say already subscribed?
                    message: "You are already subscribed!",
                };
            }
            console.error("Newsletter error:", error);
            return {
                success: false,
                message: "Failed to subscribe. Please try again.",
            };
        }

        return {
            success: true,
            message: "Successfully subscribed to the newsletter!",
        };
    } catch (error) {
        console.error("Newsletter error:", error);
        return {
            success: false,
            message: "An unexpected error occurred.",
        };
    }
}

export async function submitContactForm(prevState: any, formData: FormData) {
    const supabase = await createClient();

    const rawData = {
        full_name: formData.get("full_name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        location: formData.get("location"),
        service_interest: formData.get("service_interest"),
        message: formData.get("message"),
    };

    const validatedFields = contactSchema.safeParse(rawData);

    if (!validatedFields.success) {
        return {
            success: false,
            message: "Please fill in all required fields correctly.",
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    try {
        const { error } = await supabase
            .from("contacts")
            .insert(validatedFields.data);

        if (error) {
            console.error("Contact form error:", error);
            return {
                success: false,
                message: "Failed to send message. Please try again.",
            };
        }

        revalidatePath("/contact");
        return {
            success: true,
            message: "Message sent successfully! We'll be in touch soon.",
        };

    } catch (error) {
        console.error("Contact form error:", error);
        return {
            success: false,
            message: "An unexpected error occurred.",
        };
    }
}
