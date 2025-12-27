"use client"

import { useState, useTransition } from "react"
import { submitInquiry } from "@/actions/inquiries"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isPending, startTransition] = useTransition()
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMessage(null)

    const form = new FormData()
    form.append("name", formData.name)
    form.append("email", formData.email)
    form.append("message", formData.message)
    form.append("website", "") // honeypot

    startTransition(async () => {
      const result = await submitInquiry("contact", form)
      if (result.success) {
        setMessage({ type: "success", text: "Thank you! We'll get back to you soon." })
        setFormData({
          name: "",
          email: "",
          message: "",
        })
      } else {
        setMessage({ type: "error", text: result.error || "Something went wrong." })
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden="true" />
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            disabled={isPending}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            disabled={isPending}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          disabled={isPending}
          rows={6}
        />
      </div>
      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? "Sending..." : "Send Message"}
      </Button>
      {message && (
        <p className={`text-sm ${message.type === "success" ? "text-foreground" : "text-destructive"}`}>
          {message.text}
        </p>
      )}
    </form>
  )
}

