"use client"

import { useState, useTransition } from "react"
import { joinMembershipWaitlist } from "@/actions/membership"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function MembershipWaitlistForm() {
  const [formData, setFormData] = useState({
    email: "",
    role: "",
    city: "",
    building: "",
  })
  const [isPending, startTransition] = useTransition()
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMessage(null)

    const form = new FormData()
    form.append("email", formData.email)
    form.append("role", formData.role)
    form.append("city", formData.city)
    form.append("building", formData.building)
    form.append("website", "") // honeypot

    startTransition(async () => {
      const result = await joinMembershipWaitlist(form)
      if (result.success) {
        setMessage({ type: "success", text: "Thank you! You've been added to the waitlist." })
        setFormData({ email: "", role: "", city: "", building: "" })
      } else {
        setMessage({ type: "error", text: result.error || "Something went wrong." })
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden="true" />
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
      <div className="space-y-2">
        <Label htmlFor="role">Role</Label>
        <Input
          id="role"
          type="text"
          placeholder="e.g., Founder, CEO, Operator"
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          required
          disabled={isPending}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="city">City</Label>
        <Input
          id="city"
          type="text"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          required
          disabled={isPending}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="building">What are you building?</Label>
        <Textarea
          id="building"
          value={formData.building}
          onChange={(e) => setFormData({ ...formData, building: e.target.value })}
          required
          disabled={isPending}
          rows={4}
        />
      </div>
      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? "Joining..." : "Join Waitlist"}
      </Button>
      {message && (
        <p className={`text-sm ${message.type === "success" ? "text-foreground" : "text-destructive"}`}>
          {message.text}
        </p>
      )}
    </form>
  )
}

