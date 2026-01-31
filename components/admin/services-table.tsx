"use client";

import { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Plus, Zap } from "lucide-react";
import { format } from "date-fns";
import { DeleteDialog } from "./delete-dialog";
import { deleteService } from "@/lib/actions/admin";
import { toast } from "sonner";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { ServiceForm } from "./service-form";

interface ServicesTableProps {
    services: any[];
}

export function ServicesTable({ services }: ServicesTableProps) {
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [editingService, setEditingService] = useState<any>(null);
    const [deletingService, setDeletingService] = useState<any>(null);

    const handleDelete = async () => {
        if (deletingService) {
            try {
                await deleteService(deletingService.id);
                toast.success("Service deleted");
                setDeletingService(null);
            } catch (error: any) {
                toast.error(error.message);
            }
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center bg-white dark:bg-card p-6 rounded-xl border shadow-sm">
                <div>
                    <h2 className="text-xl font-bold text-[#0f1c2e] dark:text-white">Services</h2>
                    <p className="text-sm text-gray-500">Manage energy solution offerings.</p>
                </div>
                <Button onClick={() => setIsAddOpen(true)} className="bg-[#00c055] hover:bg-[#00a047]">
                    <Plus className="mr-2 h-4 w-4" /> Add Service
                </Button>
            </div>

            <div className="bg-white dark:bg-card rounded-xl border shadow-sm overflow-hidden">
                <Table>
                    <TableHeader className="bg-gray-50 dark:bg-muted/50">
                        <TableRow>
                            <TableHead className="w-[300px]">Service</TableHead>
                            <TableHead>Slug</TableHead>
                            <TableHead>Order</TableHead>
                            <TableHead>Last Updated</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {services.map((service) => (
                            <TableRow key={service.id} className="hover:bg-gray-50/50 dark:hover:bg-muted/30 transition-colors">
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-lg bg-[#00c055]/10 flex items-center justify-center text-[#00c055]">
                                            <Zap size={20} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-[#0f1c2e] dark:text-white">{service.title}</div>
                                            <div className="text-xs text-gray-500 line-clamp-1">{service.subtitle}</div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="font-mono text-xs">{service.slug}</TableCell>
                                <TableCell className="font-medium">{service.order_index}</TableCell>
                                <TableCell className="text-gray-500 text-xs">
                                    {format(new Date(service.updated_at), 'MMM dd, yyyy')}
                                </TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                                            onClick={() => setEditingService(service)}
                                        >
                                            <Edit size={16} />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50"
                                            onClick={() => setDeletingService(service)}
                                        >
                                            <Trash2 size={16} />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                        {services.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={5} className="h-24 text-center text-gray-400">
                                    No services found. Add your first service to get started.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Add Service Dialog */}
            <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Add New Service</DialogTitle>
                    </DialogHeader>
                    <ServiceForm onSuccess={() => setIsAddOpen(false)} />
                </DialogContent>
            </Dialog>

            {/* Edit Service Dialog */}
            <Dialog open={!!editingService} onOpenChange={(open) => !open && setEditingService(null)}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Edit Service</DialogTitle>
                    </DialogHeader>
                    <ServiceForm
                        initialData={editingService}
                        onSuccess={() => setEditingService(null)}
                    />
                </DialogContent>
            </Dialog>

            {/* Delete Confirmation */}
            <DeleteDialog
                isOpen={!!deletingService}
                onClose={() => setDeletingService(null)}
                onConfirm={handleDelete}
                title="Delete Service"
                description={`Are you sure you want to delete "${deletingService?.title}"? This action cannot be undone and will remove the service from the website.`}
            />
        </div>
    );
}
