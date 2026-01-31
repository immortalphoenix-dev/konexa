import { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Mail, MapPin, Briefcase } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch with the Konexa Team",
  description: "Have a question or want to partner with us? Reach out to the Konexa team today.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background">
        {/* Header Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-green-50/80 via-background to-background dark:from-green-900/10 dark:via-background dark:to-background pt-20 pb-12 text-center">
          {/* Decorative Circles */}
          <div className="absolute top-[-5%] left-[-5%] w-64 h-64 rounded-full bg-green-100/50 dark:bg-green-900/20 blur-3xl pointer-events-none" />
          <div className="absolute top-[10%] right-[-10%] w-96 h-96 rounded-full bg-green-50/50 dark:bg-green-900/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-20%] left-[20%] w-72 h-72 rounded-full bg-green-100/30 dark:bg-green-900/20 blur-3xl pointer-events-none" />

          <div className="container relative z-10 mx-auto px-4">
            <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-full text-xs font-semibold mb-4 tracking-wide uppercase">
              Connect With Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Let's Transform Energy <span className="text-primary">Together.</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're building the future of sustainable energy systems across
              Africa. Whether you're a partner, client, or future teammate, we
              want to hear from you.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 grid md:grid-cols-12 gap-12 mt-12 pb-20">
          {/* Left Column: Contact Info */}
          <div className="md:col-span-5 space-y-10">
            {/* Get In Touch */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="h-0.5 w-6 bg-primary"></span>
                <h2 className="text-xl font-bold">Get In Touch</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 bg-card rounded-lg border shadow-sm">
                  <Mail className="text-primary mb-3 h-6 w-6" />
                  <h3 className="font-semibold mb-1">General Requests</h3>
                  <a href="mailto:info@konexa.io" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    info@konexa.io
                  </a>
                </div>
                <div className="p-6 bg-card rounded-lg border shadow-sm">
                  <Briefcase className="text-primary mb-3 h-6 w-6" />
                  <h3 className="font-semibold mb-1">Careers</h3>
                  <a href="mailto:careers@konexa.io" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    careers@konexa.io
                  </a>
                </div>
              </div>
            </div>

            {/* Our Offices */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="h-0.5 w-6 bg-primary"></span>
                <h2 className="text-xl font-bold">Our Offices</h2>
              </div>
              <div className="space-y-4">
                <div className="p-6 bg-card rounded-lg border shadow-sm flex items-start gap-4">
                  <div className="bg-muted p-2 rounded-md">
                    <MapPin className="text-muted-foreground h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">London, UK</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      66-67 Newman Street<br />
                      London W1T 3EQ
                    </p>
                  </div>
                </div>
                <div className="p-6 bg-card rounded-lg border shadow-sm flex items-start gap-4">
                  <div className="bg-muted p-2 rounded-md">
                    <MapPin className="text-muted-foreground h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Abuja, Nigeria</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      No. 9 Durban Street<br />
                      Wuse 2, Abuja
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="md:col-span-7">
            <ContactForm />
          </div>
        </section>

        {/* Map Image Section */}
        <section className="mt-20 relative h-[500px] w-full overflow-hidden flex items-center justify-center">
          {/* Background Map with Fade */}
          <div className="absolute inset-0 w-full h-full">
            <div
              className="absolute inset-0 bg-[url('/green-vegetation-map.png')] bg-cover bg-center bg-no-repeat opacity-50"
              style={{
                maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)'
              }}
            ></div>
          </div>

          {/* Floating Pill */}
          <div className="relative z-10 bg-white dark:bg-card px-8 py-4 rounded-full shadow-2xl border border-gray-100 dark:border-gray-800 flex items-center justify-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="font-bold text-[#0f1c2e] dark:text-white text-lg tracking-tight">Expanding Energy Access Across Africa</span>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
