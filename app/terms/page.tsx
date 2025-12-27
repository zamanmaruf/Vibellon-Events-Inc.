import Link from "next/link"

export const metadata = {
  title: "Terms of Service",
  description: "Vibellion Events Inc. Terms of Service - Comprehensive terms governing the use of our website and services.",
}

export default function TermsPage() {
  const lastUpdated = new Date().toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="relative w-full py-12 md:py-16">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/bg2.png)',
        }}
      />
      <div className="relative container mx-auto max-w-4xl space-y-8 prose prose-slate max-w-none z-10">
        <div className="bg-card/90 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-border shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground text-lg mb-8">Last updated: {lastUpdated}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              By accessing and using Vibellion Events Inc.'s ("Vibellion", "we", "our", "us") website, 
              services, or attending our events, you agree to be bound by these Terms of Service ("Terms"). 
              If you do not agree to these Terms, please do not access or use our services.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              These Terms constitute a legally binding agreement between you and Vibellion Events Inc. 
              We may modify these Terms at any time, and your continued use of our services after such 
              modifications constitutes acceptance of the updated Terms.
            </p>
            <p className="text-sm text-muted-foreground mt-4 italic">
              <strong>Note:</strong> These Terms are not intended to provide legal advice. If you have 
              specific legal questions, please consult with a legal professional.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Definitions</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>"Services"</strong> refers to all services provided by Vibellion, including but not limited to events, workshops, sprints, networking sessions, corporate services, and website access</li>
              <li><strong>"Events"</strong> refers to any in-person or virtual event, workshop, sprint, networking session, or related activity organized by Vibellion</li>
              <li><strong>"Content"</strong> refers to all materials, information, text, graphics, logos, and other content provided through our services</li>
              <li><strong>"User"</strong> or <strong>"You"</strong> refers to any individual or entity accessing or using our services</li>
              <li><strong>"Registration"</strong> refers to the process of signing up for or purchasing access to an event or service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Eligibility and Acceptance</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To use our services, you must:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Be at least 18 years of age or have parental/guardian consent</li>
              <li>Have the legal capacity to enter into binding agreements</li>
              <li>Provide accurate and complete information when registering or using our services</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not be prohibited from using our services under applicable law</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              By using our services, you represent and warrant that you meet these eligibility requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Services Description</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Vibellion Events Inc. provides various business-focused events and services, including:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">4.1 Business Sprints</h3>
            <p className="text-muted-foreground leading-relaxed">
              Outcome-driven workshops focused on specific business deliverables (e.g., business plans, pitch decks, 
              financial models, go-to-market strategies). These are structured, facilitator-led sessions designed 
              to produce actionable outcomes.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">4.2 Networking Events</h3>
            <p className="text-muted-foreground leading-relaxed">
              Curated networking sessions bringing together entrepreneurs, operators, and business professionals 
              in structured, meaningful environments.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">4.3 Corporate Workshops</h3>
            <p className="text-muted-foreground leading-relaxed">
              Customized workshops and training sessions designed for corporate teams and organizations.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">4.4 Membership Services</h3>
            <p className="text-muted-foreground leading-relaxed">
              Exclusive membership programs providing ongoing access to events, resources, and community.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-6">
              We reserve the right to modify, suspend, or discontinue any service, event, or feature at any 
              time without prior notice. We do not guarantee that any service will be available at all times 
              or that events will proceed as scheduled.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Account Registration and Security</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Some services may require you to create an account. When creating an account, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security and confidentiality of your account credentials</li>
              <li>Accept responsibility for all activities that occur under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              You are responsible for maintaining the confidentiality of your account password and for all 
              activities that occur under your account. We are not liable for any loss or damage arising from 
              your failure to protect your account information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Event Registration and Payment</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">6.1 Registration Process</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Event registrations are subject to availability and our acceptance. By registering for an event, 
              you agree to pay the specified fees and comply with these Terms. We reserve the right to refuse 
              or cancel any registration at our sole discretion.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">6.2 Payment Terms</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Currency:</strong> All prices are in Canadian Dollars (CAD) unless otherwise stated</li>
              <li><strong>Payment Methods:</strong> We accept major credit cards and other payment methods as specified during registration</li>
              <li><strong>Payment Timing:</strong> Payment is required at the time of registration unless alternative arrangements are made in writing</li>
              <li><strong>Processing Fees:</strong> Payment processing fees may apply and are non-refundable</li>
              <li><strong>Taxes:</strong> All applicable taxes (GST, HST, PST as applicable) are included or added as required by law</li>
              <li><strong>Payment Processing:</strong> Payments are processed securely through third-party payment processors. We do not store complete credit card information</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">6.3 Pricing</h3>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to change prices at any time. Price changes will not affect registrations 
              already completed. Promotional pricing is valid only for the specified period and conditions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Cancellation and Refunds</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our cancellation and refund policies are detailed in our{" "}
              <a href="/refund-policy" className="text-primary hover:underline">
                Refund Policy
              </a>
              . By registering for an event, you agree to abide by these policies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Key points:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Refund eligibility depends on the timing of cancellation relative to the event date</li>
              <li>All refund requests must be submitted in writing through our{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  contact page
                </Link>
              </li>
              <li>Processing times may vary by payment method</li>
              <li>We reserve the right to refuse refunds in cases of Code of Conduct violations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Code of Conduct</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All participants in Vibellion events must adhere to our{" "}
              <a href="/code-of-conduct" className="text-primary hover:underline">
                Code of Conduct
              </a>
              . Violations may result in immediate removal from events without refund, and may result in 
              permanent ban from future events.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to refuse service, remove participants, or cancel registrations of 
              anyone who violates our Code of Conduct or engages in behavior we deem inappropriate, 
              harmful, or disruptive.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">9. Intellectual Property Rights</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">9.1 Ownership</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All content, materials, templates, frameworks, and intellectual property provided during events 
              or through our services are the exclusive property of Vibellion Events Inc. or our licensors. 
              This includes but is not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Presentation slides, handouts, and workshop materials</li>
              <li>Frameworks, templates, and methodologies</li>
              <li>Website content, logos, trademarks, and branding</li>
              <li>Video recordings, audio recordings, and documentation</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">9.2 License to Use Materials</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Upon registration and attendance at an event, you are granted a limited, non-exclusive, 
              non-transferable license to use materials provided during that event for your own personal 
              or internal business purposes. This license is subject to the following restrictions:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>You may not redistribute, resell, or share materials with third parties</li>
              <li>You may not create derivative works for commercial distribution</li>
              <li>You may not remove copyright notices or proprietary markings</li>
              <li>You may not use materials to compete with Vibellion or offer similar services</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">9.3 User-Generated Content</h3>
            <p className="text-muted-foreground leading-relaxed">
              Any content you submit, post, or share during events or through our services (including feedback, 
              testimonials, photos, or comments) may be used by Vibellion for promotional, marketing, or 
              improvement purposes. By submitting content, you grant us a worldwide, royalty-free, perpetual 
              license to use, modify, and display such content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">10. Prohibited Uses and Activities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Violate any applicable laws, regulations, or third-party rights</li>
              <li>Use our services for any illegal, fraudulent, or unauthorized purpose</li>
              <li>Harass, abuse, or harm other participants or our staff</li>
              <li>Interfere with or disrupt the integrity or performance of our services</li>
              <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
              <li>Copy, modify, distribute, or create derivative works from our content without authorization</li>
              <li>Use automated systems (bots, scrapers) to access our services</li>
              <li>Solicit or advertise services to other participants without permission</li>
              <li>Record, photograph, or broadcast events without explicit permission</li>
              <li>Share confidential information learned during events without authorization</li>
              <li>Impersonate any person or entity or misrepresent your affiliation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">11. Disclaimers and Warranties</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">11.1 Service Availability</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our services are provided "as is" and "as available" without warranties of any kind, either 
              express or implied. We do not guarantee that our services will be uninterrupted, secure, or error-free.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">11.2 Content Accuracy</h3>
            <p className="text-muted-foreground leading-relaxed">
              While we strive to provide accurate and up-to-date information, we do not warrant the accuracy, 
              completeness, or usefulness of any content. Information may contain errors, inaccuracies, or 
              become outdated.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">11.3 Event Outcomes</h3>
            <p className="text-muted-foreground leading-relaxed">
              We do not guarantee specific outcomes from attending events. Results and success depend on 
              individual effort, circumstances, and factors beyond our control. While we provide tools, 
              frameworks, and guidance, we cannot guarantee business success, funding, or specific results.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">11.4 Third-Party Links</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our services may contain links to third-party websites or services. We are not responsible for 
              the content, privacy practices, or terms of third-party sites. Your interactions with third 
              parties are solely between you and the third party.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">12. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, VIBELLION EVENTS INC. SHALL NOT BE LIABLE 
              FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT 
              LIMITED TO:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Loss of profits, revenue, data, or business opportunities</li>
              <li>Costs of substitute services</li>
              <li>Business interruption or loss of goodwill</li>
              <li>Personal injury or property damage</li>
              <li>Damages resulting from use or inability to use our services</li>
              <li>Damages resulting from events being cancelled, postponed, or modified</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THE USE OF OR ANY 
              INABILITY TO USE OUR SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID TO US FOR THE SPECIFIC 
              SERVICE IN QUESTION IN THE 12 MONTHS PRECEDING THE CLAIM.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Some jurisdictions do not allow the exclusion or limitation of certain damages, so some of 
              the above limitations may not apply to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">13. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to indemnify, defend, and hold harmless Vibellion Events Inc., its officers, directors, 
              employees, agents, and affiliates from and against any claims, liabilities, damages, losses, 
              costs, or expenses (including reasonable legal fees) arising out of or relating to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
              <li>Your use or misuse of our services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Your violation of any applicable laws or regulations</li>
              <li>Any content you submit or share through our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">14. Termination</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">14.1 Termination by You</h3>
            <p className="text-muted-foreground leading-relaxed">
              You may stop using our services at any time. If you have an account, you may request account 
              deletion by contacting us.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">14.2 Termination by Us</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may suspend or terminate your access to our services immediately, without prior notice, 
              if you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Violate these Terms or our Code of Conduct</li>
              <li>Engage in fraudulent or illegal activities</li>
              <li>Fail to pay fees when due</li>
              <li>Otherwise engage in behavior we deem harmful to our services or other users</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">14.3 Effect of Termination</h3>
            <p className="text-muted-foreground leading-relaxed">
              Upon termination, your right to use our services will cease immediately. Provisions of these 
              Terms that by their nature should survive termination will survive, including intellectual 
              property rights, disclaimers, limitations of liability, and indemnification.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">15. Force Majeure</h2>
            <p className="text-muted-foreground leading-relaxed">
              We shall not be liable for any failure or delay in performance under these Terms due to 
              circumstances beyond our reasonable control, including but not limited to acts of God, natural 
              disasters, pandemics, war, terrorism, strikes, government actions, internet failures, or other 
              events that are not within our reasonable control. In such cases, we will make reasonable 
              efforts to provide notice and alternative arrangements when possible.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">16. Governing Law and Jurisdiction</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of Canada and the 
              province or territory in which Vibellion Events Inc. operates, without regard to conflict of 
              law principles.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Any disputes arising out of or relating to these Terms or our services shall be subject to 
              the exclusive jurisdiction of the courts of Canada and the applicable province or territory.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">17. Dispute Resolution</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Before initiating any formal legal proceedings, you agree to first{" "}
              <Link href="/contact" className="text-primary hover:underline">
                contact us
              </Link>
              {" "}to attempt to resolve any dispute informally. We will make good faith efforts to 
              resolve disputes within 30 days of notification.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If informal resolution is not possible, disputes shall be resolved through binding arbitration 
              or in the courts as specified in Section 16, depending on the nature and jurisdiction of the dispute.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">18. Modifications to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms at any time. Material changes will be communicated 
              through our website or via email. Your continued use of our services after such modifications 
              constitutes acceptance of the updated Terms. If you do not agree to the modifications, you 
              must stop using our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">19. Severability</h2>
            <p className="text-muted-foreground leading-relaxed">
              If any provision of these Terms is found to be invalid, illegal, or unenforceable, the 
              remaining provisions shall remain in full force and effect. The invalid provision shall be 
              replaced with a valid provision that most closely reflects the intent of the original provision.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">20. Entire Agreement</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms, together with our Privacy Policy, Code of Conduct, and Refund Policy, constitute 
              the entire agreement between you and Vibellion Events Inc. regarding your use of our services, 
              superseding any prior agreements or understandings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">21. Waiver</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our failure to enforce any right or provision of these Terms shall not constitute a waiver 
              of such right or provision. Any waiver must be in writing and signed by an authorized 
              representative of Vibellion Events Inc.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">22. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have questions, concerns, or requests regarding these Terms of Service, please contact us:
            </p>
            <div className="bg-muted/50 p-6 rounded-lg border border-border">
              <p className="text-muted-foreground mb-2">
                <strong>Vibellion Events Inc.</strong>
              </p>
              <p className="text-muted-foreground">
                Please{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  contact us
                </Link>
                {" "}with any questions about these Terms of Service.
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We aim to respond to all inquiries within 5-10 business days.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
