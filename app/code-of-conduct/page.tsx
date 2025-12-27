export const metadata = {
  title: "Code of Conduct",
  description: "Vibellion Events Inc. Code of Conduct for all participants",
}

export default function CodeOfConductPage() {
  return (
    <div className="relative w-full py-12 md:py-16">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/bg.png)',
        }}
      />
      <div className="relative container mx-auto max-w-3xl space-y-8 prose prose-slate z-10">
        <h1>Code of Conduct</h1>
        <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2>Our Commitment</h2>
          <p>
            Vibellion Events Inc. is committed to providing a respectful, inclusive, and professional 
            environment for all participants. We expect all attendees, facilitators, staff, and partners 
            to adhere to this Code of Conduct.
          </p>
        </section>

        <section>
          <h2>Expected Behavior</h2>
          <p>All participants are expected to:</p>
          <ul>
            <li>Treat everyone with respect and professionalism</li>
            <li>Be inclusive and welcoming to people of all backgrounds</li>
            <li>Listen actively and contribute constructively</li>
            <li>Respect different viewpoints and experiences</li>
            <li>Focus on outcomes and execution during events</li>
            <li>Respect confidentiality when requested</li>
          </ul>
        </section>

        <section>
          <h2>Unacceptable Behavior</h2>
          <p>The following behaviors are unacceptable:</p>
          <ul>
            <li>Harassment, discrimination, or offensive comments</li>
            <li>Intimidation or threats</li>
            <li>Inappropriate or unwelcome physical contact</li>
            <li>Solicitation of other participants without permission</li>
            <li>Disruption of events or disrespectful behavior</li>
            <li>Sharing confidential information without permission</li>
          </ul>
        </section>

        <section>
          <h2>Consequences</h2>
          <p>
            Participants who violate this Code of Conduct may be asked to leave the event immediately 
            without refund. We reserve the right to ban individuals from future events.
          </p>
        </section>

        <section>
          <h2>Reporting</h2>
          <p>
            If you experience or witness unacceptable behavior, please contact event staff immediately 
            or email{" "}
            <a href="mailto:conduct@vibellion.com" className="text-primary hover:underline">
              conduct@vibellion.com
            </a>
            . All reports will be handled confidentially.
          </p>
        </section>
      </div>
    </div>
  )
}

