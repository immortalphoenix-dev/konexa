"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { saveService } from "@/lib/actions/admin";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const serviceSchema = z.object({
    title: z.string().min(2, "Title must be at least 2 characters"),
    subtitle: z.string().optional(),
    slug: z.string().min(2, "Slug is required"),
    description: z.string().min(10, "Description is required"),
    icon: z.string().min(1, "Icon name is required"),
    order_index: z.coerce.number().default(0),
    features: z.any().optional(), // Expected to be array of strings
    stats: z.any().optional(), // Expected to be array of {label, value}
});

type ServiceFormValues = z.infer<typeof serviceSchema>;

interface ServiceFormProps {
    initialData?: any;
    onSuccess: () => void;
}

export function ServiceForm({ initialData, onSuccess }: ServiceFormProps) {
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<ServiceFormValues>({
        resolver: zodResolver(serviceSchema),
        defaultValues: {
            title: initialData?.title ?? "",
            subtitle: initialData?.subtitle ?? "",
            slug: initialData?.slug ?? "",
            description: initialData?.description ?? "",
            icon: initialData?.icon ?? "Zap",
            order_index: initialData?.order_index ?? 0,
            features: initialData?.features ?? [],
            stats: initialData?.stats ?? [],
        },
    });

    const onSubmit = async (values: ServiceFormValues) => {
        try {
            setIsLoading(true);
            await saveService(values, initialData?.id);
            toast.success(initialData ? "Service updated" : "Service created");
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
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. Smart Metering" {...field} />
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
                                    <Input placeholder="smart-metering" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="subtitle"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Subtitle</FormLabel>
                            <FormControl>
                                <Input placeholder="Brief catchy subtitle" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="icon"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Icon (Lucide name)</FormLabel>
                                <FormControl>
                                    <Input placeholder="Zap, ShieldCheck, etc." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="order_index"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Order Index</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea className="min-h-[100px]" placeholder="Service details..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex justify-end pt-4">
                    <Button type="submit" disabled={isLoading}>
                        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {initialData ? "Update Service" : "Create Service"}
                    </Button>
                </div>
            </form>
        </Form>
    );
}
