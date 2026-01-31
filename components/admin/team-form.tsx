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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { saveTeamMember } from "@/lib/actions/admin";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { ImageUpload } from "./image-upload";

const teamSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    role: z.string().min(2, "Role is required"),
    title: z.string().optional(),
    description: z.string().optional(),
    category: z.enum(["executive", "management"]),
    order_index: z.coerce.number().default(0),
    image_url: z.string().url("Must be a valid URL").optional().or(z.literal("")),
});

type TeamFormValues = z.infer<typeof teamSchema>;

interface TeamFormProps {
    initialData?: any;
    onSuccess: () => void;
}

export function TeamForm({ initialData, onSuccess }: TeamFormProps) {
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<TeamFormValues>({
        resolver: zodResolver(teamSchema),
        defaultValues: {
            name: initialData?.name ?? "",
            role: initialData?.role ?? "",
            title: initialData?.title ?? "",
            description: initialData?.description ?? "",
            category: initialData?.category ?? "management",
            order_index: initialData?.order_index ?? 0,
            image_url: initialData?.image_url ?? "",
        },
    });

    const onSubmit = async (values: TeamFormValues) => {
        try {
            setIsLoading(true);
            await saveTeamMember(values, initialData?.id);
            toast.success(initialData ? "Member updated" : "Member created");
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
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Full name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Role (Display)</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. CEO" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Full Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. Chief Executive Officer" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
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
                                            <SelectValue placeholder="Select category" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="executive">Executive</SelectItem>
                                        <SelectItem value="management">Management</SelectItem>
                                    </SelectContent>
                                </Select>
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
                    name="image_url"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <ImageUpload
                                    label="Profile Photo"
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description / Bio</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Professional background..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex justify-end pt-4">
                    <Button type="submit" disabled={isLoading}>
                        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {initialData ? "Update Member" : "Create Member"}
                    </Button>
                </div>
            </form>
        </Form>
    );
}
