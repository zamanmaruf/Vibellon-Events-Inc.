"use server"

import { newsletterSchema } from "@/lib/validations/schemas"
import { prisma } from "@/lib/db/prisma"
import { rateLimit } from "@/lib/utils/rate-limit"

export async function subscribeToNewsletter(formData: FormData) {
  const rawData = {
    email: formData.get("email"),
    honeypot: formData.get("website"), // honeypot field
  }

  // Check honeypot
  if (rawData.honeypot) {
    return { success: true } // Silent fail for bots
  }

  // Rate limiting
  const email = rawData.email as string
  const limit = rateLimit(`newsletter:${email}`)
  if (!limit.allowed) {
    return {
      error: "Too many requests. Please try again later.",
    }
  }

  // Validation
  const validation = newsletterSchema.safeParse(rawData)
  if (!validation.success) {
    return {
      error: validation.error.errors[0]?.message || "Invalid input",
    }
  }

  try {
    await prisma.subscriber.upsert({
      where: { email: validation.data.email },
      update: {
        source: "newsletter",
      },
      create: {
        email: validation.data.email,
        source: "newsletter",
      },
    })

    return { success: true }
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return {
      error: "Something went wrong. Please try again.",
    }
  }
}

