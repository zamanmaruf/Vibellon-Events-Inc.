import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const RECIPIENT_EMAIL = "vibellioneventsinc@gmail.com"

interface SendEmailParams {
  from?: string
  name: string
  email: string
  message: string
  subject?: string
}

export async function sendContactEmail({
  from,
  name,
  email,
  message,
  subject = "New Contact Form Submission",
}: SendEmailParams) {
  // If RESEND_API_KEY is not set, log the email (useful for development)
  if (!process.env.RESEND_API_KEY) {
    console.log("=== EMAIL (RESEND_API_KEY not set) ===")
    console.log("To:", RECIPIENT_EMAIL)
    console.log("From:", `${name} <${email}>`)
    console.log("Subject:", subject)
    console.log("Message:", message)
    console.log("=====================================")
    return { success: true, id: "dev-mode" }
  }

  try {
    // Use Resend's default domain if no custom from address is configured
    // Users should set RESEND_FROM_EMAIL env var with a verified domain
    const fromEmail = process.env.RESEND_FROM_EMAIL || from || "onboarding@resend.dev"
    
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `${subject} from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return { success: false, error: error.message }
    }

    return { success: true, id: data?.id }
  } catch (error) {
    console.error("Email sending error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send email",
    }
  }
}

