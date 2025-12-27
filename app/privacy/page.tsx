export const metadata = {
  title: "Privacy Policy",
  description: "Vibellion Events Inc. Privacy Policy - Comprehensive information about how we collect, use, and protect your personal information in compliance with PIPEDA.",
}

export default function PrivacyPage() {
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
          backgroundImage: 'url(/bg.png)',
        }}
      />
      <div className="relative container mx-auto max-w-4xl space-y-8 prose prose-slate max-w-none z-10">
        <div className="bg-card/90 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-border shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground text-lg mb-8">Last updated: {lastUpdated}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Vibellion Events Inc. ("we", "our", "us", or "Vibellion") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
              use our website, register for events, workshops, or sprints, and interact with our services. 
              This policy is designed to comply with the Personal Information Protection and Electronic Documents 
              Act (PIPEDA) and other applicable Canadian privacy laws.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              By using our website or services, you consent to the collection and use of information in accordance 
              with this Privacy Policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
            <p className="text-sm text-muted-foreground mt-4 italic">
              <strong>Note:</strong> This policy is not intended to provide legal advice. If you have specific 
              questions about your privacy rights, please consult with a legal professional.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect information that you provide directly to us, as well as information collected automatically 
              when you interact with our services:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.1 Information You Provide Directly</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Contact Information:</strong> Name, email address, phone number, mailing address</li>
              <li><strong>Account Information:</strong> Email address, password (hashed and encrypted), preferences</li>
              <li><strong>Registration Information:</strong> Role, company name, city, professional interests, event preferences</li>
              <li><strong>Event Information:</strong> Event registrations, attendance records, dietary restrictions, accessibility needs</li>
              <li><strong>Inquiry Information:</strong> Messages, questions, feedback submitted through contact forms, corporate inquiries, or partnership requests</li>
              <li><strong>Payment Information:</strong> Billing address, payment method details (processed securely through third-party payment processors - we do not store full credit card numbers)</li>
              <li><strong>Membership Information:</strong> Waitlist submissions, membership applications, role, city, building/company information</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.2 Information Collected Automatically</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Device Information:</strong> IP address, browser type and version, device type, operating system</li>
              <li><strong>Usage Information:</strong> Pages visited, time spent on pages, click patterns, referring URLs, search terms</li>
              <li><strong>Location Information:</strong> General geographic location based on IP address (city/country level)</li>
              <li><strong>Cookies and Tracking Technologies:</strong> See Section 10 for detailed information about cookies</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.3 Information from Third Parties</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Social Media:</strong> If you connect your social media accounts, we may receive information from those platforms</li>
              <li><strong>Event Partners:</strong> Information shared by event registration platforms or partners (e.g., Eventbrite, Luma)</li>
              <li><strong>Service Providers:</strong> Analytics providers, payment processors, email service providers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Service Delivery:</strong> Process event registrations, manage memberships, provide customer support, facilitate event participation</li>
              <li><strong>Communication:</strong> Send event confirmations, updates, newsletters (with your consent), respond to inquiries, provide important service notifications</li>
              <li><strong>Payment Processing:</strong> Process payments, prevent fraud, manage billing and refunds</li>
              <li><strong>Event Management:</strong> Coordinate events, manage attendee lists, ensure safety and security, provide accessibility accommodations</li>
              <li><strong>Improvement:</strong> Analyze usage patterns, improve website functionality, enhance user experience, develop new services</li>
              <li><strong>Legal Compliance:</strong> Comply with applicable laws, respond to legal requests, protect our rights and interests, enforce our terms and policies</li>
              <li><strong>Marketing:</strong> Send promotional communications about events, workshops, and services (only with your explicit consent, which you can withdraw at any time)</li>
              <li><strong>Security:</strong> Detect and prevent fraud, abuse, security threats, and other harmful activities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Legal Basis for Processing (PIPEDA Compliance)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Under PIPEDA, we process your personal information based on the following legal bases:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Consent:</strong> You have provided explicit consent for specific purposes (e.g., marketing emails, newsletter subscriptions)</li>
              <li><strong>Contractual Necessity:</strong> Processing is necessary to fulfill our contract with you (e.g., processing event registrations, providing services you've paid for)</li>
              <li><strong>Legal Obligation:</strong> Processing is required to comply with legal obligations (e.g., tax reporting, record-keeping)</li>
              <li><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate business interests, such as improving services, ensuring security, and preventing fraud (balanced against your privacy rights)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Sharing and Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not sell your personal information. We may share your information in the following circumstances:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">5.1 Service Providers</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              We share information with trusted third-party service providers who assist us in operating our business:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Payment Processors:</strong> To process payments securely (e.g., Stripe, PayPal)</li>
              <li><strong>Email Services:</strong> To send emails and notifications (e.g., Resend)</li>
              <li><strong>Analytics Providers:</strong> To understand website usage (e.g., Plausible Analytics - privacy-respecting analytics)</li>
              <li><strong>Event Platforms:</strong> When you register through third-party platforms (e.g., Eventbrite, Luma)</li>
              <li><strong>Cloud Hosting:</strong> To store and process data (e.g., Vercel, AWS)</li>
              <li><strong>Database Services:</strong> To store and manage data securely</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              All service providers are contractually obligated to protect your information and use it only for the purposes we specify.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">5.2 Legal Requirements</h3>
            <p className="text-muted-foreground leading-relaxed">
              We may disclose information when required by law, court order, or government regulation, or to protect 
              our rights, property, or safety, or that of our users or others.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">5.3 Business Transfers</h3>
            <p className="text-muted-foreground leading-relaxed">
              In the event of a merger, acquisition, or sale of assets, your information may be transferred to the 
              acquiring entity, subject to the same privacy protections.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">5.4 With Your Consent</h3>
            <p className="text-muted-foreground leading-relaxed">
              We may share information with other parties when you have given us explicit consent to do so.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">6. International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Your information may be transferred to and processed in countries other than Canada, including the 
              United States and other jurisdictions where our service providers operate. These countries may have 
              different data protection laws than Canada.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When we transfer your information internationally, we take appropriate safeguards to ensure your 
              information receives adequate protection, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
              <li>Contractual clauses requiring protection equivalent to PIPEDA</li>
              <li>Service providers certified under appropriate data protection frameworks</li>
              <li>Regular audits and assessments of our service providers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Encryption:</strong> Data transmitted over the internet is encrypted using SSL/TLS protocols</li>
              <li><strong>Secure Storage:</strong> Data stored in secure databases with access controls and encryption at rest</li>
              <li><strong>Access Controls:</strong> Limited access to personal information on a need-to-know basis</li>
              <li><strong>Regular Security Audits:</strong> Periodic assessments of our security practices and infrastructure</li>
              <li><strong>Password Protection:</strong> Passwords are hashed and encrypted (we cannot view your password)</li>
              <li><strong>Payment Security:</strong> Payment information is processed through PCI-DSS compliant processors</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we 
              strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined 
              in this Privacy Policy, unless a longer retention period is required or permitted by law:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Active Accounts:</strong> Information retained while your account is active or while you continue to use our services</li>
              <li><strong>Event Records:</strong> Registration and attendance records retained for at least 7 years for accounting and legal purposes</li>
              <li><strong>Marketing Lists:</strong> Retained until you unsubscribe or withdraw consent</li>
              <li><strong>Legal Requirements:</strong> Some information may be retained longer if required by law (e.g., tax records, financial transactions)</li>
              <li><strong>Inquiries:</strong> Contact form submissions retained for up to 3 years unless you request deletion</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              When information is no longer needed, we securely delete or anonymize it in accordance with our data retention policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">9. Your Rights and Choices</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Under PIPEDA and other applicable privacy laws, you have the following rights regarding your personal information:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">9.1 Right to Access</h3>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to request access to your personal information and receive a copy of the data we hold about you.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">9.2 Right to Rectification</h3>
            <p className="text-muted-foreground leading-relaxed">
              You can request correction of inaccurate or incomplete information. We will update your information promptly.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">9.3 Right to Deletion</h3>
            <p className="text-muted-foreground leading-relaxed">
              You can request deletion of your personal information, subject to legal obligations that may require us to retain certain data.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">9.4 Right to Withdraw Consent</h3>
            <p className="text-muted-foreground leading-relaxed">
              You can withdraw consent for processing based on consent at any time. Withdrawal does not affect the 
              lawfulness of processing before withdrawal.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">9.5 Right to Object</h3>
            <p className="text-muted-foreground leading-relaxed">
              You can object to processing based on legitimate interests. We will stop processing unless we can 
              demonstrate compelling legitimate grounds.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">9.6 Right to Data Portability</h3>
            <p className="text-muted-foreground leading-relaxed">
              You can request a copy of your data in a structured, machine-readable format.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">9.7 Marketing Opt-Out</h3>
            <p className="text-muted-foreground leading-relaxed">
              You can unsubscribe from marketing communications at any time by clicking the unsubscribe link in 
              our emails or contacting us directly.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-6">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:vibellioneventsinc@gmail.com" className="text-primary hover:underline">
                vibellioneventsinc@gmail.com
              </a>
              . We will respond to your request within 30 days.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">10. Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use cookies and similar tracking technologies to collect and store information about your use of our website:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">10.1 Types of Cookies</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Essential Cookies:</strong> Required for the website to function (cannot be disabled)</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website (we use privacy-respecting Plausible Analytics)</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">10.2 Managing Cookies</h3>
            <p className="text-muted-foreground leading-relaxed">
              Most web browsers allow you to control cookies through their settings. You can set your browser to 
              refuse cookies or alert you when cookies are being sent. However, disabling cookies may affect 
              website functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">11. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our website and services may contain links to third-party websites or integrate third-party services. 
              We are not responsible for the privacy practices of these third parties. We encourage you to review 
              their privacy policies:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Plausible Analytics:</strong> Privacy-respecting web analytics (<a href="https://plausible.io/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>)</li>
              <li><strong>Resend:</strong> Email delivery service (<a href="https://resend.com/legal/privacy-policy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>)</li>
              <li><strong>Payment Processors:</strong> Check respective privacy policies for Stripe, PayPal, or other payment providers</li>
              <li><strong>Event Platforms:</strong> Check privacy policies for Eventbrite, Luma, or other registration platforms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">12. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect 
              personal information from children. If you believe we have collected information from a child, 
              please contact us immediately, and we will delete that information promptly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">13. Data Breach Notification</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In the event of a data breach that poses a real risk of significant harm to individuals, we will:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Notify affected individuals as soon as reasonably possible</li>
              <li>Report the breach to the Privacy Commissioner of Canada if required by law</li>
              <li>Provide information about the breach, the data involved, and steps being taken</li>
              <li>Recommend steps individuals can take to protect themselves</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">14. Complaints Process</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have concerns about how we handle your personal information, please contact us first. 
              We will investigate and respond to your concerns.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If you are not satisfied with our response, you may file a complaint with the{" "}
              <a href="https://www.priv.gc.ca/en/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                Privacy Commissioner of Canada
              </a>
              {" "}or your provincial privacy commissioner, as applicable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">15. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or 
              legal requirements. We will notify you of material changes by posting the new policy on this 
              page with an updated "Last updated" date. We encourage you to review this policy periodically 
              to stay informed about how we protect your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">16. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, 
              please contact us:
            </p>
            <div className="bg-muted/50 p-6 rounded-lg border border-border">
              <p className="text-muted-foreground mb-2">
                <strong>Vibellion Events Inc.</strong>
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>Email:</strong>{" "}
                <a href="mailto:vibellioneventsinc@gmail.com" className="text-primary hover:underline">
                  vibellioneventsinc@gmail.com
                </a>
              </p>
              <p className="text-muted-foreground">
                <strong>Subject Line:</strong> Privacy Policy Inquiry
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We aim to respond to all privacy-related inquiries within 30 days.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
