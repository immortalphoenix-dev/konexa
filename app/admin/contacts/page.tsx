import { createClient } from "@/lib/supabase/server";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Inquiries",
};

export const dynamic = "force-dynamic";

import { ContactsTable } from "@/components/admin/contacts-table";

export default async function AdminContactsPage() {
    const supabase = await createClient();
    const { data: contacts } = await supabase
        .from("contacts")
        .select("*")
        .order("created_at", { ascending: false });

    return <ContactsTable contacts={contacts || []} />;
}
