import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function TermsPage() {
    return (
        <>
            <SiteHeader />
            <main className="pt-24 pb-20 bg-white dark:bg-background min-h-screen">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#0f1c2e] dark:text-white">Terms of Service</h1>
                    <p className="text-gray-500 dark:text-gray-400 mb-10">Last Updated: January 2026</p>

                    <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                        <p className="mb-6">
                            Welcome to Konexa. By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-[#1e3a8a] dark:text-white">1. Use of Services</h2>
                        <p className="mb-4">
                            You may use our services/website for lawful purposes only. You agree not to use the website in any way that violates any applicable local, national, or international law or regulation.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-[#1e3a8a] dark:text-white">2. Intellectual Property</h2>
                        <p className="mb-4">
                            The content, features, and functionality of this website, including but not limited to text, graphics, logos, and images, are owned by Konexa and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-[#1e3a8a] dark:text-white">3. Disclaimer</h2>
                        <p className="mb-4">
                            Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied. Konexa does not warrant that the website will be uninterrupted or error-free.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-[#1e3a8a] dark:text-white">4. Limitation of Liability</h2>
                        <p className="mb-4">
                            In no event shall Konexa, its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the site.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-[#1e3a8a] dark:text-white">5. Changes to Terms</h2>
                        <p className="mb-4">
                            We reserve the right to modify or replace these terms at any time. We will provide notice of any significant changes by posting the new terms on this page.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-[#1e3a8a] dark:text-white">6. Contact Information</h2>
                        <p className="mb-4">
                            Questions about the Terms of Service should be sent to us at <a href="mailto:legal@konexa.com" className="text-[#00c055] hover:underline">legal@konexa.com</a>.
                        </p>
                    </div>
                </div>
            </main>
            <SiteFooter />
        </>
    );
}
