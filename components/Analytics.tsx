"use client"

import { useEffect } from "react"

export function Analytics() {
  useEffect(() => {
    const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN
    if (!domain || typeof window === "undefined") return

    const script = document.createElement("script")
    script.defer = true
    script.dataset.domain = domain
    script.src = "https://plausible.io/js/script.js"
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return null
}

