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

export function CorporateInquiryForm() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    role: "",
    teamSize: "",
    objective: "",
    timeline: "",
  })
  const [isPending, startTransition] = useTransition()
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMessage(null)

    const form = new FormData()
    form.append("company", formData.company)
    form.append("name", formData.name)
    form.append("email", formData.email)
    form.append("role", formData.role)
    form.append("teamSize", formData.teamSize)
    form.append("objective", formData.objective)
    form.append("timeline", formData.timeline)
    form.append("website", "") // honeypot

    startTransition(async () => {
      const result = await submitInquiry("corporate", form)
      if (result.success) {
        setMessage({ type: "success", text: "Thank you! We'll be in touch soon." })
        setFormData({
          company: "",
          name: "",
          email: "",
          role: "",
          teamSize: "",
          objective: "",
          timeline: "",
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
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            required
            disabled={isPending}
          />
        </div>
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
      </div>
      <div className="grid md:grid-cols-2 gap-4">
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
          <Label htmlFor="role">Your Role</Label>
          <Input
            id="role"
            type="text"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            required
            disabled={isPending}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="teamSize">Team Size</Label>
        <Select
          value={formData.teamSize}
          onValueChange={(value) => setFormData({ ...formData, teamSize: value })}
          disabled={isPending}
        >
          <SelectTrigger id="teamSize">
            <SelectValue placeholder="Select team size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1-10">1-10</SelectItem>
            <SelectItem value="11-50">11-50</SelectItem>
            <SelectItem value="51-200">51-200</SelectItem>
            <SelectItem value="200+">200+</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="objective">Objective</Label>
        <Textarea
          id="objective"
          value={formData.objective}
          onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
          required
          disabled={isPending}
          rows={4}
          placeholder="What are you looking to achieve with a corporate workshop?"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="timeline">Timeline</Label>
        <Select
          value={formData.timeline}
          onValueChange={(value) => setFormData({ ...formData, timeline: value })}
          disabled={isPending}
        >
          <SelectTrigger id="timeline">
            <SelectValue placeholder="Select timeline" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asap">ASAP</SelectItem>
            <SelectItem value="1-month">Within 1 month</SelectItem>
            <SelectItem value="2-3-months">2-3 months</SelectItem>
            <SelectItem value="3-6-months">3-6 months</SelectItem>
            <SelectItem value="exploring">Just exploring</SelectItem>
          </SelectContent>
        </Select>
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

