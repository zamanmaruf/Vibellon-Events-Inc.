import { getEventBySlug, getEvents } from "@/lib/content/events"
import { EventAgenda } from "@/components/events/EventAgenda"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { format } from "date-fns"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"

interface EventPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const events = await getEvents()
  return events.map((event) => ({
    slug: event.slug,
  }))
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const event = await getEventBySlug(resolvedParams.slug)

  if (!event) {
    return {
      title: "Event Not Found",
    }
  }

  const startDate = new Date(event.startDateISO)
  const formattedDate = format(startDate, "MMMM d, yyyy 'at' h:mm a")

  return {
    title: event.title,
    description: event.outcome,
    openGraph: {
      title: event.title,
      description: event.outcome,
      type: "website",
      url: `/events/${event.slug}`,
    },
  }
}

export default async function EventPage({ params }: EventPageProps) {
  const resolvedParams = await params
  const event = await getEventBySlug(resolvedParams.slug)

  if (!event) {
    notFound()
  }

  const startDate = new Date(event.startDateISO)
  const endDate = new Date(event.endDateISO)
  const formattedDate = format(startDate, "MMMM d, yyyy")
  const formattedTime = format(startDate, "h:mm a")
  const formattedEndTime = format(endDate, "h:mm a")

  const priceRange = (() => {
    const prices = [event.price.standard, event.price.pro, event.price.vip].filter(
      (p): p is number => p !== null
    )
    if (prices.length === 0) return "Free"
    const min = Math.min(...prices)
    const max = Math.max(...prices)
    return min === max ? `$${min} ${event.price.currency}` : `$${min}-${max} ${event.price.currency}`
  })()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.outcome,
    startDate: event.startDateISO,
    endDate: event.endDateISO,
    eventAttendanceMode: event.format === "online" ? "https://schema.org/OnlineEventAttendanceMode" : "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: event.format === "online"
      ? {
          "@type": "VirtualLocation",
          url: event.registerUrl,
        }
      : event.city
      ? {
          "@type": "Place",
          name: event.city,
        }
      : undefined,
    organizer: {
      "@type": "Organization",
      name: "Vibellion Events Inc.",
      url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    },
    offers: {
      "@type": "Offer",
      url: event.registerUrl,
      price: event.price.standard || 0,
      priceCurrency: event.price.currency,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative w-full py-12 md:py-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/bg2.png)',
          }}
        />
        <div className="relative container mx-auto max-w-4xl space-y-12 z-10">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">
                {event.type === "sprint" && "Sprint"}
                {event.type === "networking" && "Networking"}
                {event.type === "workshop" && "Workshop"}
              </Badge>
              <Badge variant="default">Outcome-driven</Badge>
              {event.tags?.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{event.title}</h1>
            {event.subtitle && (
              <p className="text-xl text-muted-foreground">{event.subtitle}</p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Event Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Date & Time</p>
                  <p>{formattedDate}</p>
                  <p className="text-muted-foreground">{formattedTime} - {formattedEndTime} ({event.timezone})</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Format</p>
                  <p>{event.format === "online" ? "Online" : event.format === "in-person" ? event.city || "In-Person" : "Hybrid"}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Facilitator</p>
                  <div className="mt-2 space-y-3">
                    {event.facilitator.image && (
                      <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-border">
                        <Image
                          src={event.facilitator.image}
                          alt={event.facilitator.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <p className="font-medium">{event.facilitator.name}</p>
                      {event.facilitator.title && (
                        <p className="text-sm text-muted-foreground">{event.facilitator.title}</p>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pricing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {event.price.standard && (
                  <div>
                    <p className="font-medium">Standard</p>
                    <p className="text-2xl font-bold">${event.price.standard} {event.price.currency}</p>
                  </div>
                )}
                {event.price.pro && (
                  <div>
                    <p className="font-medium">Pro</p>
                    <p className="text-2xl font-bold">${event.price.pro} {event.price.currency}</p>
                  </div>
                )}
                {event.price.vip && (
                  <div>
                    <p className="font-medium">VIP</p>
                    <p className="text-2xl font-bold">${event.price.vip} {event.price.currency}</p>
                  </div>
                )}
                <Button asChild size="lg" className="w-full mt-4">
                  <a href={event.registerUrl} target="_blank" rel="noopener noreferrer">
                    Register Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Outcome</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">{event.outcome}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Deliverables</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {event.deliverables.map((deliverable, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Agenda</CardTitle>
            </CardHeader>
            <CardContent>
              <EventAgenda agenda={event.agenda} />
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Who It's For</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {event.whoItsFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {event.whoItsNotFor && event.whoItsNotFor.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Who It's Not For</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {event.whoItsNotFor.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-muted-foreground mt-1">•</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>

          {event.facilitator.bio && (
            <Card>
              <CardHeader>
                <CardTitle>About the Facilitator</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {event.facilitator.image && (
                    <div className="relative w-32 h-32 rounded-lg overflow-hidden border border-border">
                      <Image
                        src={event.facilitator.image}
                        alt={event.facilitator.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="space-y-2">
                    <div>
                      <p className="font-semibold text-lg">{event.facilitator.name}</p>
                      {event.facilitator.title && (
                        <p className="text-sm text-muted-foreground">{event.facilitator.title}</p>
                      )}
                    </div>
                    <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                      {event.facilitator.bio}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {event.faq && event.faq.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>FAQ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {event.faq.map((faq, index) => (
                  <div key={index}>
                    <h4 className="font-semibold mb-2">{faq.question}</h4>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </>
  )
}

