import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src="/VibellionLogo.png"
              alt="Vibellion Events Inc."
              width={680}
              height={170}
              className="h-[136px] w-auto"
            />
            <p className="text-sm text-muted-foreground">
              Canada's most trusted business-event engine. Outcome-driven, curated rooms, operator-led.
            </p>
            <p className="text-sm text-muted-foreground">
              1800 Argyle Street<br />
              Halifax, Nova Scotia, Canada
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Events</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-foreground transition-colors">
                  All Events
                </Link>
              </li>
              <li>
                <Link href="/events?type=sprint" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sprints
                </Link>
              </li>
              <li>
                <Link href="/events?type=networking" className="text-muted-foreground hover:text-foreground transition-colors">
                  Networking
                </Link>
              </li>
              <li>
                <Link href="/corporate" className="text-muted-foreground hover:text-foreground transition-colors">
                  Corporate Workshops
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-muted-foreground hover:text-foreground transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-muted-foreground hover:text-foreground transition-colors">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/code-of-conduct" className="text-muted-foreground hover:text-foreground transition-colors">
                  Code of Conduct
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vibellion Events Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://twitter.com/vibellion"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com/company/vibellion"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

