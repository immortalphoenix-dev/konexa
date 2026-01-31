"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { KonexaLogo } from "@/components/konexa-logo";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/mode-toggle";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const mainNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Company",
    href: "#",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Leadership", href: "/leadership" },
      { label: "Our Impact", href: "/impact" },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

const topNavItems = [
  { label: "News & Media", href: "/news" },
  { label: "Careers", href: "/careers" },
  { label: "FAQs", href: "/faqs" },
];

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Helper to check if a specific path or any of its children are active
  const isActive = (item: NavItem) => {
    if (item.href === pathname) return true;
    if (item.children) {
      return item.children.some((child) => child.href === pathname);
    }
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar */}
      <div className="hidden lg:block bg-[#0f1c2e] dark:bg-[#0f172a] border-b border-transparent dark:border-white/5 text-white h-8 flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-xs font-light">
            <div className="flex items-center gap-6">
              <a
                href="tel:+2348005663920"
                className="flex items-center gap-2 hover:text-green-400 dark:hover:text-[#00c055] transition-colors"
              >
                <Phone size={12} />
                <span>+234 800 KONEXA</span>
              </a>
              <a
                href="mailto:info@konexa.com"
                className="flex items-center gap-2 hover:text-green-400 dark:hover:text-[#00c055] transition-colors"
              >
                <Mail size={12} />
                <span>info@konexa.com</span>
              </a>
            </div>
            <nav className="flex items-center gap-6">
              {topNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-green-400 dark:hover:text-[#00c055] transition-colors flex items-center"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b dark:bg-[#0f172a]/95 dark:border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <KonexaLogo size="lg" />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {mainNavItems.map((item) => {
                const isActiveItem = isActive(item);
                const baseClasses = cn(
                  "flex items-center h-10 text-sm font-medium transition-colors hover:text-green-500 dark:text-gray-300 dark:hover:text-[#00c055] cursor-pointer outline-none",
                  isActiveItem ? "text-green-600 dark:text-[#00c055] font-bold" : "text-muted-foreground"
                );

                if (item.children) {
                  return (
                    <DropdownMenu key={item.label}>
                      <DropdownMenuTrigger asChild>
                        <button className={cn(baseClasses, "group gap-1.5 border-none bg-transparent p-0")}>
                          {item.label}
                          <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="z-[60]">
                        {item.children.map((child) => (
                          <DropdownMenuItem key={child.href} asChild>
                            <Link
                              href={child.href}
                              className={cn(
                                "w-full cursor-pointer",
                                pathname === child.href && "font-bold text-[#1e3a8a]"
                              )}
                            >
                              {child.label}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={baseClasses}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <ModeToggle />
              <Button asChild className="bg-[#1e3a8a] hover:bg-blue-900 dark:bg-green-600 dark:text-white dark:hover:bg-green-700 text-white rounded-full px-8">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-background dark:bg-[#0f172a]">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {mainNavItems.map((item) => {
                if (item.children) {
                  return (
                    <div key={item.label} className="flex flex-col">
                      <div className="py-2 text-sm font-bold text-[#1e3a8a] mb-1">
                        {item.label}
                      </div>
                      <div className="pl-4 flex flex-col gap-2 border-l-2 border-dashed border-gray-200">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={cn(
                              "py-2 text-sm font-medium transition-colors",
                              pathname === child.href
                                ? "text-[#1e3a8a] font-bold"
                                : "text-muted-foreground"
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "py-2 text-sm font-medium transition-colors",
                      isActive(item)
                        ? "text-[#1e3a8a] font-bold"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-4 border-t mt-2">
                <Button asChild className="w-full bg-[#1e3a8a] text-white">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
