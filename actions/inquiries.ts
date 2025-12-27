"use server"

import {
  corporateInquirySchema,
  partnerInquirySchema,
  contactSchema,
} from "@/lib/validations/schemas"
import { prisma } from "@/lib/db/prisma"
import { rateLimit } from "@/lib/utils/rate-limit"
import { sendContactEmail } from "@/lib/email/send-email"

export async function submitInquiry(
  type: "corporate" | "partner" | "contact",
  formData: FormData
) {
  const email = formData.get("email") as string
  const honeypot = formData.get("website") as string

  // Check honeypot
  if (honeypot) {
    return { success: true } // Silent fail for bots
  }

  // Rate limiting
  const limit = rateLimit(`inquiry:${type}:${email}`)
  if (!limit.allowed) {
    return {
      error: "Too many requests. Please try again later.",
    }
  }

  let validation

  if (type === "corporate") {
    const rawData = {
      company: formData.get("company"),
      name: formData.get("name"),
      email: formData.get("email"),
      role: formData.get("role"),
      teamSize: formData.get("teamSize"),
      objective: formData.get("objective"),
      timeline: formData.get("timeline"),
      honeypot: formData.get("website"),
    }

    validation = corporateInquirySchema.safeParse(rawData)
    if (validation.success) {
      try {
        await prisma.inquiry.create({
          data: {
            type: "corporate",
            name: validation.data.name,
            email: validation.data.email,
            company: validation.data.company,
            message: validation.data.objective,
            meta: JSON.stringify({
              role: validation.data.role,
              teamSize: validation.data.teamSize,
              timeline: validation.data.timeline,
            }),
          },
        })
        return { success: true }
      } catch (error) {
        console.error("Corporate inquiry error:", error)
        return { error: "Something went wrong. Please try again." }
      }
    }
  } else if (type === "partner") {
    const rawData = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      partnershipType: formData.get("partnershipType"),
      message: formData.get("message"),
      honeypot: formData.get("website"),
    }

    validation = partnerInquirySchema.safeParse(rawData)
    if (validation.success) {
      try {
        await prisma.inquiry.create({
          data: {
            type: "partner",
            name: validation.data.name,
            email: validation.data.email,
            company: validation.data.company || null,
            message: validation.data.message,
            meta: JSON.stringify({
              partnershipType: validation.data.partnershipType,
            }),
          },
        })
        return { success: true }
      } catch (error) {
        console.error("Partner inquiry error:", error)
        return { error: "Something went wrong. Please try again." }
      }
    }
  } else {
    // contact
    const rawData = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      honeypot: formData.get("website"),
    }

    validation = contactSchema.safeParse(rawData)
    if (validation.success) {
      try {
        // Save to database
        await prisma.inquiry.create({
          data: {
            type: "contact",
            name: validation.data.name,
            email: validation.data.email,
            message: validation.data.message,
          },
        })

        // Send email
        const emailResult = await sendContactEmail({
          name: validation.data.name,
          email: validation.data.email,
          message: validation.data.message,
          subject: "New Contact Form Submission",
        })

        // If email fails, log but don't fail the form submission
        if (!emailResult.success) {
          console.error("Failed to send contact email:", emailResult.error)
          // Still return success since the inquiry was saved to the database
        }

        return { success: true }
      } catch (error) {
        console.error("Contact inquiry error:", error)
        return { error: "Something went wrong. Please try again." }
      }
    }
  }

  if (!validation.success) {
    return {
      error: validation.error.errors[0]?.message || "Invalid input",
    }
  }

  return { success: true }
}

