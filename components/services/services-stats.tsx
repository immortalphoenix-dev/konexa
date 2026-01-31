const stats = [
  { value: "15+", label: "YEARS EXPERIENCE" },
  { value: "500k", label: "HOMES POWERED" },
  { value: "24/7", label: "RELIABLE SUPPLY" },
  { value: "12", label: "ACTIVE PROJECTS" },
];

export function ServicesStats() {
  return (
    <section className="py-12 lg:py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-primary-foreground/70 mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
