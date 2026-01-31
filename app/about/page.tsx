import { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Check, Leaf, Lightbulb, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Globe, Zap } from "lucide-react";

export const metadata: Metadata = {
    title: "About Us",
};

export default function AboutPage() {
    return (
        <>
            <SiteHeader />
            <main>
                {/* Header */}
                <section className="pt-24 pb-12 px-4 text-center bg-background">
                    <div className="container mx-auto max-w-4xl">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold mb-4 tracking-wide uppercase">
                            Our Mission
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                            Transforming Energy Systems <br />
                            <span className="text-green-600">Across Africa</span>
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                            Konexa is an integrated energy company focused on transforming power distribution across Africa through strategic partnerships, innovative technology, and sustainable infrastructure.
                        </p>
                    </div>
                </section>

                {/* Leadership Section */}
                <section className="py-16 px-4 bg-background">
                    <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-auto md:h-[500px]">
                            <Image
                                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                                alt="Energy Infrasctructure"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-6 right-6 bg-green-600 text-white p-4 rounded-xl shadow-lg">
                                <div className="text-3xl font-bold">30+</div>
                                <div className="text-sm font-medium uppercase">Years Experience</div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-foreground/90 leading-tight">
                                Decades of Investment and Infrastructure Leadership
                            </h2>
                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                Our leadership team brings over 30 years of combined experience in energy investments and infrastructure development. We understand the complexities of the African energy landscape and are uniquely positioned to navigate them through integrated utility models.
                            </p>

                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="bg-green-100 p-2 rounded-full h-fit">
                                        <Check className="text-green-600 h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Sustainable Innovation</h3>
                                        <p className="text-sm text-muted-foreground">Pioneering new grid-interconnection models for industrial zones across emerging markets.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-green-100 p-2 rounded-full h-fit">
                                        <Check className="text-green-600 h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Reliable Delivery</h3>
                                        <p className="text-sm text-muted-foreground">Ensuring 24/7 uptime for critical manufacturing, healthcare, and community services.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-green-100 p-2 rounded-full h-fit">
                                        <Check className="text-green-600 h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Impact Driven</h3>
                                        <p className="text-sm text-muted-foreground">Generating jobs and driving local economic growth in key regions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Values */}
                <section className="py-20 px-4 bg-muted/30">
                    <div className="container mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                At Konexa, our values define our approach to every project, partnership, and community we serve. We are driven by a commitment to excellence and long-term impact.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-background p-8 rounded-2xl border shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                                    <Leaf className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Sustainability</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    We prioritize renewable energy sources and sustainable infrastructure to ensure long-term environmental and economic health for the regions we operate in.
                                </p>
                            </div>
                            <div className="bg-background p-8 rounded-2xl border shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                                    <Lightbulb className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Through advanced technology and novel business models, we overcome traditional barriers to energy access and reliability in Africa.
                                </p>
                            </div>
                            <div className="bg-background p-8 rounded-2xl border shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-orange-600">
                                    <Users className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Community</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our success is measured by the growth of the communities we serve. We work to create jobs and empower local stakeholders at every stage.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Journey Timeline */}
                <section className="py-20 px-4 bg-background overflow-hidden">
                    <div className="container mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
                            <p className="text-muted-foreground">Milestones in our mission to revolutionize Africa's energy landscape.</p>
                        </div>

                        <div className="relative max-w-4xl mx-auto">
                            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2"></div>

                            {/* 2018 */}
                            <div className="relative mb-12 w-full flex items-center justify-between">
                                <div className="order-1 w-5/12 text-right pr-8">
                                    <h3 className="text-xl font-bold text-green-600 mb-1">2018</h3>
                                    <h4 className="font-bold mb-2">Foundation & Vision</h4>
                                    <p className="text-sm text-muted-foreground">Konexa established with the goal of creating Africa's first truly integrated private utility company.</p>
                                </div>
                                <div className="order-1 w-5/12"></div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white z-10 font-bold text-xs ring-4 ring-background">
                                    <Check className="w-4 h-4" />
                                </div>
                            </div>

                            {/* 2020 */}
                            <div className="relative mb-12 w-full flex items-center justify-between">
                                <div className="order-1 w-5/12"></div>
                                <div className="order-1 w-5/12 text-left pl-8">
                                    <h3 className="text-xl font-bold text-green-600 mb-1">2020</h3>
                                    <h4 className="font-bold mb-2">Major Concessions Secured</h4>
                                    <p className="text-sm text-muted-foreground">Secured landmark agreements with government bodies to overhaul sub-distribution networks in key industrial zones.</p>
                                </div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white z-10 font-bold text-xs ring-4 ring-background">
                                    <Check className="w-4 h-4" />
                                </div>
                            </div>

                            {/* 2023 */}
                            <div className="relative mb-12 w-full flex items-center justify-between">
                                <div className="order-1 w-5/12 text-right pr-8">
                                    <h3 className="text-xl font-bold text-green-600 mb-1">2023</h3>
                                    <h4 className="font-bold mb-2">First Integrated Microgrid</h4>
                                    <p className="text-sm text-muted-foreground">Successful commissioning of our first industrial microgrid, combining solar storage and grid backup.</p>
                                </div>
                                <div className="order-1 w-5/12"></div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white z-10 font-bold text-xs ring-4 ring-background">
                                    <Check className="w-4 h-4" />
                                </div>
                            </div>

                            {/* 2024 */}
                            <div className="relative mb-12 w-full flex items-center justify-between">
                                <div className="order-1 w-5/12"></div>
                                <div className="order-1 w-5/12 text-left pl-8">
                                    <h3 className="text-xl font-bold text-green-600 mb-1">2024</h3>
                                    <h4 className="font-bold mb-2">Scaling Across Borders</h4>
                                    <p className="text-sm text-muted-foreground">Expansion of our distribution model into new West and East African markets, serving over 150,000 customers.</p>
                                </div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white z-10 font-bold text-xs ring-4 ring-background animate-pulse">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Strategic Partnerships */}
                <section className="py-20 px-4 bg-white">
                    <div className="container mx-auto grid lg:grid-cols-2 gap-20 items-start max-w-6xl">
                        <div className="flex flex-col">
                            <h2 className="text-[34px] font-bold mb-4 text-[#1e3a8a] leading-tight">Strategic Partnerships</h2>
                            <p className="text-[#5a5a6e] mb-12 leading-[1.65] text-[14px]">
                                Konexa operates at the intersection of public policy and private investment. We don't just build infrastructure; we build relationships that last.
                            </p>
                            <div className="space-y-8">
                                <div className="bg-[#f8f9fa] px-5 py-5 rounded-lg">
                                    <h3 className="font-bold text-[14px] text-[#1e3a8a] mb-2.5">National Utilities</h3>
                                    <p className="text-[12.5px] text-[#5a5a6e] leading-[1.65]">We work alongside national grid operators to improve distribution efficiency and reduce transmission losses through "last-mile" innovation.</p>
                                </div>
                                <div className="bg-[#f8f9fa] px-5 py-5 rounded-lg">
                                    <h3 className="font-bold text-[14px] text-[#1e3a8a] mb-2.5">Government & Regulators</h3>
                                    <p className="text-[12.5px] text-[#5a5a6e] leading-[1.65]">We collaborate with regulatory bodies to develop policy frameworks that encourage private sector participation in the energy sector.</p>
                                </div>
                                <div className="bg-[#f8f9fa] px-5 py-5 rounded-lg">
                                    <h3 className="font-bold text-[14px] text-[#1e3a8a] mb-2.5">Development Finance Institutions</h3>
                                    <p className="text-[12.5px] text-[#5a5a6e] leading-[1.65]">Our projects are backed by leading global financiers who prioritize ESG impacts and sustainable infrastructure development.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[520px] w-full rounded-[28px] overflow-hidden">
                            <Image
                                src="/industrial_power_plant_1769596269064.png"
                                alt="Strategic Partnerships"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Feature Cards + CTA */}
                <section className="py-16 px-4 bg-white">
                    <div className="container mx-auto max-w-6xl">
                        {/* Feature Cards */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                            <div className="bg-[#f8f9fa] p-6 rounded-2xl text-center">
                                <div className="w-12 h-12 mx-auto mb-4 bg-[#1e3a8a]/10 rounded-full flex items-center justify-center">
                                    <Globe className="w-6 h-6 text-[#1e3a8a]" strokeWidth={2} />
                                </div>
                                <h3 className="font-bold text-[15px] text-[#1a1a2e] mb-1">Africa-Centric</h3>
                                <p className="text-[11px] text-[#5a5a6e] uppercase tracking-wide font-medium">LOCAL IMPACT</p>
                            </div>
                            <div className="bg-[#f8f9fa] p-6 rounded-2xl text-center">
                                <div className="w-12 h-12 mx-auto mb-4 bg-[#00c853]/10 rounded-full flex items-center justify-center">
                                    <Leaf className="w-6 h-6 text-[#00c853]" strokeWidth={2} />
                                </div>
                                <h3 className="font-bold text-[15px] text-[#1a1a2e] mb-1">100% Clean</h3>
                                <p className="text-[11px] text-[#5a5a6e] uppercase tracking-wide font-medium">RENEWABLE GOAL</p>
                            </div>
                            <div className="bg-[#f8f9fa] p-6 rounded-2xl text-center">
                                <div className="w-12 h-12 mx-auto mb-4 bg-[#1e3a8a]/10 rounded-full flex items-center justify-center">
                                    <Zap className="w-6 h-6 text-[#1e3a8a]" strokeWidth={2} />
                                </div>
                                <h3 className="font-bold text-[15px] text-[#1a1a2e] mb-1">Strategic</h3>
                                <p className="text-[11px] text-[#5a5a6e] uppercase tracking-wide font-medium">PUBLIC-PRIVATE</p>
                            </div>
                            <div className="bg-[#f8f9fa] p-6 rounded-2xl text-center">
                                <div className="w-12 h-12 mx-auto mb-4 bg-[#00c853]/10 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-[#00c853]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-[15px] text-[#1a1a2e] mb-1">Institutional</h3>
                                <p className="text-[11px] text-[#5a5a6e] uppercase tracking-wide font-medium">GLOBAL STANDARDS</p>
                            </div>
                        </div>

                        {/* CTA Box */}
                        <div className="relative bg-[#2c5aa0] rounded-[32px] overflow-hidden px-12 py-16">
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0 opacity-15">
                                <Image
                                    src="/power_grid_field_1769594612745.png"
                                    alt="Background"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 max-w-2xl">
                                <h2 className="text-[38px] md:text-[42px] font-bold mb-5 text-white leading-[1.2]">
                                    Partner with us to power the future
                                </h2>
                                <p className="text-white/90 mb-8 leading-[1.65] text-[14.5px] max-w-xl">
                                    We are looking for long-term partners, investors, and clients who share our vision of a modern, efficient, and sustainable energy grid for Africa. Together, we can transform the landscape.
                                </p>
                                <div className="flex gap-4">
                                    <Button size="lg" className="bg-[#00c853] hover:bg-[#00b84a] text-white font-semibold px-8 py-6 text-[15px] rounded-full shadow-lg">
                                        Get in Touch
                                    </Button>
                                    <Button variant="outline" size="lg" className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-6 text-[15px] rounded-full">
                                        Our Portfolio
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <SiteFooter />
        </>
    );
}
