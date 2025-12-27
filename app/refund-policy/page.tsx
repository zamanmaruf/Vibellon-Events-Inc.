export const metadata = {
  title: "Refund Policy",
  description: "Vibellion Events Inc. Refund Policy for event registrations",
}

export default function RefundPolicyPage() {
  return (
    <div className="relative w-full py-12 md:py-16">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/bg2.png)',
        }}
      />
      <div className="relative container mx-auto max-w-3xl space-y-8 prose prose-slate z-10">
        <h1>Refund Policy</h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2>General Refund Policy</h2>
          <p>
            Vibellion Events Inc. offers refunds for event registrations under the following conditions:
          </p>
          <ul>
            <li>
              <strong>Full Refund:</strong> Cancellations made 7 or more days before the event date
            </li>
            <li>
              <strong>50% Refund:</strong> Cancellations made 3-7 days before the event date
            </li>
            <li>
              <strong>No Refund:</strong> Cancellations made less than 3 days before the event date
            </li>
          </ul>
        </section>

        <section>
          <h2>How to Request a Refund</h2>
          <p>
            To request a refund, please email{" "}
            <a href="mailto:refunds@vibellion.com" className="text-primary hover:underline">
              refunds@vibellion.com
            </a>
            {" "}with your registration confirmation and reason for cancellation. Refunds will be 
            processed within 5-10 business days.
          </p>
        </section>

        <section>
          <h2>Event Cancellation by Vibellion</h2>
          <p>
            If we cancel an event, all registered participants will receive a full refund automatically. 
            We will notify registered participants as soon as possible.
          </p>
        </section>

        <section>
          <h2>Event Postponement</h2>
          <p>
            If an event is postponed, your registration will be automatically transferred to the new date. 
            If you cannot attend the new date, you may request a full refund within 7 days of the 
            postponement announcement.
          </p>
        </section>

        <section>
          <h2>No-Shows</h2>
          <p>
            Participants who do not attend an event without prior cancellation are not eligible for refunds.
          </p>
        </section>

        <section>
          <h2>Transferring Registrations</h2>
          <p>
            You may transfer your registration to another person up to 24 hours before the event. 
            Please contact us at{" "}
            <a href="mailto:events@vibellion.com" className="text-primary hover:underline">
              events@vibellion.com
            </a>
            {" "}to request a transfer.
          </p>
        </section>

        <section>
          <h2>Questions</h2>
          <p>
            If you have questions about our refund policy, please contact{" "}
            <a href="mailto:refunds@vibellion.com" className="text-primary hover:underline">
              refunds@vibellion.com
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}

