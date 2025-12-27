import { ContactForm } from "@/components/forms/ContactForm"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Contact",
  description: "Get in touch with Vibellion Events. General inquiries, questions, and feedback.",
}

export default function ContactPage() {
  return (
    <div className="relative w-full py-12 md:py-16">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/bg.png)',
        }}
      />
      <div className="relative container mx-auto max-w-3xl space-y-12 z-10">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            Have questions? We're here to help.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto bg-card/60 backdrop-blur-md border-border/50 shadow-lg">
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

