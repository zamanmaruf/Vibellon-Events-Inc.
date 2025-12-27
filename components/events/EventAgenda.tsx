import type { EventAgendaItem } from "@/lib/content/events"

interface EventAgendaProps {
  agenda: EventAgendaItem[]
}

export function EventAgenda({ agenda }: EventAgendaProps) {
  return (
    <div className="space-y-4">
      {agenda.map((item, index) => (
        <div key={index} className="flex gap-4">
          <div className="flex-shrink-0 w-24 text-sm font-medium text-muted-foreground">
            {item.time}
          </div>
          <div className="flex-1 space-y-1">
            <h4 className="font-semibold">{item.title}</h4>
            {item.details && (
              <p className="text-sm text-muted-foreground">{item.details}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

