import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import type { Event } from "@/lib/content/events"

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  const startDate = new Date(event.startDateISO)
  const formattedDate = format(startDate, "MMM d, yyyy")
  const formattedTime = format(startDate, "h:mm a")

  const priceRange = (() => {
    const prices = [event.price.standard, event.price.pro, event.price.vip].filter(
      (p): p is number => p !== null
    )
    if (prices.length === 0) return "Free"
    const min = Math.min(...prices)
    const max = Math.max(...prices)
    return min === max ? `$${min} ${event.price.currency}` : `$${min}-${max} ${event.price.currency}`
  })()

  return (
    <Card className="flex flex-col h-full bg-card/80 backdrop-blur-sm border-border/50">
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <Badge variant="outline">
            {event.type === "sprint" && "Sprint"}
            {event.type === "networking" && "Networking"}
            {event.type === "workshop" && "Workshop"}
          </Badge>
          <Badge variant="default">Outcome-driven</Badge>
        </div>
        <CardTitle className="text-xl">{event.title}</CardTitle>
        {event.subtitle && <CardDescription>{event.subtitle}</CardDescription>}
      </CardHeader>
      <CardContent className="flex-1 space-y-4">
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>{formattedDate}</span>
            <span>•</span>
            <span>{formattedTime}</span>
            <span className="text-xs">({event.timezone})</span>
          </div>
          <div>
            {event.format === "online" ? "Online" : event.format === "in-person" ? event.city || "In-Person" : "Hybrid"}
          </div>
          <div className="font-medium text-foreground">From {priceRange}</div>
        </div>
        <p className="text-sm line-clamp-2">{event.outcome}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/events/${event.slug}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

