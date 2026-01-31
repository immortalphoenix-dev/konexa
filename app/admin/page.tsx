import { createClient } from "@/lib/supabase/server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, FileText, Mail, Users } from "lucide-react";
import { redirect } from "next/navigation";

async function getStats() {
    const supabase = await createClient();

    const [
        { count: projectsCount },
        { count: teamCount },
        { count: articlesCount },
        { count: contactsCount },
        { data: recentContacts }
    ] = await Promise.all([
        supabase.from("projects").select("*", { count: "exact", head: true }),
        supabase.from("team_members").select("*", { count: "exact", head: true }),
        supabase.from("articles").select("*", { count: "exact", head: true }),
        supabase.from("contacts").select("*", { count: "exact", head: true }),
        supabase.from("contacts").select("*").order("created_at", { ascending: false }).limit(5)
    ]);

    return {
        projectsCount: projectsCount || 0,
        teamCount: teamCount || 0,
        articlesCount: articlesCount || 0,
        contactsCount: contactsCount || 0,
        recentContacts: recentContacts || []
    };
}

export default async function AdminDashboard() {
    const stats = await getStats();

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">Overview of your platform's content and activity.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
                        <Briefcase className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats.projectsCount}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Team Members</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats.teamCount}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Articles</CardTitle>
                        <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats.articlesCount}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Contact Submissions</CardTitle>
                        <Mail className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats.contactsCount}</div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-1">
                <Card className="col-span-1">
                    <CardHeader>
                        <CardTitle>Recent Contact Submissions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {stats.recentContacts.length === 0 ? (
                                <p className="text-sm text-gray-500">No recent submissions.</p>
                            ) : (
                                stats.recentContacts.map((contact: any) => (
                                    <div key={contact.id} className="flex items-start justify-between border-b pb-4 last:border-0 last:pb-0">
                                        <div>
                                            <p className="font-medium text-sm">{contact.full_name}</p>
                                            <p className="text-xs text-muted-foreground">{contact.email}</p>
                                            <p className="text-sm mt-1">{contact.subject}</p>
                                        </div>
                                        <span className="text-xs text-muted-foreground">
                                            {new Date(contact.created_at).toLocaleDateString()}
                                        </span>
                                    </div>
                                ))
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
