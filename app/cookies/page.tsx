import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function CookiesPage() {
    return (
        <>
            <SiteHeader />
            <main className="pt-24 pb-20 bg-white dark:bg-background min-h-screen">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#0f1c2e] dark:text-white">Cookies Policy</h1>
                    <p className="text-gray-500 dark:text-gray-400 mb-10">Last Updated: January 2026</p>

                    <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                        <p className="mb-6">
                            This Cookies Policy explains what cookies are, how we use them, and your choices regarding cookies when you visit the Konexa website.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-[#1e3a8a] dark:text-white">1. What Are Cookies?</h2>
                        <p className="mb-4">
                            Cookies are small text files that are sent to your web browser by a website you visit. A cookie file is stored in your web browser and allows the service or a third-party to recognize you and make your next visit easier and the service more useful to you.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-[#1e3a8a] dark:text-white">2. How Konexa Uses Cookies</h2>
                        <p className="mb-4">
                            When you use and access our service, we may place a number of cookies files in your web browser. We use cookies for the following purposes:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>To enable certain functions of the service.</li>
                            <li>To provide analytics and understand how our site is used.</li>
                            <li>To store your preferences (such as light/dark mode).</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-[#1e3a8a] dark:text-white">3. Types of Cookies We Use</h2>
                        <p className="mb-4">
                            <strong>Essential Cookies:</strong> These are necessary for the website to function properly. Without them, you would not be able to navigate between pages or use certain features.
                        </p>
                        <p className="mb-4">
                            <strong>Analytics Cookies:</strong> We use these to collect information about how you interact with our website, which helps us improve our content and user experience.
                        </p>

                        <h2 className="text-2xl font-bold mt-10 mb-4 text-[#1e3a8a] dark:text-white">4. Your Choices Regarding Cookies</h2>
                        <p className="mb-4">
                            If you would like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer.
                        </p>
                    </div>
                </div>
            </main>
            <SiteFooter />
        </>
    );
}
