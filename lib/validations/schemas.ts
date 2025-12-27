import { z } from "zod"

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  honeypot: z.string().optional(),
})

export const membershipWaitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  role: z.string().min(1, "Please enter your role"),
  city: z.string().min(1, "Please enter your city"),
  building: z.string().min(1, "Please tell us what you're building"),
  honeypot: z.string().optional(),
})

export const corporateInquirySchema = z.object({
  company: z.string().min(1, "Company name is required"),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  role: z.string().min(1, "Role is required"),
  teamSize: z.string().min(1, "Team size is required"),
  objective: z.string().min(1, "Please describe your objective"),
  timeline: z.string().min(1, "Timeline is required"),
  honeypot: z.string().optional(),
})

export const partnerInquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  partnershipType: z.string().min(1, "Partnership type is required"),
  message: z.string().min(10, "Please provide more details (minimum 10 characters)"),
  honeypot: z.string().optional(),
})

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Please provide more details (minimum 10 characters)"),
  honeypot: z.string().optional(),
})

