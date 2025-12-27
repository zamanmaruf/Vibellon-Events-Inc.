import { Hero } from "@/components/sections/Hero"
import { Differentiators } from "@/components/sections/Differentiators"
import { Testimonials } from "@/components/sections/Testimonials"
import { PartnersStrip } from "@/components/sections/PartnersStrip"
import { NewsletterForm } from "@/components/forms/NewsletterForm"
import { EventCard } from "@/components/events/EventCard"
import { getEvents, getUpcomingEvents } from "@/lib/content/events"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default async function HomePage() {
  const allEvents = await getEvents()
  const upcomingEvents = getUpcomingEvents(allEvents).slice(0, 3)

  return (
    <>
      <Hero />
      <Differentiators />

      <section className="relative w-full py-16 md:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/bg.png)',
          }}
        />
        <div className="relative container mx-auto max-w-6xl space-y-12 z-10">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Upcoming Sprints</h2>
            <p className="text-lg text-muted-foreground">
              Outcome-driven business sprints designed for execution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative w-full py-16 md:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/bg2.png)',
          }}
        />
        <div className="relative container mx-auto max-w-4xl space-y-8 z-10">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">What You Leave With</h2>
            <p className="text-lg text-muted-foreground">
              Every sprint delivers actionable deliverables, not just notes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4 p-6 rounded-lg border bg-card">
              <h3 className="font-semibold text-lg">Templates & Frameworks</h3>
              <p className="text-muted-foreground">
                Ready-to-use templates you can implement immediately. No starting from scratch.
              </p>
            </div>
            <div className="space-y-4 p-6 rounded-lg border bg-card">
              <h3 className="font-semibold text-lg">Execution Plan</h3>
              <p className="text-muted-foreground">
                A clear roadmap with milestones, timelines, and accountability checkpoints.
              </p>
            </div>
            <div className="space-y-4 p-6 rounded-lg border bg-card">
              <h3 className="font-semibold text-lg">Strategic Introductions</h3>
              <p className="text-muted-foreground">
                Connections to investors, customers, partners, or advisors relevant to your goals.
              </p>
            </div>
            <div className="space-y-4 p-6 rounded-lg border bg-card">
              <h3 className="font-semibold text-lg">Follow-up Support</h3>
              <p className="text-muted-foreground">
                Review sessions, office hours, and continued access to facilitators and peers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <PartnersStrip />

      <section className="relative w-full py-16 md:py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/bg2.png)',
          }}
        />
        <div className="relative container mx-auto max-w-2xl text-center space-y-6 z-10">
          <h2 className="text-3xl md:text-4xl font-bold">Stay Updated</h2>
          <p className="text-lg text-muted-foreground">
            Get notified about new sprints, exclusive events, and resources for founders
          </p>
          <div className="flex justify-center">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  )
}

