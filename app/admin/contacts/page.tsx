import { createClient } from "@/lib/supabase/server";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Eye, Trash2 } from "lucide-react";

export default async function AdminContactsPage() {
    const supabase = await createClient();
    const { data: contacts } = await supabase
        .from("contacts")
        .select("*")
        .order("created_at", { ascending: false });

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Contact Submissions</h2>
                    <p className="text-muted-foreground">View inquiries from the contact form.</p>
                </div>
            </div>

            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Subject</TableHead>
                            <TableHead className="w-[300px]">Message Preview</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {contacts?.map((contact) => (
                            <TableRow key={contact.id}>
                                <TableCell className="whitespace-nowrap text-xs text-muted-foreground">
                                    {new Date(contact.created_at).toLocaleDateString()}
                                    <br />
                                    {new Date(contact.created_at).toLocaleTimeString()}
                                </TableCell>
                                <TableCell className="font-medium">{contact.full_name}</TableCell>
                                <TableCell>{contact.email}</TableCell>
                                <TableCell>{contact.subject}</TableCell>
                                <TableCell className="max-w-[300px] truncate text-muted-foreground">
                                    {contact.message}
                                </TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                        <Button variant="ghost" size="icon">
                                            <Eye className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600">
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                        {(!contacts || contacts.length === 0) && (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center h-24 text-muted-foreground">
                                    No messages found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
