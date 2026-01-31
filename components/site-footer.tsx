"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Phone,
  Mail,
  Send,
  ChevronDown
} from "lucide-react";
import { KonexaLogo } from "@/components/konexa-logo";
import { cn } from "@/lib/utils";
import { NewsletterForm } from "@/components/newsletter-form";

export function SiteFooter() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const FooterSection = ({
    title,
    id,
    children
  }: {
    title: string;
    id: string;
    children: React.ReactNode
  }) => {
    const isOpen = openSection === id;
    return (
      <div className="border-b border-white/10 lg:border-none last:border-none">
        <button
          onClick={() => toggleSection(id)}
          className="flex items-center justify-between w-full py-4 lg:py-0 text-left lg:cursor-default lg:pointer-events-none"
        >
          <h4 className="font-bold text-white text-base md:text-lg">{title}</h4>
          <ChevronDown
            className={cn(
              "w-5 h-5 text-gray-500 transition-transform duration-200 lg:hidden",
              isOpen ? "rotate-180" : ""
            )}
          />
        </button>
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out lg:h-auto lg:block",
            isOpen ? "max-h-96 opacity-100 mb-6" : "max-h-0 opacity-0 lg:opacity-100 lg:max-h-none"
          )}
        >
          {children}
        </div>
      </div>
    );
  };

  return (
    <footer className="bg-[#0b1221] dark:bg-[#0f172a] pt-12 lg:pt-20 pb-10 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-10 lg:gap-8 mb-12 lg:mb-16">
          {/* Brand Column - Always Visible */}
          <div className="space-y-6">
            <KonexaLogo variant="white" />
            <p className="text-gray-400 leading-relaxed max-w-xs text-sm md:text-base">
              Transforming energy systems across Africa to provide reliable,
              sustainable, and affordable power for all.
            </p>
            <div className="flex gap-4">
              <Link href="https://linkedin.com/company/konexa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#00c055] hover:text-white hover:border-[#00c055] transition-all" aria-label="LinkedIn">
                <Linkedin size={18} />
              </Link>
              <Link href="https://twitter.com/konexa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#00c055] hover:text-white hover:border-[#00c055] transition-all" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link href="https://facebook.com/konexa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#00c055] hover:text-white hover:border-[#00c055] transition-all" aria-label="Facebook">
                <Facebook size={18} />
              </Link>
              <Link href="https://instagram.com/konexa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#00c055] hover:text-white hover:border-[#00c055] transition-all" aria-label="Instagram">
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <FooterSection title="Quick Links" id="quick-links">
            <ul className="space-y-4 text-gray-400 text-sm md:text-base">
              <li><Link href="/about" className="hover:text-[#00c055] transition-colors">About Us</Link></li>
              <li><Link href="/about#strategy" className="hover:text-[#00c055] transition-colors">Our Strategy</Link></li>
              <li><Link href="/projects" className="hover:text-[#00c055] transition-colors">Energy Projects</Link></li>
              <li><Link href="/news" className="hover:text-[#00c055] transition-colors">News Center</Link></li>
              <li><Link href="/contact" className="hover:text-[#00c055] transition-colors">Contact Support</Link></li>
            </ul>
          </FooterSection>

          {/* Services */}
          <FooterSection title="Services" id="services">
            <ul className="space-y-4 text-gray-400 text-sm md:text-base">
              <li><Link href="/services/c-and-i" className="hover:text-[#00c055] transition-colors">C & I Customers</Link></li>
              <li><Link href="/services/energy-access" className="hover:text-[#00c055] transition-colors">Energy Access for All</Link></li>
              <li><Link href="/services/generation" className="hover:text-[#00c055] transition-colors">Complementary Generation</Link></li>
              <li><Link href="/services/technical-loss-reduction" className="hover:text-[#00c055] transition-colors">Technical Loss Reduction</Link></li>
              <li><Link href="/services/commercial-loss-reduction" className="hover:text-[#00c055] transition-colors">Commercial Loss Reduction</Link></li>
            </ul>
          </FooterSection>

          {/* Contact Us & Newsletter */}
          <div className="space-y-2">
            <FooterSection title="Contact Us" id="contact">
              <ul className="space-y-3 text-gray-400 mb-2 text-sm">
                <li className="flex items-center gap-3">
                  <MapPin className="text-[#00c055] shrink-0" size={16} />
                  <span className="flex items-center">Victoria Island, Lagos, Nigeria</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-[#00c055] shrink-0" size={16} />
                  <a href="mailto:contact@konexa.com" className="hover:text-white transition-colors flex items-center">contact@konexa.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-[#00c055] shrink-0" size={16} />
                  <a href="tel:+234800566392" className="hover:text-white transition-colors leading-none">+234 800 566 392</a>
                </li>
              </ul>
            </FooterSection>

            {/* Newsletter Form - Redesigned */}
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2024 Konexa. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
            <Link href="/login" className="hover:text-white/40 text-gray-600 transition-colors border-l border-white/10 pl-6 ml-2">Staff Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
