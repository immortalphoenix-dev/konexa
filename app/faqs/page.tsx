import { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Mail, Phone, MessageSquare } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "FAQs | Frequently Asked Questions about Konexa",
    description: "Get answers to common questions about our integrated utility model, services, and how we are transforming energy in Africa.",
};

export default function FAQsPage() {
    return (
        <>
            <SiteHeader />
            <main className="bg-white dark:bg-background min-h-screen">
                {/* Hero Section */}
                <section className="bg-[#0f172a] py-20 text-center">
                    <div className="container mx-auto px-4">
                        <span className="text-[#00c055] font-extrabold tracking-widest uppercase text-xs mb-4 block">
                            SUPPORT CENTRE
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
                            Everything you need to know about Konexa's integrated utility model, services, and investor relations.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-xl mx-auto relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <Input
                                placeholder="Search for answers..."
                                className="pl-12 h-14 rounded-full bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus-visible:ring-[#00c055]"
                            />
                        </div>
                    </div>
                </section>

                {/* FAQs Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4 max-w-3xl">

                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-[#0f1c2e] dark:text-white mb-6">General Information</h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>What is Konexa?</AccordionTrigger>
                                    <AccordionContent>
                                        Konexa is an integrated energy distribution company. We work with national utilities and governments to invest in, upgrade, and operate last-mile distribution networks, ensuring 24/7 reliable power for industrial and residential customers.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>Where does Konexa operate?</AccordionTrigger>
                                    <AccordionContent>
                                        Our primary operations are currently in Nigeria (Kaduna State), with active expansion plans into other West and East African markets by 2026.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Is Konexa a solar company?</AccordionTrigger>
                                    <AccordionContent>
                                        While we heavily utilize renewable energy (Solar PV, Hydro), we are technology-agnostic. We are a utility company that uses the best available generation mix—including grid power and battery storage—to guarantee reliability.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-[#0f1c2e] dark:text-white mb-6">For Customers</h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="cust-1">
                                    <AccordionTrigger>How do I become a customer?</AccordionTrigger>
                                    <AccordionContent>
                                        If your business or residence is within our concession areas (e.g., Kaduna Industrial Zones), you can apply directly through our customer portal or visit our local office.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="cust-2">
                                    <AccordionTrigger>What happens if the main grid goes down?</AccordionTrigger>
                                    <AccordionContent>
                                        That's the core of our value proposition. When the national grid fails, our battery storage and local generation assets automatically kick in, ensuring zero downtime for your operations.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="cust-3">
                                    <AccordionTrigger>How is billing handled?</AccordionTrigger>
                                    <AccordionContent>
                                        We use smart metering for all connections. You pay only for what you use, with transparent tariffs approved by the national regulator.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-[#0f1c2e] dark:text-white mb-6">Investors & Partners</h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="inv-1">
                                    <AccordionTrigger>Who funds Konexa?</AccordionTrigger>
                                    <AccordionContent>
                                        Konexa is backed by leading climate-focused investors, development finance institutions, and private equity firms committed to sustainable infrastructure in Africa.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="inv-2">
                                    <AccordionTrigger>How can we partner with you?</AccordionTrigger>
                                    <AccordionContent>
                                        We are always looking for EPC partners, technology providers, and project financiers. Please reach out via our contact page or email partnerships@konexa.com.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                    </div>
                </section>

                {/* Still have questions? */}
                <section className="py-16 bg-gray-50 dark:bg-background border-t dark:border-gray-800">
                    <div className="container mx-auto px-4 text-center max-w-2xl">
                        <h2 className="text-2xl font-bold text-[#0f1c2e] dark:text-white mb-6">Still have questions?</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white dark:bg-card p-6 rounded-xl shadow-sm border border-transparent dark:border-gray-800 hover:shadow-md transition-shadow">
                                <Mail className="mx-auto text-[#00c055] mb-4" size={24} />
                                <h3 className="font-bold mb-2 dark:text-white">Email Support</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Get a response within 24 hours.</p>
                                <Link href="mailto:support@konexa.com" className="text-[#1e3a8a] dark:text-blue-400 text-sm font-bold hover:underline">support@konexa.com</Link>
                            </div>
                            <div className="bg-white dark:bg-card p-6 rounded-xl shadow-sm border border-transparent dark:border-gray-800 hover:shadow-md transition-shadow">
                                <Phone className="mx-auto text-[#00c055] mb-4" size={24} />
                                <h3 className="font-bold mb-2 dark:text-white">Call Us</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Mon-Fri, 9am - 5pm WAT.</p>
                                <Link href="tel:+2348005663920" className="text-[#1e3a8a] dark:text-blue-400 text-sm font-bold hover:underline">+234 800 KONEXA</Link>
                            </div>
                            <div className="bg-white dark:bg-card p-6 rounded-xl shadow-sm border border-transparent dark:border-gray-800 hover:shadow-md transition-shadow">
                                <MessageSquare className="mx-auto text-[#00c055] mb-4" size={24} />
                                <h3 className="font-bold mb-2 dark:text-white">Live Chat</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Chat with our team instantly.</p>
                                <button className="text-[#1e3a8a] dark:text-blue-400 text-sm font-bold hover:underline">Start Chat</button>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <SiteFooter />
        </>
    );
}
