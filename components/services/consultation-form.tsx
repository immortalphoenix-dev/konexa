"use client";

import React from "react"

import { useState } from "react";
import { Phone, MapPin, Clock, Send, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SectionHeading } from "@/components/section-heading";

const services = [
  "Intelligent Network Planning",
  "Technical Loss Reduction",
  "Commercial Loss Reduction",
  "Energy Access for All",
  "Customer Centricity",
  "Complementary Generation",
  "Proprietary Technology",
  "C & I Customers",
  "Government Support",
];

const contactInfo = [
  {
    icon: Phone,
    label: "Project Inquiries",
    value: "+44 (0) 20 1234 5678",
    href: "tel:+442012345678",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Victoria Island, Lagos, Nigeria",
    href: null,
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Fri: 8:00 AM - 6:00 PM",
    href: null,
  },
];

export function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    service: "",
    location: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: formData.fullName,
          email: formData.email,
          service_interest: formData.service,
          location: formData.location,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitMessage("Thank you! We'll be in touch within 24 hours.");
        setFormData({
          fullName: "",
          email: "",
          service: "",
          location: "",
          message: "",
        });
      } else {
        setSubmitMessage("Something went wrong. Please try again.");
      }
    } catch {
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(""), 5000);
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Let's Transform Your Energy Grid"
          description="Our experts are ready to discuss how our integrated distribution model can benefit your region or business."
        />

        <div className="grid lg:grid-cols-5 gap-12 mt-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-xl border p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-1">Request a Consultation</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium mb-2"
                    >
                      Full Name
                    </label>
                    <Input
                      id="fullName"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium mb-2"
                    >
                      Service of Interest
                    </label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        setFormData({ ...formData, service: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium mb-2"
                    >
                      Location
                    </label>
                    <Input
                      id="location"
                      placeholder="Country / City"
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                  <Send className="ml-2" size={16} />
                </Button>

                {submitMessage && (
                  <p
                    className={`text-sm ${submitMessage.includes("Thank") ? "text-primary" : "text-destructive"}`}
                  >
                    {submitMessage}
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <info.icon size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{info.label}</h4>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            <div className="mt-8 rounded-xl overflow-hidden border bg-card">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    2307 Beverley Rd Brooklyn,
                    <br />
                    New York 11226 United States.
                  </p>
                  <Button variant="link" size="sm" className="mt-2">
                    GET DIRECTIONS
                    <ExternalLink size={12} className="ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
