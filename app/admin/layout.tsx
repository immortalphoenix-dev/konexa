"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import {
    LayoutDashboard,
    Users,
    Briefcase,
    FileText,
    Mail,
    LogOut,
    Settings,
    Menu,
    X
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
    { href: "/admin", label: "Overview", icon: LayoutDashboard },
    { href: "/admin/projects", label: "Projects", icon: Briefcase },
    { href: "/admin/services", label: "Services", icon: Settings },
    { href: "/admin/team", label: "Team Members", icon: Users },
    { href: "/admin/articles", label: "Articles & News", icon: FileText },
    { href: "/admin/contacts", label: "Contact Submissions", icon: Mail },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const supabase = createClient();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/login");
    };

    const SidebarContent = () => (
        <div className="flex flex-col h-full bg-[#0f172a] text-white">
            <div className="p-6 border-b border-gray-800">
                <h1 className="text-xl font-bold tracking-tight text-[#00c055]">Konexa Admin</h1>
            </div>
            <nav className="flex-1 p-4 space-y-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                ? "bg-[#00c055] text-white font-medium"
                                : "text-gray-400 hover:bg-white/5 hover:text-white"
                                }`}
                        >
                            <item.icon size={20} />
                            {item.label}
                        </Link>
                    );
                })}
            </nav>
            <div className="p-4 border-t border-gray-800">
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-4 py-3 w-full text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-lg transition-colors"
                >
                    <LogOut size={20} />
                    Sign Out
                </button>
            </div>
        </div>
    );

    return (
        <div className="flex h-screen bg-gray-100 dark:bg-black">
            {/* Desktop Sidebar */}
            <aside className="hidden md:block w-64 flex-shrink-0">
                <SidebarContent />
            </aside>

            {/* Mobile Sidebar */}
            <div className="md:hidden fixed top-0 left-0 w-full z-50 bg-[#0f172a] p-4 flex justify-between items-center text-white">
                <span className="font-bold">Konexa Admin</span>
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-white">
                            <Menu />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="p-0 border-0 w-64">
                        <SheetTitle className="sr-only">Admin Navigation</SheetTitle>
                        <SidebarContent />
                    </SheetContent>
                </Sheet>
            </div>

            {/* Main Content */}
            <main className="flex-1 overflow-auto md:p-8 pt-20 md:pt-8 p-4">
                {children}
            </main>
        </div>
    );
}
