import { Badge } from "@/components/ui/badge"

const pillars = [
  {
    title: "Funding-Grade Execution",
    description: "We don't do inspiration talks. Every sprint delivers actionable, investor-ready deliverables you can use immediately.",
  },
  {
    title: "Curated Rooms",
    description: "Intentionally small groups of serious operators. No time-wasters. Quality over quantity, always.",
  },
  {
    title: "Operator-Led",
    description: "Facilitators who've done it. Not consultants or coaches—actual operators with battle-tested experience.",
  },
  {
    title: "Repeatable Format",
    description: "Proven frameworks that work. Same structure, proven outcomes. No experiments on your time.",
  },
]

export function Differentiators() {
  return (
    <section className="relative w-full py-16 md:py-24">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/bg2.png)',
        }}
      />
      <div className="relative container mx-auto max-w-4xl space-y-12 z-10">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">How Vibellion is Different</h2>
          <p className="text-lg text-muted-foreground">
            Four pillars that define every event we run
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="space-y-4 p-6 rounded-lg border border-border bg-card">
              <Badge variant="default">{pillar.title}</Badge>
              <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

