export const metadata = {
  title: "Terms of Service",
  description: "Vibellion Events Inc. Terms of Service",
}

export default function TermsPage() {
  return (
    <div className="relative w-full py-12 md:py-16">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/bg2.png)',
        }}
      />
      <div className="relative container mx-auto max-w-3xl space-y-8 prose prose-slate z-10">
        <h1>Terms of Service</h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2>Agreement to Terms</h2>
          <p>
            By accessing and using Vibellion Events Inc.'s website and services, you agree to be 
            bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section>
          <h2>Services</h2>
          <p>
            Vibellion Events Inc. provides business events, workshops, sprints, and related services. 
            We reserve the right to modify, suspend, or discontinue any service at any time.
          </p>
        </section>

        <section>
          <h2>Event Registration and Payment</h2>
          <p>
            Event registrations are subject to availability. Payment is required at the time of 
            registration unless otherwise specified. All prices are in CAD unless otherwise stated.
          </p>
        </section>

        <section>
          <h2>Cancellation and Refunds</h2>
          <p>
            Our refund policy is detailed in our{" "}
            <a href="/refund-policy" className="text-primary hover:underline">
              Refund Policy
            </a>
            . Generally, full refunds are available up to 7 days before an event.
          </p>
        </section>

        <section>
          <h2>Code of Conduct</h2>
          <p>
            All participants in Vibellion events must adhere to our{" "}
            <a href="/code-of-conduct" className="text-primary hover:underline">
              Code of Conduct
            </a>
            . Violations may result in removal from events without refund.
          </p>
        </section>

        <section>
          <h2>Intellectual Property</h2>
          <p>
            All content, materials, and templates provided during events are the property of 
            Vibellion Events Inc. or our partners. You may use materials for your own business 
            purposes but may not redistribute or resell them.
          </p>
        </section>

        <section>
          <h2>Limitation of Liability</h2>
          <p>
            Vibellion Events Inc. is not liable for any indirect, incidental, or consequential 
            damages arising from your use of our services. Our total liability is limited to the 
            amount you paid for the specific service in question.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have questions about these Terms, please contact us at{" "}
            <a href="mailto:legal@vibellion.com" className="text-primary hover:underline">
              legal@vibellion.com
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}

