"use client"

import { useState, useTransition } from "react"
import { subscribeToNewsletter } from "@/actions/newsletter"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isPending, startTransition] = useTransition()
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMessage(null)

    const formData = new FormData()
    formData.append("email", email)
    formData.append("website", "") // honeypot

    startTransition(async () => {
      const result = await subscribeToNewsletter(formData)
      if (result.success) {
        setMessage({ type: "success", text: "Thank you! You've been subscribed." })
        setEmail("")
      } else {
        setMessage({ type: "error", text: result.error || "Something went wrong." })
      }
    })
  }

  return (
    <div className="space-y-2">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden="true" />
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isPending}
          className="flex-1"
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
      {message && (
        <p className={`text-sm ${message.type === "success" ? "text-foreground" : "text-destructive"}`}>
          {message.text}
        </p>
      )}
    </div>
  )
}

