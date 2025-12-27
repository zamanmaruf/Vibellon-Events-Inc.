"use server"

import { membershipWaitlistSchema } from "@/lib/validations/schemas"
import { prisma } from "@/lib/db/prisma"
import { rateLimit } from "@/lib/utils/rate-limit"
import { sendContactEmail } from "@/lib/email/send-email"

export async function joinMembershipWaitlist(formData: FormData) {
  const rawData = {
    email: formData.get("email"),
    role: formData.get("role"),
    city: formData.get("city"),
    building: formData.get("building"),
    honeypot: formData.get("website"), // honeypot field
  }

  // Check honeypot
  if (rawData.honeypot) {
    return { success: true } // Silent fail for bots
  }

  // Rate limiting
  const email = rawData.email as string
  const limit = rateLimit(`membership:${email}`)
  if (!limit.allowed) {
    return {
      error: "Too many requests. Please try again later.",
    }
  }

  // Validation
  const validation = membershipWaitlistSchema.safeParse(rawData)
  if (!validation.success) {
    return {
      error: validation.error.errors[0]?.message || "Invalid input",
    }
  }

  try {
    // Save to database
    await prisma.subscriber.upsert({
      where: { email: validation.data.email },
      update: {
        source: "membership",
        role: validation.data.role,
        city: validation.data.city,
      },
      create: {
        email: validation.data.email,
        source: "membership",
        role: validation.data.role,
        city: validation.data.city,
      },
    })

    // Store additional data in Inquiry table as meta
    await prisma.inquiry.create({
      data: {
        type: "membership",
        name: validation.data.email, // Using email as name since we don't have name field
        email: validation.data.email,
        message: validation.data.building,
        meta: JSON.stringify({
          role: validation.data.role,
          city: validation.data.city,
        }),
      },
    })

    // Send email with membership waitlist details
    const emailResult = await sendContactEmail({
      name: validation.data.email, // Using email as name since we don't have name field
      email: validation.data.email,
      message: validation.data.building,
      subject: "New Membership Waitlist Signup",
      additionalFields: {
        Role: validation.data.role,
        City: validation.data.city,
      },
    })

    // If email fails, log but don't fail the form submission
    if (!emailResult.success) {
      console.error("Failed to send membership waitlist email:", emailResult.error)
      // Still return success since the subscription was saved to the database
    }

    return { success: true }
  } catch (error) {
    console.error("Membership waitlist error:", error)
    return {
      error: "Something went wrong. Please try again.",
    }
  }
}

