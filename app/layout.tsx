import React from "react"
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: "Konexa | Powering Africa's Future",
    template: "%s | Konexa"
  },
  description:
    "Konexa is the Energy Company of the Future. We are transforming energy systems across Africa through integrated utility models that deliver reliable, sustainable power.",
  keywords: [
    "energy",
    "Africa",
    "renewable",
    "solar",
    "grid",
    "sustainable",
    "electricity",
  ],
  authors: [{ name: "Konexa" }],
  openGraph: {
    title: "Konexa | Powering Africa's Future",
    description:
      "Transforming energy systems across Africa through integrated utility models.",
    type: "website",
    locale: "en_US",
  },
  generator: 'v0.app'
};

export const viewport: Viewport = {
  themeColor: "#22c55e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

