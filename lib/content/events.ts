import { z } from "zod"

export const eventAgendaItemSchema = z.object({
  time: z.string(),
  title: z.string(),
  details: z.string().optional(),
})

export const eventPriceSchema = z.object({
  currency: z.string().default("CAD"),
  standard: z.number().nullable(),
  pro: z.number().nullable(),
  vip: z.number().nullable(),
})

export const eventSchema = z.object({
  slug: z.string(),
  title: z.string(),
  subtitle: z.string().optional(),
  type: z.enum(["sprint", "networking", "workshop"]),
  format: z.enum(["online", "in-person", "hybrid"]),
  city: z.string().optional(),
  startDateISO: z.string(),
  endDateISO: z.string(),
  timezone: z.string().default("America/Halifax"),
  price: eventPriceSchema,
  outcome: z.string(),
  deliverables: z.array(z.string()),
  agenda: z.array(eventAgendaItemSchema),
  whoItsFor: z.array(z.string()),
  whoItsNotFor: z.array(z.string()).optional(),
  facilitator: z.object({
    name: z.string(),
    title: z.string().optional(),
    bio: z.string().optional(),
    image: z.string().optional(),
  }),
  registerUrl: z.string(),
  faq: z.array(z.object({
    question: z.string(),
    answer: z.string(),
  })).optional(),
  tags: z.array(z.string()).optional(),
})

export type Event = z.infer<typeof eventSchema>
export type EventAgendaItem = z.infer<typeof eventAgendaItemSchema>
export type EventPrice = z.infer<typeof eventPriceSchema>

// Import all event JSON files statically to ensure they're bundled
import bankInvestorReadySprint from "@/content/events/bank-investor-ready-sprint.json"
import curatedFounderNetworkingNight from "@/content/events/curated-founder-networking-night.json"
import financialModelBasicsSprint from "@/content/events/financial-model-basics-sprint.json"
import fundingGradeBusinessPlanSprint from "@/content/events/funding-grade-business-plan-sprint.json"
import gtmSprint from "@/content/events/gtm-sprint.json"
import pitchDeckSprint from "@/content/events/pitch-deck-sprint.json"
import zeroToFirst10CustomersSprint from "@/content/events/zero-to-first-10-customers-sprint.json"

const eventFiles = [
  bankInvestorReadySprint,
  curatedFounderNetworkingNight,
  financialModelBasicsSprint,
  fundingGradeBusinessPlanSprint,
  gtmSprint,
  pitchDeckSprint,
  zeroToFirst10CustomersSprint,
]

export async function getEvents(): Promise<Event[]> {
  const events: Event[] = []
  
  try {
    for (const eventData of eventFiles) {
      try {
        events.push(eventSchema.parse(eventData))
      } catch (parseError) {
        console.error(`Error parsing event:`, eventData.slug || "unknown", parseError)
      }
    }
  } catch (error) {
    console.error("Error loading events:", error)
  }
  
  return events
}

export async function getEventBySlug(slug: string): Promise<Event | null> {
  const events = await getEvents()
  return events.find(event => event.slug === slug) || null
}

export function getUpcomingEvents(events: Event[]): Event[] {
  const now = new Date()
  return events
    .filter(event => new Date(event.startDateISO) > now)
    .sort((a, b) => new Date(a.startDateISO).getTime() - new Date(b.startDateISO).getTime())
}

