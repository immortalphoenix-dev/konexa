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
import { Plus, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { TeamForm } from "./team-form";
import { DeleteDialog } from "./delete-dialog";
import { deleteTeamMember } from "@/lib/actions/admin";
import { toast } from "sonner";

interface TeamTableProps {
    teamMembers: any[];
}

export function TeamTable({ teamMembers }: TeamTableProps) {
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [editingMember, setEditingMember] = useState<any>(null);
    const [deletingMember, setDeletingMember] = useState<any>(null);

    const handleDelete = async () => {
        if (deletingMember) {
            await deleteTeamMember(deletingMember.id);
            toast.success("Team member deleted");
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Team Members</h2>
                    <p className="text-muted-foreground">Manage your leadership and management team.</p>
                </div>
                <Button onClick={() => setIsAddOpen(true)}>
                    <Plus className="mr-2 h-4 w-4" /> Add Member
                </Button>
            </div>

            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Image</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {teamMembers?.map((member) => (
                            <TableRow key={member.id}>
                                <TableCell>
                                    <div className="h-10 w-10 rounded-full bg-muted overflow-hidden">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        {member.image_url && <img src={member.image_url} alt={member.name} className="h-full w-full object-cover" />}
                                    </div>
                                </TableCell>
                                <TableCell className="font-medium">{member.name}</TableCell>
                                <TableCell>{member.role}</TableCell>
                                <TableCell className="capitalize">{member.category}</TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => setEditingMember(member)}
                                        >
                                            <Pencil className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="text-red-500 hover:text-red-600"
                                            onClick={() => setDeletingMember(member)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                        {(!teamMembers || teamMembers.length === 0) && (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center h-24 text-muted-foreground">
                                    No team members found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Add Dialog */}
            <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Add Team Member</DialogTitle>
                    </DialogHeader>
                    <TeamForm onSuccess={() => setIsAddOpen(false)} />
                </DialogContent>
            </Dialog>

            {/* Edit Dialog */}
            <Dialog open={!!editingMember} onOpenChange={() => setEditingMember(null)}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Edit Team Member</DialogTitle>
                    </DialogHeader>
                    {editingMember && (
                        <TeamForm
                            initialData={editingMember}
                            onSuccess={() => setEditingMember(null)}
                        />
                    )}
                </DialogContent>
            </Dialog>

            {/* Delete Dialog */}
            <DeleteDialog
                isOpen={!!deletingMember}
                onClose={() => setDeletingMember(null)}
                onConfirm={handleDelete}
                title="Delete Team Member"
                description={`Are you sure you want to delete "${deletingMember?.name}"? This action cannot be undone.`}
            />
        </div>
    );
}
