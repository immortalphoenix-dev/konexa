import React from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Project } from "@/lib/types/database";
import { Button } from "@/components/ui/button";
import { ResilientImage } from "@/components/ui/resilient-image";

interface ProjectsGridProps {
    projects: Project[];
    currentPage: number;
    totalPages: number;
}

export function ProjectsGrid({ projects, currentPage, totalPages }: ProjectsGridProps) {
    if (projects.length === 0 && currentPage === 1) return null;

    return (
        <section className="container mx-auto px-4 mb-24" id="projects-grid-start">
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0f1c2e] dark:text-white">Active Projects</h2>
                    <p className="text-gray-500 mt-2 max-w-xl">Our expanding portfolio of energy transformations and sustainable infrastructure across the continent.</p>
                </div>

                {totalPages > 1 && (
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500 mr-2">
                            Page <span className="font-bold text-[#0f1c2e] dark:text-white">{currentPage}</span> of {totalPages}
                        </span>
                        <div className="flex gap-1">
                            <Button
                                variant="outline"
                                size="icon"
                                asChild
                                disabled={currentPage === 1}
                                className={`h-10 w-10 border-gray-200 dark:border-gray-800 ${currentPage === 1 ? 'pointer-events-none opacity-50' : ''}`}
                            >
                                <Link href={`/projects?page=${Math.max(1, currentPage - 1)}`}>
                                    <ChevronLeft size={18} />
                                </Link>
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                asChild
                                disabled={currentPage === totalPages}
                                className={`h-10 w-10 border-gray-200 dark:border-gray-800 ${currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}`}
                            >
                                <Link href={`/projects?page=${Math.min(totalPages, currentPage + 1)}`}>
                                    <ChevronRight size={18} />
                                </Link>
                            </Button>
                        </div>
                    </div>
                )}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => {
                    const stats = project.stats as Record<string, string> || {};
                    return (
                        <div
                            key={project.id}
                            className="group bg-white dark:bg-card rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-500 flex flex-col"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <ResilientImage
                                    src={project.image_url}
                                    alt={project.title}
                                    fill
                                    priority
                                />
                                <div className="absolute top-4 left-4 bg-white/95 dark:bg-black/90 backdrop-blur-md text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                                    {project.status?.toUpperCase()}
                                </div>
                                <div className="absolute bottom-4 right-4 bg-white/95 dark:bg-black/90 backdrop-blur-md text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                                    {project.location}
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-[#0f1c2e] dark:text-white mb-3 group-hover:text-[#00c055] transition-colors line-clamp-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-3 mb-8 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mt-auto">
                                    {Object.entries(stats).length > 0 && (
                                        <div className="grid grid-cols-2 gap-4 mb-8 pt-6 border-t border-gray-50 dark:border-gray-800">
                                            {Object.entries(stats).slice(0, 2).map(([key, value]) => (
                                                <div key={key}>
                                                    <div className="text-[10px] text-gray-400 font-bold uppercase mb-1">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                                                    <div className="text-lg font-black text-[#1e3a8a] dark:text-blue-400">{value}</div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    <Link
                                        href={`/projects/${project.slug}`}
                                        className="inline-flex items-center text-sm font-bold text-[#0f1c2e] dark:text-gray-300 group/link"
                                    >
                                        View Case Study
                                        <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform text-[#00c055]" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Bottom Pagination - Synced with News hub style */}
            {totalPages > 1 && (
                <div className="mt-24 flex justify-center items-center gap-4">
                    <Button
                        variant="ghost"
                        asChild
                        disabled={currentPage === 1}
                        className={`font-bold text-gray-500 hover:text-[#0f1c2e] ${currentPage === 1 ? 'pointer-events-none opacity-50' : ''}`}
                    >
                        <Link href={`/projects?page=${Math.max(1, currentPage - 1)}`}>
                            <ChevronLeft size={20} className="mr-2" /> Previous
                        </Link>
                    </Button>

                    <div className="flex gap-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                            <Link
                                key={pageNum}
                                href={`/projects?page=${pageNum}`}
                                className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold transition-all ${currentPage === pageNum
                                        ? 'bg-[#0f1c2e] text-white shadow-lg'
                                        : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'
                                    }`}
                            >
                                {pageNum}
                            </Link>
                        ))}
                    </div>

                    <Button
                        variant="ghost"
                        asChild
                        disabled={currentPage === totalPages}
                        className={`font-bold text-gray-500 hover:text-[#0f1c2e] ${currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}`}
                    >
                        <Link href={`/projects?page=${Math.min(totalPages, currentPage + 1)}`}>
                            Next <ChevronRight size={20} className="ml-2" />
                        </Link>
                    </Button>
                </div>
            )}
        </section>
    );
}
