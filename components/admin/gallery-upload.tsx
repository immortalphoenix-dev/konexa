"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Button as FormButton } from "@/components/ui/button";
import { Loader2, Upload, X, ImageIcon, Plus } from "lucide-react";
import { uploadImage } from "@/lib/actions/admin";
import { toast } from "sonner";
import Image from "next/image";

interface GalleryUploadProps {
    value: string[];
    onChange: (urls: string[]) => void;
    label: string;
}

export function GalleryUpload({ value, onChange, label }: GalleryUploadProps) {
    const [isUploading, setIsUploading] = useState(false);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        if (files.length === 0) return;

        setIsUploading(true);
        try {
            const uploadPromises = files.map(async (file) => {
                if (!file.type.startsWith("image/")) {
                    throw new Error(`${file.name} is not an image`);
                }
                if (file.size > 5 * 1024 * 1024) {
                    throw new Error(`${file.name} is too large (max 5MB)`);
                }

                const formData = new FormData();
                formData.append("file", file);
                const result = await uploadImage(formData);
                return result.url;
            });

            const newUrls = await Promise.all(uploadPromises);
            onChange([...value, ...newUrls]);
            toast.success("Images uploaded successfully");
        } catch (error: any) {
            console.error("Upload error:", error);
            toast.error(error.message || "Failed to upload images");
        } finally {
            setIsUploading(false);
            e.target.value = ""; // Reset input
        }
    };

    const removeImage = (index: number) => {
        const newValue = [...value];
        newValue.splice(index, 1);
        onChange(newValue);
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <label className="text-sm font-medium leading-none">
                    {label}
                </label>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {value.map((url, index) => (
                    <div key={url + index} className="relative group aspect-square rounded-xl overflow-hidden border bg-muted shadow-sm hover:shadow-md transition-all">
                        <Image
                            src={url}
                            alt={`Gallery image ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                        <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 shadow-lg"
                        >
                            <X className="h-3 w-3" />
                        </button>
                    </div>
                ))}

                <label className="flex flex-col items-center justify-center aspect-square rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all cursor-pointer group">
                    {isUploading ? (
                        <Loader2 className="h-6 w-6 animate-spin text-[#00c055]" />
                    ) : (
                        <>
                            <div className="p-2 rounded-full bg-white dark:bg-gray-800 border group-hover:scale-110 transition-transform shadow-sm">
                                <Plus className="h-5 w-5 text-[#00c055]" />
                            </div>
                            <span className="mt-2 text-xs font-medium text-gray-500">Add More</span>
                        </>
                    )}
                    <input
                        type="file"
                        className="hidden"
                        multiple
                        accept="image/*"
                        onChange={handleFileChange}
                        disabled={isUploading}
                    />
                </label>
            </div>
            {value.length === 0 && !isUploading && (
                <p className="text-xs text-center text-gray-400 py-4 italic bg-gray-50/30 dark:bg-gray-900/30 rounded-xl border border-dashed border-gray-100 dark:border-gray-800">
                    No gallery images added yet. Click above to showcase your story.
                </p>
            )}
        </div>
    );
}
