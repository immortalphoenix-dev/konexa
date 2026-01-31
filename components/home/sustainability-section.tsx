"use client";

export function SustainabilitySection() {
  const sdgs = [
    { number: 7, label: "CLEAN ENERGY", color: "bg-[#00c055]" }, // Green
    { number: 9, label: "INNOVATION", color: "bg-[#1e40af]" },    // Blue
    { number: 11, label: "CITIES", color: "bg-[#00c055]" },      // Green
    { number: 13, label: "CLIMATE", color: "bg-[#1e40af]" },     // Blue
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/seedling-bg.png')",
        }}
      >
        {/* Blue Overlay - Full coverage with transparency to match the moody blue look */}
        <div className="absolute inset-0 bg-[#0f1c2e]/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        <div className="max-w-4xl text-white">
          <span className="inline-block text-sm font-bold text-green-500 uppercase tracking-widest mb-4">
            SUSTAINABILITY FIRST
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Committed to the UN Sustainable Development Goals
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed mb-12 max-w-2xl mx-auto">
            Our mission aligns directly with SDG 7 (Affordable and Clean Energy)
            and SDG 13 (Climate Action). We are not just building grids; we are
            building a greener, more equitable future for the African continent.
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            {sdgs.map((sdg) => (
              <div key={sdg.number} className="flex flex-col items-center group">
                <div
                  className={`w-16 h-16 ${sdg.color} rounded-lg flex items-center justify-center text-white font-bold text-2xl mb-3 shadow-lg transition-transform group-hover:scale-105`}
                >
                  {sdg.number}
                </div>
                <div className="text-[10px] sm:text-xs text-white font-bold uppercase tracking-wider text-center">
                  {sdg.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
