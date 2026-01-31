"use client";

import { createClient } from "@/lib/supabase/client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { InteractiveShapes } from "@/components/login/interactive-shapes";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const supabase = createClient();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            router.push("/admin");
            router.refresh();
        }
    };

    return (
        <div className="flex min-h-screen bg-background">
            {/* Left Side: Interactive Animation */}
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[#0a192f]">
                <InteractiveShapes />
                <div className="absolute inset-0 flex flex-col items-start justify-between p-12 z-10 pointer-events-none">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-white/60 hover:text-[#00c055] transition-colors pointer-events-auto"
                    >
                        <ArrowLeft size={20} />
                        <span>Back to site</span>
                    </Link>

                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                            Pioneering the <span className="text-[#00c055]">Energy</span> Future.
                        </h1>
                        <p className="text-white/40 text-lg">
                            Manage Konexa&apos;s digital infrastructure and sustainable energy systems with our integrated admin platform.
                        </p>
                    </div>

                    <div className="text-white/20 text-sm">
                        © 2026 Konexa. All rights reserved.
                    </div>
                </div>
            </div>

            {/* Right Side: Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-12">
                <div className="max-w-md w-full space-y-8">
                    <div className="lg:hidden mb-8">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors inline-flex"
                        >
                            <ArrowLeft size={18} />
                            <span className="text-sm font-medium">Back to site</span>
                        </Link>
                    </div>

                    <div>
                        <h2 className="text-4xl font-extrabold text-foreground tracking-tight mb-2">
                            Admin Access
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Sign in to manage the platform contents.
                        </p>
                    </div>

                    {error && (
                        <Alert variant="destructive" className="bg-destructive/10 border-destructive/20 text-destructive">
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}

                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div className="space-y-5">
                            <div className="space-y-2">
                                <Label htmlFor="email-address" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                                    Email address
                                </Label>
                                <Input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="admin@konexa.io"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="h-12 bg-muted/30 border-muted-foreground/20 focus:border-[#00c055] transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password" title="password" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                                        Password
                                    </Label>
                                    <Link href="#" className="text-xs text-[#00c055] hover:underline font-bold">
                                        Forgot Password?
                                    </Link>
                                </div>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="h-12 bg-muted/30 border-muted-foreground/20 focus:border-[#00c055] transition-all"
                                />
                            </div>
                        </div>

                        <Button type="submit" className="w-full h-12 text-lg font-bold bg-[#00c055] hover:bg-[#00a047] transition-all shadow-lg shadow-green-500/10" disabled={loading}>
                            {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : null}
                            Sign in to Dashboard
                        </Button>
                    </form>

                    <p className="text-center text-sm text-muted-foreground">
                        Protected by Konexa Security infrastructure.
                    </p>
                </div>
            </div>
        </div>
    );
}
