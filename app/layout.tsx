import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Analytics } from "@/components/Analytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Vibellion Events Inc. | Outcome-Driven Business Events",
    template: "%s | Vibellion Events Inc.",
  },
  description: "Outcome-driven business sprints and curated rooms. Leave with it done.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "/",
    siteName: "Vibellion Events Inc.",
    title: "Vibellion Events Inc. | Outcome-Driven Business Events",
    description: "Outcome-driven business sprints and curated rooms. Leave with it done.",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Vibellion Events Inc.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibellion Events Inc.",
    description: "Outcome-driven business sprints and curated rooms.",
    images: ["/og-default.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

