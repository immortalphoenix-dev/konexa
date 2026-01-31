
interface StatsSectionProps {
    projectCount?: number;
}

export function StatsSection({ projectCount = 12 }: StatsSectionProps) {
    const stats = [
        { value: "15+", label: "Years Experience" },
        { value: "500k", label: "Homes Powered" },
        { value: "24/7", label: "Reliable Supply" },
        { value: projectCount.toString(), label: "Active Projects" }
    ];

    return (
        <section className="py-16 bg-[#3b4252] dark:bg-muted text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="text-4xl md:text-5xl font-bold text-[#4ade80] mb-2">{stat.value}</div>
                            <div className="text-xs md:text-sm text-gray-400 font-bold uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
