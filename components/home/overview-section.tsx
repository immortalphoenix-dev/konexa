"use client";

import { Zap, Users, Leaf } from "lucide-react";

const overviewItems = [
    {
        icon: Zap,
        title: "Reliable Energy Access",
        description: "24/7 power supply through integrated grid management and renewable energy sources.",
    },
    {
        icon: Users,
        title: "Community Empowerment",
        description: "Creating jobs and driving economic growth in underserved regions across Africa.",
    },
    {
        icon: Leaf,
        title: "Sustainable Solutions",
        description: "Reducing carbon emissions while delivering affordable and clean energy for all.",
    },
];

export function OverviewSection() {
    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    {overviewItems.map((item, index) => (
                        <div
                            key={index}
                            className="text-center p-8 rounded-xl bg-card border hover:shadow-lg transition-all dark:border-gray-800"
                        >
                            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mx-auto mb-6">
                                <item.icon className="text-green-600 dark:text-green-500 h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
