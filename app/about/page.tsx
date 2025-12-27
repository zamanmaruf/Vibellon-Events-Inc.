import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "About",
  description: "Learn about Vibellion Events Inc. - Outcome-driven business events for serious operators. Mission, principles, and operating model.",
}

export default function AboutPage() {
  return (
    <div className="relative w-full py-12 md:py-16">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/bg2.png)',
        }}
      />
      <div className="relative container mx-auto max-w-4xl space-y-16 z-10">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">About Vibellion</h1>
          <p className="text-xl text-muted-foreground">
            Outcome-driven business events for serious operators
          </p>
        </div>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            To help entrepreneurs and operators move forward faster through outcome-driven events 
            and curated communities. We believe execution trumps inspiration, and that the best 
            learning happens in rooms filled with serious operators who've been there.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Principles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Execution First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every event delivers actionable outcomes. You leave with deliverables, not just notes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Curated Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Intentionally small groups of serious operators. No time-wasters, no tire-kickers.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Operator-Led</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Facilitators who've done it. Not consultants or coaches—actual operators with battle-tested experience.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Repeatable Format</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Proven frameworks that work. Same structure, proven outcomes. No experiments on your time.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold">The Vibellion Standard</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every event we run meets a high bar: funding-grade execution, curated rooms, 
            operator-led facilitation, and repeatable formats. We don't do inspiration talks. 
            We don't do networking without structure. We don't do workshops without deliverables.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our standard is simple: if you can't leave with something actionable and complete, 
            we haven't done our job.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Operating Model: Event Engine</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Vibellion operates as an event engine—a repeatable, scalable system for delivering 
            high-quality business events. Our model combines proven frameworks, operator expertise, 
            and curated communities to create outcomes that matter.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Framework</h3>
              <p className="text-sm text-muted-foreground">
                Proven structures for business sprints, workshops, and networking events
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Expertise</h3>
              <p className="text-sm text-muted-foreground">
                Network of operators who've built, scaled, and exited companies
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Community</h3>
              <p className="text-sm text-muted-foreground">
                Curated rooms of serious entrepreneurs and operators who execute
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Canada-Rooted, Globally-Minded</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Based in Canada, but our events attract founders and operators from around the world. 
            We bring global best practices to Canadian entrepreneurs while showcasing Canadian 
            innovation globally. Our team reflects Canada's diversity—multicultural, multilingual, 
            and committed to creating inclusive spaces where all operators can thrive.
          </p>
        </section>
      </div>
    </div>
  )
}

