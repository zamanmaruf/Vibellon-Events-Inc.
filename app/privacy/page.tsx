export const metadata = {
  title: "Privacy Policy",
  description: "Vibellion Events Inc. Privacy Policy",
}

export default function PrivacyPage() {
  return (
    <div className="relative w-full py-12 md:py-16">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/bg.png)',
        }}
      />
      <div className="relative container mx-auto max-w-3xl space-y-8 prose prose-slate z-10">
        <h1>Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2>Introduction</h2>
          <p>
            Vibellion Events Inc. ("we", "our", or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
            when you use our website and services.
          </p>
        </section>

        <section>
          <h2>Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul>
            <li>Name and email address when you subscribe to our newsletter or join a waitlist</li>
            <li>Contact information when you submit inquiries or contact forms</li>
            <li>Information about your role, company, and interests when relevant</li>
            <li>Payment information (processed through third-party payment processors)</li>
          </ul>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Communicate with you about events, workshops, and updates</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send you newsletters and promotional communications (with your consent)</li>
            <li>Process payments and registrations</li>
            <li>Analyze usage and trends to improve our website and services</li>
          </ul>
        </section>

        <section>
          <h2>Data Sharing</h2>
          <p>
            We do not sell your personal information. We may share your information with:
          </p>
          <ul>
            <li>Service providers who assist us in operating our website and services</li>
            <li>Event registration platforms (e.g., Eventbrite, Luma) when you register for events</li>
            <li>Legal authorities when required by law</li>
          </ul>
        </section>

        <section>
          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal 
            information. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section>
          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access and receive a copy of your personal information</li>
            <li>Correct inaccurate or incomplete information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:privacy@vibellion.com" className="text-primary hover:underline">
              privacy@vibellion.com
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}

