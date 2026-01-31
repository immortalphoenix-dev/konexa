const brands = [
  "WOLVES",
  "BRAND NAME",
  "acrevis",
  "BAYERN",
  "aquiire",
  "Burflex",
];

export function PartnersBrands() {
  return (
    <section className="py-12 lg:py-16 border-y">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {brands.map((brand) => (
            <div
              key={brand}
              className="text-lg md:text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
