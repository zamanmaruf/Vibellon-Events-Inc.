import { CorporateInquiryForm } from "@/components/forms/CorporateInquiryForm"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Corporate Workshops",
  description: "Productized workshop offerings for teams: Strategy Sprint, AI for Operations, Innovation Day, GTM Alignment.",
}

const workshops = [
  {
    title: "Strategy Sprint",
    description: "Align your team on strategic priorities, build execution plans, and set clear milestones.",
    outcomes: [
      "Clear strategic priorities aligned across the team",
      "Execution roadmap with milestones",
      "Accountability framework",
    ],
  },
  {
    title: "AI for Operations",
    description: "Identify and implement AI opportunities across your operations to drive efficiency and innovation.",
    outcomes: [
      "AI opportunity assessment",
      "Implementation roadmap",
      "Resource and budget planning",
    ],
  },
  {
    title: "Innovation Day",
    description: "Dedicated day to explore new opportunities, validate ideas, and build prototypes.",
    outcomes: [
      "Validated innovation opportunities",
      "Rapid prototypes or MVPs",
      "Go/no-go decision framework",
    ],
  },
  {
    title: "GTM Alignment",
    description: "Get your go-to-market strategy right: positioning, messaging, channels, and pricing.",
    outcomes: [
      "GTM strategy document",
      "Messaging framework",
      "Channel and pricing strategy",
    ],
  },
]

export default function CorporatePage() {
  return (
    <div className="relative w-full py-12 md:py-16">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/bg2.png)',
        }}
      />
      <div className="relative container mx-auto max-w-5xl space-y-16 z-10">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Corporate Workshops</h1>
          <p className="text-xl text-muted-foreground">
            Productized workshop offerings designed for teams who need outcomes, not inspiration
          </p>
        </div>

        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Workshop Offerings</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {workshops.map((workshop, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{workshop.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{workshop.description}</p>
                    <div>
                      <p className="font-semibold mb-2">Outcomes:</p>
                      <ul className="space-y-1">
                        {workshop.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-primary mt-1">✓</span>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Who It's For</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Teams preparing for strategic planning cycles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Organizations launching new initiatives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Companies needing alignment across teams</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Leaders who value execution over talk</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">
                    All workshops are operator-led and designed to deliver actionable outcomes. 
                    Teams leave with frameworks, plans, and next steps, not just notes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Get Started</h2>
            <Card>
              <CardHeader>
                <CardTitle>Inquiry Form</CardTitle>
              </CardHeader>
              <CardContent>
                <CorporateInquiryForm />
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}

