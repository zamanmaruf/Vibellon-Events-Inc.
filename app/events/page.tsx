import { EventFilters } from "@/components/events/EventFilters"
import { EventCard } from "@/components/events/EventCard"
import { getEvents, getUpcomingEvents } from "@/lib/content/events"

interface EventsPageProps {
  searchParams: Promise<{ type?: string }>
}

export const metadata = {
  title: "Events",
  description: "Browse upcoming business sprints, networking events, and corporate workshops from Vibellion Events.",
}

export default async function EventsPage({ searchParams }: EventsPageProps) {
  const params = await searchParams
  const allEvents = await getEvents()
  const upcomingEvents = getUpcomingEvents(allEvents)

  const filteredEvents = params.type && params.type !== "all"
    ? upcomingEvents.filter((event) => {
        if (params.type === "workshop") {
          return event.type === "workshop"
        }
        return event.type === params.type
      })
    : upcomingEvents

  return (
    <div className="relative w-full py-12 md:py-16">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/bg.png)',
        }}
      />
      <div className="relative container mx-auto max-w-6xl space-y-12 z-10">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Events</h1>
          <p className="text-lg text-muted-foreground">
            Outcome-driven business sprints and curated networking events
          </p>
        </div>

        <EventFilters />

        {filteredEvents.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-foreground font-medium">No upcoming events found.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

