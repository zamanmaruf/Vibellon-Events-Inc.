export function PartnersStrip() {
  const partners = [
    "TechStars",
    "Velocity",
    "Communitech",
    "MaRS Discovery",
    "DMZ",
    "Highline Beta",
  ]

  return (
    <section className="relative w-full py-12 border-y border-border">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: 'url(/bg.png)',
        }}
      />
      <div className="relative container mx-auto max-w-4xl z-10">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by leading accelerators and innovation hubs
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="text-lg font-semibold text-muted-foreground"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

