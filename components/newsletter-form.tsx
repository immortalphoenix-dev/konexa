'use client';

import { useState } from 'react';
import { ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { subscribeToNewsletter } from '@/app/actions';
import { cn } from '@/lib/utils';

export function NewsletterForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<{ text: string; success: boolean } | null>(null);

    async function handleSubmit(formData: FormData) {
        setIsLoading(true);
        setMessage(null);

        const result = await subscribeToNewsletter(null, formData);

        setIsLoading(false);
        setMessage({
            text: result.message,
            success: result.success
        });

        if (result.success) {
            const form = document.querySelector('form') as HTMLFormElement;
            form?.reset();
        }
    }

    return (
        <div>
            <h4 className="font-bold text-white mb-2 text-sm md:text-base">Subscribe to Newsletter</h4>

            {message && message.success ? (
                <div className="bg-green-500/10 border border-green-500/20 rounded-md p-3 flex items-center gap-2 text-green-400">
                    <CheckCircle2 size={18} />
                    <p className="text-xs font-medium">{message.text}</p>
                </div>
            ) : (
                <form action={handleSubmit} className="relative group flex items-center">
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email address"
                        className="w-full h-12 bg-white/5 border border-white/10 rounded-full pl-5 pr-14 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00c055] focus:bg-white/10 transition-all font-medium"
                    />
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={cn(
                            "absolute right-2 h-8 w-8 bg-[#00c055] hover:bg-[#00a046] text-white rounded-full flex items-center justify-center transition-all shadow-lg shadow-green-900/20",
                            isLoading && "opacity-70 cursor-not-allowed"
                        )}
                        aria-label="Subscribe"
                    >
                        {isLoading ? <Loader2 size={14} className="animate-spin" /> : <ArrowRight size={14} className="ml-0.5" />}
                    </button>
                </form>
            )}

            {message && !message.success && (
                <p className="text-red-400 text-xs mt-2">{message.text}</p>
            )}
        </div>
    );
}
