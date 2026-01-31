import { Zap, Battery, Home } from "lucide-react";
import Image from "next/image";

const stats = [
  {
    value: "1,200+ km",
    label: "Kilometers of Grid Managed",
    icon: Zap,
    color: "blue"
  },
  {
    value: "45,000+ MWh",
    label: "Clean Energy Delivered",
    icon: Battery,
    color: "green"
  },
  {
    value: "12,000",
    label: "Connected Households",
    icon: Home,
    color: "blue"
  },
];

export function RegionalPresenceSection() {
  return (
    <section className="py-12 md:py-20 bg-gray-50 dark:bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Map Visualization - Takes up ~65-70% */}
          <div className="lg:col-span-7 flex items-center justify-center">
            <div className="relative w-full max-w-2xl">
              <Image
                src="/africa-map.png"
                alt="Africa Map"
                width={600}
                height={600}
                className="w-full h-auto opacity-80 dark:opacity-60 contrast-125 hover:scale-105 transition-transform duration-700"
              />
              {/* Green dot marker positioned with code */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 rounded-full bg-green-500 ring-4 ring-green-500/30 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Content - Takes up ~30-35% */}
          <div className="lg:col-span-5">
            <span className="inline-block text-sm font-bold text-green-600 dark:text-green-500 uppercase tracking-wider mb-3">
              REGIONAL PRESENCE
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[#1e3a8a] dark:text-white mb-10">
              Measuring Our African Footprint
            </h2>

            {/* Stats - Simple rows without borders */}
            <div className="space-y-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-start gap-4"
                >
                  {/* Icon with colored background */}
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${stat.color === "green" ? "bg-green-50 dark:bg-green-900/20" : "bg-blue-50 dark:bg-blue-900/20"
                      }`}
                  >
                    <stat.icon
                      className={`w-6 h-6 ${stat.color === "green"
                        ? "text-green-600 dark:text-green-500"
                        : "text-blue-600 dark:text-blue-400"
                        }`}
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <div
                      className={`text-2xl font-bold ${stat.color === "green"
                        ? "text-green-600 dark:text-green-500"
                        : "text-[#1e3a8a] dark:text-white"
                        }`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
