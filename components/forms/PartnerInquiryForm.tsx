"use client"

import { useState, useTransition } from "react"
import { submitInquiry } from "@/actions/inquiries"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function PartnerInquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    partnershipType: "",
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
    form.append("company", formData.company)
    form.append("partnershipType", formData.partnershipType)
    form.append("message", formData.message)
    form.append("website", "") // honeypot

    startTransition(async () => {
      const result = await submitInquiry("partner", form)
      if (result.success) {
        setMessage({ type: "success", text: "Thank you! We'll be in touch soon." })
        setFormData({
          name: "",
          email: "",
          company: "",
          partnershipType: "",
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
          <Label htmlFor="name">Your Name</Label>
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
        <Label htmlFor="company">Company/Organization (Optional)</Label>
        <Input
          id="company"
          type="text"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          disabled={isPending}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="partnershipType">Partnership Type</Label>
        <Select
          value={formData.partnershipType}
          onValueChange={(value) => setFormData({ ...formData, partnershipType: value })}
          disabled={isPending}
        >
          <SelectTrigger id="partnershipType">
            <SelectValue placeholder="Select partnership type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="distribution">Distribution</SelectItem>
            <SelectItem value="speakers">Speakers</SelectItem>
            <SelectItem value="sponsorship">Sponsorship</SelectItem>
            <SelectItem value="venues">Venues</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Tell us more</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          disabled={isPending}
          rows={5}
          placeholder="How would you like to partner with Vibellion?"
        />
      </div>
      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? "Submitting..." : "Submit Inquiry"}
      </Button>
      {message && (
        <p className={`text-sm ${message.type === "success" ? "text-foreground" : "text-destructive"}`}>
          {message.text}
        </p>
      )}
    </form>
  )
}

