"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { saveArticle } from "@/lib/actions/admin";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const articleSchema = z.object({
    title: z.string().min(5, "Title must be at least 5 characters"),
    slug: z.string().min(5, "Slug must be at least 5 characters"),
    excerpt: z.string().min(10, "Excerpt must be at least 10 characters"),
    content: z.string().min(20, "Content must be at least 20 characters"),
    category: z.string().min(1, "Category is required"),
    author: z.string().min(2, "Author is required"),
    image_url: z.string().url("Must be a valid URL").optional().or(z.literal("")),
});

type ArticleFormValues = z.infer<typeof articleSchema>;

interface ArticleFormProps {
    initialData?: any;
    onSuccess: () => void;
}

export function ArticleForm({ initialData, onSuccess }: ArticleFormProps) {
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<ArticleFormValues>({
        resolver: zodResolver(articleSchema),
        defaultValues: initialData || {
            title: "",
            slug: "",
            excerpt: "",
            content: "",
            category: "Company News",
            author: "Konexa Team",
            image_url: "",
        },
    });

    const onSubmit = async (values: ArticleFormValues) => {
        try {
            setIsLoading(true);
            await saveArticle(values, initialData?.id);
            toast.success(initialData ? "Article updated" : "Article created");
            onSuccess();
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter article title" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="slug"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Slug</FormLabel>
                            <FormControl>
                                <Input placeholder="article-url-slug" {...field} />
                            </FormControl>
                            <FormDescription>The URL path for the article.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Category</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a category" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Company News">Company News</SelectItem>
                                        <SelectItem value="Industry Insights">Industry Insights</SelectItem>
                                        <SelectItem value="Partnerships">Partnerships</SelectItem>
                                        <SelectItem value="Sustainability">Sustainability</SelectItem>
                                        <SelectItem value="Leadership">Leadership</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="author"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Author</FormLabel>
                                <FormControl>
                                    <Input placeholder="Author name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="image_url"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Image URL</FormLabel>
                            <FormControl>
                                <Input placeholder="https://images.unsplash.com/..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="excerpt"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Excerpt</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Short summary of the article" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Content</FormLabel>
                            <FormControl>
                                <Textarea className="min-h-[200px]" placeholder="Full article content (supports markdown)" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex justify-end pt-4">
                    <Button type="submit" disabled={isLoading}>
                        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {initialData ? "Update Article" : "Create Article"}
                    </Button>
                </div>
            </form>
        </Form>
    );
}
