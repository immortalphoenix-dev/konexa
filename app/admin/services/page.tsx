import { createClient } from "@/lib/supabase/server";
import { ServicesTable } from "@/components/admin/services-table";

export default async function AdminServicesPage() {
    const supabase = await createClient();
    const { data: services } = await supabase
        .from("services")
        .select("*")
        .order("order_index", { ascending: true });

    return <ServicesTable services={services || []} />;
}
