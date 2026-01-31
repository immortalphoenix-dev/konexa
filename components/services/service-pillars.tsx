import { ServiceCard } from "@/components/service-card";
import { SectionHeading } from "@/components/section-heading";

const services = [
  {
    title: "Intelligent Network Planning",
    description:
      "Using advanced data analytics to design resilient and efficient distribution networks tailored for local demand.",
    icon: "network",
    features: ["Demand Forecasting", "Grid Modernization"],
    href: "/services/network-planning",
  },
  {
    title: "Technical Loss Reduction",
    description:
      "Minimizing energy waste during transmission and distribution through state-of-the-art infrastructure upgrades.",
    icon: "zap",
    features: ["Transformer Efficiency", "Infrastructure Retrofitting"],
    href: "/services/loss-reduction",
  },
  {
    title: "Commercial Loss Reduction",
    description:
      "Implementing smart metering and digital billing systems to ensure accurate revenue collection and transparency.",
    icon: "trending-up",
    features: ["Smart Metering (AMI)", "Revenue Assurance"],
    href: "/services/commercial-loss",
  },
  {
    title: "Energy Access for All",
    description:
      "Extending the grid and developing off-grid solutions to reach underserved rural and peri-urban communities.",
    icon: "home",
    features: ["Last-mile Connectivity", "Community Microgrids"],
    href: "/services/energy-access",
  },
  {
    title: "Customer Centricity",
    description:
      "Putting people first with responsive support, flexible payment options, and education on energy efficiency.",
    icon: "users",
    features: ["24/7 Support Center", "Consumer Education"],
    href: "/services/customer-centricity",
  },
  {
    title: "Complementary Generation",
    description:
      "Integrating renewable sources like solar and wind into the distribution mix to ensure reliability.",
    icon: "sun",
    features: ["Solar Hybrid Systems", "Distributed Energy"],
    href: "/services/complementary-generation",
  },
  {
    title: "Proprietary Technology",
    description:
      "Leveraging custom software and IoT solutions to monitor grid health and optimize energy flow in real-time.",
    icon: "cpu",
    features: ["IoT Grid Monitoring", "Asset Management"],
    href: "/services/proprietary-tech",
  },
  {
    title: "C & I Customers",
    description:
      "Delivering high-uptime power solutions for Commercial and Industrial clients to drive economic growth.",
    icon: "building",
    features: ["Business Continuity", "Custom Pricing Plans"],
    href: "/services/commercial-industrial",
  },
  {
    title: "Government Support",
    description:
      "Partnering with national and local authorities to align with policy goals and regulatory frameworks.",
    icon: "landmark",
    features: ["PPP Partnerships", "Regulatory Compliance"],
    href: "/services/government-support",
  },
];

export function ServicePillars() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading
          label="SERVICE PILLARS"
          title="Pioneering the Future of Energy"
          description="We combine technical excellence with social impact to provide reliable, affordable, and clean energy to communities and industries."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
