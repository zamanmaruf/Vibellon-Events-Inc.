"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils/cn"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/80 transition-colors",
        isScrolled && "shadow-sm"
      )}
    >
      <div className="container flex h-28 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/VibellionLogo.png"
            alt="Vibellion Events Inc."
            width={340}
            height={85}
            className="h-24 w-auto"
            priority
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link href="/events" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Events
          </Link>
          <Link href="/corporate" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Corporate
          </Link>
          <Link href="/membership" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Membership
          </Link>
          <Link href="/partners" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Partners
          </Link>
          <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="sm" className="hidden md:flex">
            <Link href="/corporate">Corporate Workshops</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/events">View Upcoming Sprints</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

