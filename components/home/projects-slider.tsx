"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/types/database";

interface ProjectsSliderProps {
    projects: Project[];
}

export function ProjectsSlider({ projects }: ProjectsSliderProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onSelect = useCallback((emblaApi: any) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect(emblaApi);
        emblaApi.on("reInit", onSelect);
        emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect]);

    if (!projects || projects.length === 0) return null;

    return (
        <section className="py-12 md:py-24 bg-[#0a192f] text-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="inline-block px-3 py-1 text-xs font-bold text-white bg-green-600 rounded-md uppercase tracking-wider mb-4">
                            CASE STUDIES
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white italic">
                            Driving Real Impact
                        </h2>
                    </div>
                    <div className="flex gap-4">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={scrollPrev}
                            disabled={prevBtnDisabled}
                            className="rounded-full border-white/20 hover:bg-white/10 text-white bg-transparent h-12 w-12"
                        >
                            <ArrowLeft size={20} />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={scrollNext}
                            disabled={nextBtnDisabled}
                            className="rounded-full border-white/20 hover:bg-white/10 text-white bg-transparent h-12 w-12"
                        >
                            <ArrowRight size={20} />
                        </Button>
                    </div>
                </div>

                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {projects.map((project) => (
                            <div key={project.id} className="flex-[0_0_100%] min-w-0 pl-4 lg:pl-0">
                                <div className="grid lg:grid-cols-2 gap-12 items-center">
                                    {/* Content */}
                                    <div className="lg:pr-12">
                                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                                            {project.title}
                                        </h3>
                                        <p className="text-lg text-gray-300 leading-relaxed mb-8 line-clamp-4">
                                            {project.description}
                                        </p>

                                        <div className="grid grid-cols-2 gap-6 mb-10">
                                            {Object.entries(project.stats as any || {}).map(([key, value], i) => (
                                                <div key={key}>
                                                    <div className="text-[10px] text-green-500 font-bold uppercase tracking-widest mb-1">
                                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                                    </div>
                                                    <div className="text-2xl font-black text-white">
                                                        {value as string}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <Button asChild className="bg-green-600 hover:bg-green-700 text-white border-none rounded-xl h-12 px-8">
                                            <Link href={`/projects/${project.slug}`}>
                                                Read Case Study
                                                <ArrowRight className="ml-2" size={18} />
                                            </Link>
                                        </Button>
                                    </div>

                                    {/* Image */}
                                    <div className="relative">
                                        <div className="aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
                                            <Image
                                                src={project.image_url || "/hero-solar.png"}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                            />
                                            {/* Decorative Element */}
                                            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-green-500/20 rounded-full blur-3xl" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
