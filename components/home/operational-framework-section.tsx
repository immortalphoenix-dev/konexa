"use client";

import { Handshake, Cpu, Building2, TrendingUp } from "lucide-react";

export function OperationalFrameworkSection() {
    const steps = [
        {
            number: "01",
            title: "Partnerships",
            description:
                "Collaborating with national governments and local utilities to secure long-term concessions.",
            icon: Handshake,
            color: "blue",
        },
        {
            number: "02",
            title: "Technology",
            description:
                "Deploying advanced IoT sensors, smart meters, and energy management software.",
            icon: Cpu,
            color: "blue",
        },
        {
            number: "03",
            title: "Infrastructure",
            description:
                "Developing utility-scale solar farms and rehabilitating distribution networks.",
            icon: Building2,
            color: "blue",
        },
        {
            number: "04",
            title: "Impact",
            description:
                "Ensuring 24/7 reliability, lowering costs, and enabling community electrification.",
            icon: TrendingUp,
            color: "green",
        },
    ];

    return (
        <section className="py-12 md:py-20 bg-white dark:bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] dark:text-white mb-4">
                        Our Operational Framework
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A systematic 4-step process to transform energy landscapes.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative pt-12">
                            {/* Numbered Circle - positioned absolutely to overlap card */}
                            <div className="flex justify-center mb-[-40px] relative z-10">
                                <div
                                    className={`w-20 h-20 rounded-full ${step.color === "green" ? "bg-green-600" : "bg-[#1e3a8a] dark:bg-blue-700"
                                        } text-white flex items-center justify-center text-2xl font-bold shadow-lg ring-4 ring-white dark:ring-gray-900`}
                                >
                                    {step.number}
                                </div>
                            </div>

                            {/* Card containing title, description, and icon */}
                            <div className="bg-gray-50 dark:bg-card rounded-xl pt-14 pb-8 px-6 text-center border border-transparent dark:border-gray-800">
                                {/* Title */}
                                <h3 className="text-lg font-bold mb-3 text-[#1e3a8a] dark:text-white">
                                    {step.title}
                                </h3>
                                {/* Description */}
                                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                                    {step.description}
                                </p>

                                {/* Icon at bottom of card */}
                                <div className="flex justify-center">
                                    <step.icon className="w-8 h-8 text-gray-300" strokeWidth={1.5} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
