import { ShieldCheck, Wallet, Zap } from "lucide-react";

export function WhyPartnerSection() {
    return (
        <section className="py-24 bg-[#0f1c2e] dark:bg-card text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-[#00c055] font-bold uppercase tracking-widest text-sm mb-4 block">
                        The Konexa Advantage
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Why Leading Utilities & Industries Choose Us
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        We don’t just supply equipment; we take full responsibility for the entire energy value chain, de-risking your operations and guaranteeing results.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#00c055]/50 transition-colors group">
                        <div className="w-14 h-14 bg-[#00c055]/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Wallet className="text-[#00c055] w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Fully Funded CapEx</h3>
                        <p className="text-gray-400 leading-relaxed">
                            We bring the capital. Our model includes 100% funding for infrastructure upgrades, metering, and renewable generation assets, removing the financial burden from our partners.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#00c055]/50 transition-colors group">
                        <div className="w-14 h-14 bg-[#00c055]/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <ShieldCheck className="text-[#00c055] w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">End-to-End Responsibility</h3>
                        <p className="text-gray-400 leading-relaxed">
                            We are accountable for every electron. From generation to the customer meter, we manage the entire distribution network, ensuring reliability and reducing losses.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[#00c055]/50 transition-colors group">
                        <div className="w-14 h-14 bg-[#00c055]/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Zap className="text-[#00c055] w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">Future-Proof Technology</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Our grid is smart by default. We deploy advanced SCADA, IoT sensors, and AI-driven load management to ensure your infrastructure is ready for the renewable future.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
