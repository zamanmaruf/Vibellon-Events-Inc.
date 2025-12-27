export const metadata = {
  title: "Refund Policy",
  description: "Vibellion Events Inc. Refund Policy - Comprehensive refund and cancellation policies for event registrations.",
}

export default function RefundPolicyPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund Policy</h1>
          <p className="text-muted-foreground text-lg mb-8">Last updated: {lastUpdated}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Overview and Scope</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This Refund Policy governs refunds, cancellations, and transfers for events, workshops, 
              sprints, and services provided by Vibellion Events Inc. ("Vibellion", "we", "our", "us"). 
              By registering for an event or service, you agree to this Refund Policy.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This policy applies to all paid registrations, unless otherwise specified in writing at 
              the time of registration or in event-specific terms. Free events and services are not 
              subject to refund policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">2. General Refund Eligibility</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Refunds are determined based on the timing of cancellation relative to the event start date. 
              All timeframes are calculated using business days (Monday through Friday, excluding holidays) 
              unless otherwise specified.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.1 Full Refund (100%)</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              Full refunds are available when cancellation requests are received:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>7 or more business days</strong> before the event start date</li>
              <li>In cases of event cancellation by Vibellion (see Section 3)</li>
              <li>In cases of event postponement where you cannot attend the new date (see Section 4)</li>
              <li>Under special circumstances as determined by Vibellion (see Section 9)</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.2 Partial Refund (50%)</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              Partial refunds (50% of the registration fee) are available when cancellation requests 
              are received:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>3 to 6 business days</strong> before the event start date</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-2">
              The remaining 50% covers administrative costs, planning expenses, and the reserved spot 
              that cannot be filled on short notice.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.3 No Refund</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              No refunds will be provided for cancellations received:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Less than 3 business days</strong> before the event start date</li>
              <li>For no-shows (participants who do not attend without prior cancellation)</li>
              <li>For participants removed from events due to Code of Conduct violations</li>
              <li>For membership waitlist signups (waitlist fees, if any, are non-refundable)</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.4 Example Timeline</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              For an event starting on Friday, October 15:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Full refund:</strong> Cancel by end of business day Thursday, October 7 (7+ days before)</li>
              <li><strong>50% refund:</strong> Cancel between Friday, October 8 and Monday, October 11 (3-6 days before)</li>
              <li><strong>No refund:</strong> Cancel on or after Tuesday, October 12 (less than 3 days before)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Event Cancellation by Vibellion</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If Vibellion cancels an event for any reason:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Full Refund:</strong> All registered participants will receive a 100% refund of the registration fee</li>
              <li><strong>Automatic Processing:</strong> Refunds will be processed automatically—no action required from participants</li>
              <li><strong>Notification:</strong> Participants will be notified via email as soon as possible with cancellation details and refund timeline</li>
              <li><strong>Processing Time:</strong> Refunds will be processed within 10-15 business days of cancellation notice</li>
              <li><strong>Processing Fees:</strong> All refunds will include full refund of any processing fees paid</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We are not responsible for any additional costs incurred by participants, such as travel, 
              accommodation, or other expenses. We recommend purchasing travel insurance for events that 
              require travel.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Event Postponement</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If an event is postponed (rescheduled to a new date):
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">4.1 Automatic Transfer</h3>
            <p className="text-muted-foreground leading-relaxed">
              Your registration will automatically be transferred to the new event date. You will receive 
              notification of the new date via email.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">4.2 Opt-Out and Refund</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              If you cannot attend the new date, you may request a full refund by:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Emailing{" "}
                <a href="mailto:vibellioneventsinc@gmail.com" className="text-primary hover:underline">
                  vibellioneventsinc@gmail.com
                </a>
                {" "}within 7 business days of the postponement announcement</li>
              <li>Including your registration confirmation number and the event name</li>
              <li>Clearly stating that you cannot attend the new date</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Refund requests received after the 7-day window will be subject to the standard refund 
              policy based on the new event date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">5. No-Shows and Partial Attendance</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">5.1 No-Shows</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              Participants who do not attend an event without prior cancellation are not eligible for refunds. 
              This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Complete non-attendance</li>
              <li>Late arrivals who miss significant portions of the event</li>
              <li>Last-minute cancellations (less than 24 hours before the event)</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">5.2 Grace Period Exception</h3>
            <p className="text-muted-foreground leading-relaxed">
              In exceptional circumstances (e.g., medical emergencies, family emergencies, severe weather), 
              we may consider refund requests on a case-by-case basis. Documentation may be required. 
              See Section 9 for special circumstances.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">5.3 Partial Attendance</h3>
            <p className="text-muted-foreground leading-relaxed">
              If you attend only part of an event, no partial refunds are provided. Event fees cover 
              the entire event experience, including materials, preparation, and the reserved spot.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">6. How to Request a Refund</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To request a refund, please follow these steps:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">6.1 Refund Request Requirements</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              All refund requests must be submitted in writing via email to{" "}
              <a href="mailto:vibellioneventsinc@gmail.com" className="text-primary hover:underline">
                vibellioneventsinc@gmail.com
              </a>
              {" "}and must include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Subject Line:</strong> "Refund Request - [Event Name]"</li>
              <li><strong>Registration Confirmation:</strong> Confirmation number, order number, or receipt</li>
              <li><strong>Event Information:</strong> Event name and date</li>
              <li><strong>Reason for Cancellation:</strong> Brief explanation (required for our records)</li>
              <li><strong>Payment Information:</strong> Original payment method details (for refund processing)</li>
              <li><strong>Contact Information:</strong> Full name, email address, and phone number</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">6.2 Refund Request Timeline</h3>
            <p className="text-muted-foreground leading-relaxed">
              Refund requests must be received within the applicable refund window (see Section 2). 
              Requests received after the deadline will not be eligible for refunds, except under 
              special circumstances (see Section 9).
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">6.3 Acknowledgment</h3>
            <p className="text-muted-foreground leading-relaxed">
              You will receive an acknowledgment email within 2 business days confirming receipt of 
              your refund request. If you do not receive acknowledgment, please follow up to ensure 
              your request was received.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Refund Processing Times</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Refund processing times vary depending on the original payment method:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">7.1 Credit/Debit Cards</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Processing Time:</strong> 5-10 business days after approval</li>
              <li><strong>Appearance:</strong> Refund will appear on your statement within 1-2 billing cycles</li>
              <li><strong>Note:</strong> Processing time may vary by financial institution</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">7.2 PayPal</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Processing Time:</strong> 3-5 business days after approval</li>
              <li><strong>Appearance:</strong> Refund will appear in your PayPal account</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">7.3 Bank Transfers / E-Transfers</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Processing Time:</strong> 7-14 business days after approval</li>
              <li><strong>Note:</strong> Requires manual processing and bank processing time</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">7.4 Other Payment Methods</h3>
            <p className="text-muted-foreground leading-relaxed">
              For other payment methods, processing times will be communicated on a case-by-case basis. 
              Generally, expect 5-15 business days.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-6">
              <strong>Important:</strong> Refunds are processed to the original payment method used for 
              the registration. We cannot refund to a different account or method without written authorization 
              and identity verification.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Processing Fees and Currency</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">8.1 Processing Fees</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              The following fees apply to refunds:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Payment Processing Fees:</strong> Non-refundable fees charged by payment processors (typically 2.9% + $0.30) are not refunded, except in cases of event cancellation by Vibellion</li>
              <li><strong>Administrative Fees:</strong> No additional administrative fees are charged for refunds</li>
              <li><strong>Partial Refunds:</strong> For 50% refunds, processing fees are proportional (50% of original fees)</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">8.2 Currency and Exchange Rates</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              Refunds will be issued in the same currency as the original payment:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Canadian Dollars (CAD):</strong> Most events are priced in CAD</li>
              <li><strong>Exchange Rate Changes:</strong> If currency exchange rates have changed, refunds will reflect the original payment amount in the original currency</li>
              <li><strong>Bank Fees:</strong> Any currency conversion or international transfer fees are the responsibility of the recipient</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">9. Special Circumstances</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We understand that unexpected circumstances may arise. We may consider refund requests 
              outside the standard policy for:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">9.1 Medical Emergencies</h3>
            <p className="text-muted-foreground leading-relaxed">
              Serious illness or medical emergency affecting the registered participant or immediate 
              family member. Documentation (medical certificate, doctor's note) may be required.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">9.2 Family Emergencies</h3>
            <p className="text-muted-foreground leading-relaxed">
              Death or serious illness of an immediate family member. Documentation may be requested.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">9.3 Travel Disruptions</h3>
            <p className="text-muted-foreground leading-relaxed">
              Severe weather, natural disasters, or transportation disruptions that prevent attendance. 
              Proof of disruption may be required.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">9.4 Visa or Travel Document Issues</h3>
            <p className="text-muted-foreground leading-relaxed">
              Denial of visa or travel documents for international events, when such documents are 
              required. Documentation from relevant authorities must be provided.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              Special circumstance refunds are evaluated on a case-by-case basis and are not guaranteed. 
              Requests must be submitted in writing with supporting documentation. Decisions are at 
              Vibellion's sole discretion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">10. Transferring Registrations</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You may transfer your registration to another person subject to the following conditions:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">10.1 Transfer Requirements</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Deadline:</strong> Transfer requests must be received at least 24 hours before the event start time</li>
              <li><strong>Written Request:</strong> Transfer requests must be submitted in writing via email to{" "}
                <a href="mailto:vibellioneventsinc@gmail.com" className="text-primary hover:underline">
                  vibellioneventsinc@gmail.com
                </a>
              </li>
              <li><strong>New Participant Information:</strong> Full name, email address, and contact information of the replacement participant</li>
              <li><strong>Confirmation:</strong> Both parties (original and new participant) must acknowledge the transfer</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">10.2 Transfer Restrictions</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Transfers are not permitted for events that require specific qualifications or pre-screening</li>
              <li>Corporate bookings may have additional transfer restrictions (see Section 11)</li>
              <li>Only one transfer per registration is permitted</li>
              <li>Transfers may incur administrative fees if processing requires additional work</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">10.3 Transfer Processing</h3>
            <p className="text-muted-foreground leading-relaxed">
              Once approved, the new participant will receive confirmation and event details. The original 
              registrant will receive acknowledgment of the transfer. No refunds are provided for transfers—the 
              registration is simply reassigned.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">11. Corporate Bookings</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Corporate workshop bookings and bulk registrations may have different terms as specified 
              in the corporate agreement or quote:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Refund terms are typically outlined in the corporate service agreement</li>
              <li>Corporate bookings may have longer cancellation notice requirements (e.g., 14-30 days)</li>
              <li>Custom workshops may have non-refundable deposit requirements</li>
              <li>Transfer policies may differ for corporate bookings</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              If you have a corporate booking, please refer to your specific agreement or contact your 
              account representative for clarification on refund and cancellation terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">12. Membership Waitlist</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Membership waitlist signups are free and do not require payment. If any fees are associated 
              with waitlist signups in the future:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Waitlist fees, if any, are non-refundable</li>
              <li>Joining the waitlist does not guarantee membership or event access</li>
              <li>Waitlist positions are not transferable</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              When membership becomes available, standard refund policies will apply to membership fees 
              if you choose to cancel your membership.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">13. Chargebacks</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you initiate a chargeback or dispute with your financial institution instead of following 
              our refund request process:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Your registration may be immediately cancelled</li>
              <li>You may be banned from future events until the dispute is resolved</li>
              <li>We reserve the right to dispute unwarranted chargebacks</li>
              <li>Chargeback fees incurred by Vibellion may be charged to you</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We strongly encourage you to contact us directly to resolve any issues before initiating 
              a chargeback. We are committed to fair and timely resolution of refund requests.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">14. Force Majeure</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In cases of force majeure (circumstances beyond our reasonable control), including but not 
              limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Natural disasters, pandemics, or public health emergencies</li>
              <li>War, terrorism, or civil unrest</li>
              <li>Government restrictions or regulations</li>
              <li>Venue closures or unavailability</li>
              <li>Extreme weather events</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We will make reasonable efforts to provide alternative arrangements (e.g., rescheduling, 
              virtual format) or provide refunds when events cannot proceed. However, we are not liable 
              for costs beyond the registration fee (e.g., travel, accommodation).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">15. Dispute Resolution</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have concerns about a refund decision:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Contact us at{" "}
                <a href="mailto:vibellioneventsinc@gmail.com" className="text-primary hover:underline">
                  vibellioneventsinc@gmail.com
                </a>
                {" "}to discuss the decision</li>
              <li>Provide additional context or documentation that may not have been considered</li>
              <li>Requests will be reviewed by a different decision-maker when possible</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              While we strive to be fair and reasonable, refund decisions are at Vibellion's discretion 
              and are final. We are not obligated to provide refunds beyond what is specified in this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">16. Contact Information and Response Times</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For refund requests, questions, or concerns about this policy:
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
                <strong>Subject Line:</strong> Refund Request - [Event Name]
              </p>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-3">Response Times</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Acknowledgment:</strong> Within 2 business days</li>
              <li><strong>Refund Decision:</strong> Within 5 business days</li>
              <li><strong>Refund Processing:</strong> 5-15 business days after approval (varies by payment method)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              During peak periods or holidays, response times may be longer. We appreciate your patience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">17. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify this Refund Policy at any time. Changes will be effective 
              for registrations made after the updated policy is posted. The policy in effect at the 
              time of your registration will apply to your refund eligibility.
            </p>
          </section>

          <section className="mb-8">
            <p className="text-sm text-muted-foreground italic mt-8">
              <strong>Note:</strong> This Refund Policy should be read in conjunction with our{" "}
              <a href="/terms" className="text-primary hover:underline">Terms of Service</a>
              {" "}and{" "}
              <a href="/code-of-conduct" className="text-primary hover:underline">Code of Conduct</a>
              . If there are any conflicts, the Terms of Service shall prevail.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
