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
import { Plus, Pencil, Trash2, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { ArticleForm } from "./article-form";
import { DeleteDialog } from "./delete-dialog";
import { deleteArticle } from "@/lib/actions/admin";
import { toast } from "sonner";

interface ArticlesTableProps {
    articles: any[];
}

export function ArticlesTable({ articles }: ArticlesTableProps) {
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [editingArticle, setEditingArticle] = useState<any>(null);
    const [deletingArticle, setDeletingArticle] = useState<any>(null);

    const handleDelete = async () => {
        if (deletingArticle) {
            await deleteArticle(deletingArticle.id);
            toast.success("Article deleted");
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Articles & News</h2>
                    <p className="text-muted-foreground">Manage your blog posts and announcements.</p>
                </div>
                <Button onClick={() => setIsAddOpen(true)}>
                    <Plus className="mr-2 h-4 w-4" /> Add Article
                </Button>
            </div>

            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[400px]">Title</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Author</TableHead>
                            <TableHead>Published Date</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {articles?.map((article) => (
                            <TableRow key={article.id}>
                                <TableCell className="font-medium line-clamp-1">{article.title}</TableCell>
                                <TableCell>
                                    <Badge variant="outline">{article.category}</Badge>
                                </TableCell>
                                <TableCell>{article.author}</TableCell>
                                <TableCell>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <Calendar className="mr-2 h-3 w-3" />
                                        {new Date(article.published_at).toLocaleDateString()}
                                    </div>
                                </TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => setEditingArticle(article)}
                                        >
                                            <Pencil className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="text-red-500 hover:text-red-600"
                                            onClick={() => setDeletingArticle(article)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                        {(!articles || articles.length === 0) && (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center h-24 text-muted-foreground">
                                    No articles found.
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
                        <DialogTitle>Add New Article</DialogTitle>
                    </DialogHeader>
                    <ArticleForm onSuccess={() => setIsAddOpen(false)} />
                </DialogContent>
            </Dialog>

            {/* Edit Dialog */}
            <Dialog open={!!editingArticle} onOpenChange={() => setEditingArticle(null)}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Edit Article</DialogTitle>
                    </DialogHeader>
                    {editingArticle && (
                        <ArticleForm
                            initialData={editingArticle}
                            onSuccess={() => setEditingArticle(null)}
                        />
                    )}
                </DialogContent>
            </Dialog>

            {/* Delete Dialog */}
            <DeleteDialog
                isOpen={!!deletingArticle}
                onClose={() => setDeletingArticle(null)}
                onConfirm={handleDelete}
                title="Delete Article"
                description={`Are you sure you want to delete "${deletingArticle?.title}"? This action cannot be undone.`}
            />
        </div>
    );
}
