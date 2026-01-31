"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { createClient } from "@/lib/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Phone, MapPin, Clock, ArrowRight } from "lucide-react";

const formSchema = z.object({
    full_name: z.string().min(2),
    email: z.string().email(),
    service: z.string().optional(),
    location: z.string().optional(),
    message: z.string().optional(),
});

export function ConsultationSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();
    const supabase = createClient();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            full_name: "",
            email: "",
            service: "",
            location: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        try {
            const { error } = await supabase
                .from("contacts")
                .insert([
                    {
                        full_name: values.full_name,
                        email: values.email,
                        subject: "Consultation Request",
                        service_interest: values.service,
                        location: values.location,
                        message: values.message,
                    },
                ]);

            if (error) throw error;

            toast({
                title: "Request Sent!",
                description: "Our experts will contact you shortly.",
            });
            form.reset();
        } catch (error) {
            console.error("Error submitting form:", error);
            toast({
                title: "Error",
                description: "Failed to send request. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section className="py-20 lg:py-28 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="grid lg:grid-cols-12">
                        {/* Left Side (Green) */}
                        <div className="lg:col-span-5 bg-[#00c853] p-10 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
                            {/* Decorative Circles */}
                            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full"></div>
                            <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full"></div>
                            <div className="absolute top-1/2 left-10 w-16 h-16 bg-white/10 rounded-full"></div>

                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold mb-4">Let's Transform Your Energy Grid</h2>
                                <p className="text-white/90 mb-12 leading-relaxed">
                                    Our experts are ready to discuss how our integrated distribution model can benefit your region or business.
                                </p>
                            </div>

                            <div className="space-y-6 relative z-10">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/20 p-2.5 rounded-lg">
                                        <Phone className="text-white h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm mb-1">Project Inquiries</h3>
                                        <p className="text-sm text-white/90">+44 (0) 20 1234 5678</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/20 p-2.5 rounded-lg">
                                        <MapPin className="text-white h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm mb-1">Headquarters</h3>
                                        <p className="text-sm text-white/90">Victoria Island, Lagos, Nigeria</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/20 p-2.5 rounded-lg">
                                        <Clock className="text-white h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm mb-1">Working Hours</h3>
                                        <p className="text-sm text-white/90">Mon - Fri: 8:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side (Form) */}
                        <div className="lg:col-span-7 p-10 md:p-12 bg-white">
                            <h2 className="text-2xl font-bold mb-8 text-foreground">Request a Consultation</h2>

                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <FormField
                                            control={form.control}
                                            name="full_name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Full Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="John Doe" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Email Address</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="john@example.com" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <FormField
                                            control={form.control}
                                            name="service"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Service of Interest</FormLabel>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Select a service" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectItem value="grid">Grid Modernization</SelectItem>
                                                            <SelectItem value="commercial">Commercial Power</SelectItem>
                                                            <SelectItem value="renewable">Renewable Integration</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="location"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Location</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Country / City" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Message</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Tell us about your project..."
                                                        className="min-h-[120px] resize-none"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-[#2d3748] text-white hover:bg-[#1a202c] h-12 font-semibold"
                                    >
                                        Submit Request <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </form>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
