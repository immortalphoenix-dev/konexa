"use client";

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
import { useState } from "react";
import { DeleteDialog } from "./delete-dialog";
import { deleteContactSubmission } from "@/lib/actions/admin";
import { toast } from "sonner";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

interface ContactsTableProps {
    contacts: any[];
}

export function ContactsTable({ contacts }: ContactsTableProps) {
    const [viewingContact, setViewingContact] = useState<any>(null);
    const [deletingContact, setDeletingContact] = useState<any>(null);

    const handleDelete = async () => {
        if (deletingContact) {
            await deleteContactSubmission(deletingContact.id);
            toast.success("Inquiry deleted");
        }
    };

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
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => setViewingContact(contact)}
                                        >
                                            <Eye className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="text-red-500 hover:text-red-600"
                                            onClick={() => setDeletingContact(contact)}
                                        >
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

            {/* View Dialog */}
            <Dialog open={!!viewingContact} onOpenChange={() => setViewingContact(null)}>
                <DialogContent className="max-w-xl">
                    <DialogHeader>
                        <DialogTitle>Inquiry Details</DialogTitle>
                    </DialogHeader>
                    {viewingContact && (
                        <div className="space-y-4 pt-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">From</p>
                                    <p className="font-medium">{viewingContact.full_name}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Email</p>
                                    <p className="font-medium">{viewingContact.email}</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Subject</p>
                                <p className="font-medium">{viewingContact.subject}</p>
                            </div>
                            {viewingContact.location && (
                                <div>
                                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Location</p>
                                    <p className="font-medium">{viewingContact.location}</p>
                                </div>
                            )}
                            <div>
                                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Message</p>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed bg-muted p-4 rounded-lg mt-1 whitespace-pre-wrap">
                                    {viewingContact.message}
                                </p>
                            </div>
                            <div className="flex justify-end">
                                <Button onClick={() => setViewingContact(null)}>Close</Button>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>

            {/* Delete Dialog */}
            <DeleteDialog
                isOpen={!!deletingContact}
                onClose={() => setDeletingContact(null)}
                onConfirm={handleDelete}
                title="Delete Inquiry"
                description={`Are you sure you want to delete this message from "${deletingContact?.full_name}"?`}
            />
        </div>
    );
}
