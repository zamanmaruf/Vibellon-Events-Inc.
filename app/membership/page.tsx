import { MembershipWaitlistForm } from "@/components/forms/MembershipWaitlistForm"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Membership",
  description: "Join Vibellion Membership for curated networking, office hours, templates library, and private community access.",
}

const benefits = [
  {
    title: "Curated Networking",
    description: "Access to intentionally curated networking events with serious operators and founders.",
  },
  {
    title: "Office Hours",
    description: "Regular office hours with operators who've been there. Get advice on execution, strategy, and growth.",
  },
  {
    title: "Templates Library",
    description: "Access to our library of proven templates: business plans, pitch decks, financial models, GTM strategies.",
  },
  {
    title: "Perks & Discounts",
    description: "Exclusive discounts on events, tools, and services. Partner benefits from accelerators, VCs, and service providers.",
  },
  {
    title: "Private Community",
    description: "Private community platform for ongoing connections, peer support, and accountability.",
  },
  {
    title: "Early Access",
    description: "First access to new sprints, workshops, and exclusive events before public release.",
  },
]

export default function MembershipPage() {
  return (
    <div className="relative w-full py-12 md:py-16">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/bg.png)',
        }}
      />
      <div className="relative container mx-auto max-w-5xl space-y-16 z-10">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Membership</h1>
          <p className="text-xl text-muted-foreground">
            Access and accountability, not content. Join a community of serious operators.
          </p>
        </div>

        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-8 p-8 rounded-lg">
          <div>
            <h2 className="text-3xl font-bold mb-4">Pricing</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Individual</CardTitle>
                  <p className="text-3xl font-bold mt-4">$99<span className="text-lg font-normal text-muted-foreground">/month</span></p>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>✓ All benefits included</p>
                  <p>✓ 1-on-1 office hours</p>
                  <p>✓ Templates library access</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Team</CardTitle>
                  <Badge variant="secondary" className="w-fit">Coming Soon</Badge>
                  <p className="text-3xl font-bold mt-4">$299<span className="text-lg font-normal text-muted-foreground">/month</span></p>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>✓ Up to 5 team members</p>
                  <p>✓ Team workshops</p>
                  <p>✓ Group office hours</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <Badge variant="secondary" className="w-fit">Coming Soon</Badge>
                  <p className="text-3xl font-bold mt-4">Custom</p>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p>✓ Unlimited team members</p>
                  <p>✓ Custom workshops</p>
                  <p>✓ Dedicated support</p>
                </CardContent>
              </Card>
            </div>
            <p className="text-sm text-muted-foreground mt-6 text-center">
              Membership is currently in waitlist phase. Join below to be notified when we launch.
            </p>
          </div>
        </section>

        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Join the Waitlist</h2>
            <Card>
              <CardHeader>
                <CardTitle>Get Early Access</CardTitle>
              </CardHeader>
              <CardContent>
                <MembershipWaitlistForm />
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}

