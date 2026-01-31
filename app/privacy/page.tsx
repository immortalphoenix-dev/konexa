import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function PrivacyPage() {
    return (
        <>
            <SiteHeader />
            <main className="pt-24 pb-20 bg-white dark:bg-background min-h-screen">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#0f1c2e] dark:text-white">Privacy Policy</h1>
                    <p className="text-gray-500 dark:text-gray-400 mb-10">Last Updated: January 2026</p>

                    <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                        <p className="mb-6">
                            At Konexa, we take your privacy seriously. This Privacy Policy describes how multiple Konexa entities collect, use, and share your personal information when you visit our website or use our services.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-[#1e3a8a] dark:text-white">1. Information We Collect</h2>
                        <p className="mb-4">
                            We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or sign up for our newsletter. This may include your name, email address, phone number, and company details.
                        </p>
                        <p className="mb-4">
                            We also automatically collect certain information about your device and how you interact with our website, including your IP address, browser type, and operating system.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-[#1e3a8a] dark:text-white">2. How We Use Your Information</h2>
                        <p className="mb-4">
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>Provide, maintain, and improve our services.</li>
                            <li>Respond to your comments, questions, and requests.</li>
                            <li>Send you technical notices, updates, security alerts, and support messages.</li>
                            <li>Communicate with you about products, services, offers, and events.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-[#1e3a8a] dark:text-white">3. Information Sharing</h2>
                        <p className="mb-4">
                            We do not share your personal information with third parties except as described in this policy. We may share your information with third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-[#1e3a8a] dark:text-white">4. Data Security</h2>
                        <p className="mb-4">
                            We implement appropriate technical and organizational measures to protect specific personal data against unauthorized or unlawful processing and against accidental loss, destruction, damage, alteration, or disclosure.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-[#1e3a8a] dark:text-white">5. Contact Us</h2>
                        <p className="mb-4">
                            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@konexa.com" className="text-[#00c055] hover:underline">privacy@konexa.com</a>.
                        </p>
                    </div>
                </div>
            </main>
            <SiteFooter />
        </>
    );
}
