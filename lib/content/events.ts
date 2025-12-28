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

export async function getEvents(): Promise<Event[]> {
  // In a real app, this could read from a CMS or database
  // For now, we'll load from JSON files using Node.js fs
  const events: Event[] = []
  
  try {
    const fs = await import("fs/promises")
    const path = await import("path")
    
    const contentDir = path.join(process.cwd(), "content", "events")
    const files = await fs.readdir(contentDir)
    
    for (const file of files) {
      if (file.endsWith(".json")) {
        const filePath = path.join(contentDir, file)
        const fileContent = await fs.readFile(filePath, "utf-8")
        const eventData = JSON.parse(fileContent)
        events.push(eventSchema.parse(eventData))
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

