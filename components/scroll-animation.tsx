"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollAnimationProps {
    children: React.ReactNode;
    className?: string;
    animation?: "fade-in-up" | "fade-in" | "slide-in-right" | "slide-in-left";
    delay?: number; // delay in ms
}

export function ScrollAnimation({
    children,
    className,
    animation = "fade-in-up",
    delay = 0,
}: ScrollAnimationProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of element is visible
                rootMargin: "0px 0px -50px 0px", // Slightly offset to trigger before strictly in view
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const getAnimationClass = () => {
        switch (animation) {
            case "fade-in-up":
                return "translate-y-8 opacity-0";
            case "fade-in":
                return "opacity-0";
            case "slide-in-right":
                return "-translate-x-8 opacity-0";
            case "slide-in-left":
                return "translate-x-8 opacity-0";
            default:
                return "opacity-0";
        }
    };

    const getVisibleClass = () => {
        return "translate-y-0 translate-x-0 opacity-100";
    };

    return (
        <div
            ref={ref}
            className={cn(
                "transition-all duration-1000 ease-out",
                isVisible ? getVisibleClass() : getAnimationClass(),
                className
            )}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
