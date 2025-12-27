import { PartnerInquiryForm } from "@/components/forms/PartnerInquiryForm"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Partners",
  description: "Partner with Vibellion Events. Distribution, speakers, sponsorship, and venue partnerships available.",
}

const partnershipTypes = [
  {
    type: "Distribution",
    description: "Accelerators, universities, and associations looking to offer Vibellion sprints to their communities.",
    benefits: [
      "Co-branded events",
      "Revenue sharing",
      "Access to proven frameworks",
    ],
  },
  {
    type: "Speakers",
    description: "Operators and experts interested in facilitating sprints and workshops.",
    benefits: [
      "Facilitation opportunities",
      "Network access",
      "Revenue sharing",
    ],
  },
  {
    type: "Sponsorship",
    description: "Brands and companies looking to sponsor events and reach serious entrepreneurs.",
    benefits: [
      "Brand exposure",
      "Access to curated audience",
      "Thought leadership opportunities",
    ],
  },
  {
    type: "Venues",
    description: "Venues interested in hosting in-person events and networking nights.",
    benefits: [
      "Regular event bookings",
      "Community building",
      "Cross-promotion opportunities",
    ],
  },
]

export default function PartnersPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold">Partners</h1>
          <p className="text-xl text-muted-foreground">
            Work with Vibellion to reach serious entrepreneurs and operators
          </p>
        </div>

        <section className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Partnership Types</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {partnershipTypes.map((partnership, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{partnership.type}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{partnership.description}</p>
                    <div>
                      <p className="font-semibold mb-2 text-sm">Benefits:</p>
                      <ul className="space-y-1">
                        {partnership.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-primary mt-1">✓</span>
                            <span>{benefit}</span>
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
            <h2 className="text-3xl font-bold mb-4">Partner Inquiry</h2>
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <PartnerInquiryForm />
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}

