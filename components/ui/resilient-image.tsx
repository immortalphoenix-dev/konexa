"use client";

import { useState } from "react";
import NextImage, { ImageProps } from "next/image";
import { Image as ImageIcon } from "lucide-react";

interface ResilientImageProps extends Omit<ImageProps, "onError" | "src"> {
    src?: any;
    containerClassName?: string;
}

export function ResilientImage({
    src,
    alt,
    fill,
    className,
    containerClassName,
    ...props
}: ResilientImageProps) {
    const [error, setError] = useState(false);

    if (error || !src) {
        return (
            <div className={`flex flex-col items-center justify-center bg-[#0f1c2e] text-white/10 gap-2 ${fill ? 'absolute inset-0' : ''} ${containerClassName}`}>
                <ImageIcon size={40} />
            </div>
        );
    }

    return (
        <NextImage
            {...props}
            src={src}
            alt={alt}
            fill={fill}
            className={`object-cover ${className}`}
            onError={() => setError(true)}
        />
    );
}
