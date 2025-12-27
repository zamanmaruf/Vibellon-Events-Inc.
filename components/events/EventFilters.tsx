"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils/cn"

export function EventFilters() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const selectedType = searchParams.get("type") || "all"

  const filters = [
    { value: "all", label: "All Events" },
    { value: "sprint", label: "Online Sprints" },
    { value: "networking", label: "Networking" },
    { value: "workshop", label: "Corporate Workshops" },
  ]

  const handleFilter = (type: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (type === "all") {
      params.delete("type")
    } else {
      params.set("type", type)
    }
    router.push(`/events?${params.toString()}`)
  }

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <Button
          key={filter.value}
          variant={selectedType === filter.value ? "default" : "outline"}
          size="sm"
          onClick={() => handleFilter(filter.value)}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  )
}

