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
import { Plus, Pencil, Trash2, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { ProjectForm } from "./project-form";
import { DeleteDialog } from "./delete-dialog";
import { deleteProject } from "@/lib/actions/admin";
import { toast } from "sonner";

interface ProjectsTableProps {
    projects: any[];
}

export function ProjectsTable({ projects }: ProjectsTableProps) {
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [editingProject, setEditingProject] = useState<any>(null);
    const [deletingProject, setDeletingProject] = useState<any>(null);

    const handleDelete = async () => {
        if (deletingProject) {
            await deleteProject(deletingProject.id);
            toast.success("Project deleted");
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
                    <p className="text-muted-foreground">Manage your portfolio of projects.</p>
                </div>
                <Button onClick={() => setIsAddOpen(true)}>
                    <Plus className="mr-2 h-4 w-4" /> Add Project
                </Button>
            </div>

            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead className="text-center">Featured</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {projects?.map((project) => (
                            <TableRow key={project.id}>
                                <TableCell className="font-medium">{project.title}</TableCell>
                                <TableCell>
                                    <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>
                                        {project.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>{project.location}</TableCell>
                                <TableCell className="text-center">
                                    {project.featured && <Star className="h-4 w-4 text-yellow-500 mx-auto fill-yellow-500" />}
                                </TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => setEditingProject(project)}
                                        >
                                            <Pencil className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="text-red-500 hover:text-red-600"
                                            onClick={() => setDeletingProject(project)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                        {(!projects || projects.length === 0) && (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center h-24 text-muted-foreground">
                                    No projects found.
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
                        <DialogTitle>Add New Project</DialogTitle>
                    </DialogHeader>
                    <ProjectForm onSuccess={() => setIsAddOpen(false)} />
                </DialogContent>
            </Dialog>

            {/* Edit Dialog */}
            <Dialog open={!!editingProject} onOpenChange={() => setEditingProject(null)}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Edit Project</DialogTitle>
                    </DialogHeader>
                    {editingProject && (
                        <ProjectForm
                            initialData={editingProject}
                            onSuccess={() => setEditingProject(null)}
                        />
                    )}
                </DialogContent>
            </Dialog>

            {/* Delete Dialog */}
            <DeleteDialog
                isOpen={!!deletingProject}
                onClose={() => setDeletingProject(null)}
                onConfirm={handleDelete}
                title="Delete Project"
                description={`Are you sure you want to delete "${deletingProject?.title}"? This action cannot be undone.`}
            />
        </div>
    );
}
