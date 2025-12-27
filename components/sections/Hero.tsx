import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative w-full py-24 md:py-32">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/bg.png)',
        }}
      />
      <div className="relative container mx-auto max-w-3xl text-center space-y-8 z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Outcome-Driven Business Events for Serious Operators
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          Business sprints and curated rooms. Operator-led. Leave with it done.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button asChild size="lg">
            <Link href="/events">View Upcoming Sprints</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/corporate">Corporate Workshops</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

