import Link from "next/link"

export const metadata = {
  title: "Code of Conduct",
  description: "Vibellion Events Inc. Code of Conduct - Comprehensive guidelines for professional behavior at all our events and interactions.",
}

export default function CodeOfConductPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Code of Conduct</h1>
          <p className="text-muted-foreground text-lg mb-8">Last updated: {lastUpdated}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Purpose and Scope</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Vibellion Events Inc. is committed to providing a respectful, inclusive, professional, and 
              safe environment for all participants, including attendees, facilitators, staff, partners, 
              volunteers, and speakers. This Code of Conduct applies to all Vibellion events, whether 
              in-person or virtual, as well as all related communications, online forums, social media 
              interactions, and business relationships.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By participating in Vibellion events or using our services, you agree to abide by this 
              Code of Conduct. Violations may result in immediate removal from events without refund 
              and potential ban from future events.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Our Values</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our Code of Conduct is grounded in the following core values:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Respect:</strong> Treat all individuals with dignity and respect, regardless of background, identity, or perspective</li>
              <li><strong>Inclusion:</strong> Create welcoming environments where diverse voices and experiences are valued</li>
              <li><strong>Professionalism:</strong> Maintain high standards of professional conduct and business ethics</li>
              <li><strong>Integrity:</strong> Act honestly, transparently, and ethically in all interactions</li>
              <li><strong>Collaboration:</strong> Foster constructive dialogue and collaborative problem-solving</li>
              <li><strong>Safety:</strong> Ensure physical and psychological safety for all participants</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Expected Behavior</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All participants are expected to demonstrate the following behaviors:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">3.1 Respectful Communication</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Use respectful, professional language in all interactions</li>
              <li>Listen actively and thoughtfully to others' perspectives</li>
              <li>Engage in constructive dialogue, even when disagreeing</li>
              <li>Avoid interrupting or talking over others</li>
              <li>Provide feedback in a respectful and constructive manner</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">3.2 Inclusivity and Welcoming Behavior</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Welcome and include people of all backgrounds, identities, and experiences</li>
              <li>Use inclusive language and avoid assumptions about others</li>
              <li>Make space for others to participate and contribute</li>
              <li>Be open to learning about different perspectives and experiences</li>
              <li>Respect pronouns, names, and identities</li>
              <li>Consider accessibility needs and be accommodating when possible</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">3.3 Professional Conduct</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Arrive on time and be present and engaged during events</li>
              <li>Focus on outcomes and execution during structured sessions</li>
              <li>Complete assigned work and deliverables when applicable</li>
              <li>Respect event schedules, time limits, and facilitator guidance</li>
              <li>Maintain appropriate boundaries in professional relationships</li>
              <li>Dress appropriately for professional business events</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">3.4 Confidentiality and Privacy</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Respect confidentiality when information is shared in confidence</li>
              <li>Do not share other participants' personal information without permission</li>
              <li>Do not record, photograph, or broadcast events without explicit permission</li>
              <li>Respect the privacy of business information shared during events</li>
              <li>Do not use information learned during events for competitive or harmful purposes</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">3.5 Networking and Collaboration</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Engage in meaningful, mutually beneficial networking</li>
              <li>Be authentic and genuine in your interactions</li>
              <li>Respect others' time and boundaries</li>
              <li>Ask for consent before exchanging contact information or making introductions</li>
              <li>Follow up on commitments made during networking</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Unacceptable Behavior</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The following behaviors are strictly prohibited and will not be tolerated:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">4.1 Harassment</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              Harassment includes but is not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Verbal Harassment:</strong> Offensive comments, slurs, derogatory remarks, threats, or verbal abuse</li>
              <li><strong>Physical Harassment:</strong> Unwelcome physical contact, touching, assault, or invasion of personal space</li>
              <li><strong>Visual Harassment:</strong> Displaying offensive images, gestures, or materials</li>
              <li><strong>Online Harassment:</strong> Cyberbullying, doxxing, trolling, or harmful online behavior</li>
              <li><strong>Sexual Harassment:</strong> Unwanted sexual advances, comments, gestures, or behavior</li>
              <li>Deliberate intimidation, stalking, or following</li>
              <li>Sustained disruption of events or conversations</li>
              <li>Inappropriate or unwelcome personal questions or comments</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">4.2 Discrimination</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              Discrimination based on any protected characteristic is prohibited, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Race, ethnicity, or national origin</li>
              <li>Gender, gender identity, or gender expression</li>
              <li>Sexual orientation</li>
              <li>Age</li>
              <li>Religion or religious beliefs</li>
              <li>Disability or medical condition</li>
              <li>Marital or family status</li>
              <li>Political beliefs</li>
              <li>Socioeconomic status</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">4.3 Inappropriate Solicitation</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Unsolicited sales pitches or aggressive business solicitation</li>
              <li>Recruiting for other events or services without permission</li>
              <li>Using events primarily for sales or marketing purposes</li>
              <li>Collecting contact information without consent for marketing purposes</li>
              <li>Spamming or mass messaging other participants</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">4.4 Disruptive Behavior</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Disrupting event sessions, presentations, or activities</li>
              <li>Excessive noise or behavior that distracts others</li>
              <li>Refusing to follow facilitator instructions or event guidelines</li>
              <li>Intoxication or substance abuse that impairs judgment or behavior</li>
              <li>Bringing unauthorized guests or individuals to events</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">4.5 Violation of Privacy and Confidentiality</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Recording, photographing, or broadcasting events without permission</li>
              <li>Sharing confidential information discussed during events</li>
              <li>Using others' personal information without consent</li>
              <li>Collecting or storing personal information inappropriately</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">4.6 Other Prohibited Behaviors</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Violence, threats of violence, or inciting violence</li>
              <li>Possession of weapons or dangerous items</li>
              <li>Illegal activities or encouraging illegal activities</li>
              <li>Fraud, misrepresentation, or deception</li>
              <li>Retaliation against individuals who report violations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Professional Boundaries</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Professional boundaries help maintain a respectful and productive environment:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Maintain appropriate professional relationships with other participants, staff, and facilitators</li>
              <li>Respect others' personal space and physical boundaries</li>
              <li>Avoid excessive personal questions or invasive inquiries</li>
              <li>Respect others' time and availability—do not demand immediate attention or responses</li>
              <li>Keep business and personal relationships separate during events</li>
              <li>Respect decisions when others decline networking opportunities or requests</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Networking and Solicitation Guidelines</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              While networking is encouraged, it must be done respectfully:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Ask Before Soliciting:</strong> Always ask for permission before making sales pitches, recruiting, or soliciting business</li>
              <li><strong>Respect "No":</strong> Accept when others decline networking or business opportunities graciously</li>
              <li><strong>Focus on Value:</strong> Build relationships based on mutual value and respect, not transactional exchanges</li>
              <li><strong>Appropriate Timing:</strong> Use designated networking times and avoid interrupting structured sessions</li>
              <li><strong>No Spam:</strong> Do not send unsolicited bulk messages or marketing materials</li>
              <li><strong>Privacy:</strong> Do not share others' contact information without explicit permission</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Reporting Violations</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you experience or witness behavior that violates this Code of Conduct, we encourage you to report it. 
              All reports will be taken seriously and handled confidentially.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">7.1 How to Report</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              You can report violations through the following channels:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>In-Person:</strong> Speak directly to event staff, facilitators, or security personnel</li>
              <li><strong>Email:</strong>{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  Contact us through our contact page
                </Link>
                {" "}with your Code of Conduct report</li>
              <li><strong>Anonymous Reporting:</strong> If you prefer to report anonymously, you may do so via email without identifying yourself</li>
              <li><strong>Emergency Situations:</strong> For immediate threats or emergencies, contact local emergency services (911) first, then notify event staff</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">7.2 What to Include in Reports</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">
              When reporting, please include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Date, time, and location of the incident</li>
              <li>Description of what happened</li>
              <li>Names of individuals involved (if known and appropriate to share)</li>
              <li>Names of witnesses (if any)</li>
              <li>Any supporting documentation, screenshots, or evidence</li>
              <li>Your preferred method of follow-up (if you choose to identify yourself)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Investigation Process</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When a violation is reported, we will:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Review the report promptly and confidentially</li>
              <li>Conduct a fair and thorough investigation</li>
              <li>Interview relevant parties and witnesses (with their consent)</li>
              <li>Maintain confidentiality to the extent possible</li>
              <li>Take appropriate action based on the severity and nature of the violation</li>
              <li>Follow up with the reporting party (if they have identified themselves) regarding the outcome</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Investigations will be conducted with sensitivity, respect for all parties, and in accordance 
              with applicable laws and our internal policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">9. Consequences of Violations</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Violations of this Code of Conduct will result in consequences appropriate to the severity 
              and nature of the violation:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">9.1 Warning</h3>
            <p className="text-muted-foreground leading-relaxed">
              For minor or first-time violations, a verbal or written warning may be issued, along with 
              education about expected behavior.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">9.2 Removal from Event</h3>
            <p className="text-muted-foreground leading-relaxed">
              For serious violations or repeated minor violations, individuals may be immediately removed 
              from the event without refund. They may be required to leave the premises immediately.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">9.3 Ban from Future Events</h3>
            <p className="text-muted-foreground leading-relaxed">
              For severe violations or repeated offenses, individuals may be permanently banned from 
              attending future Vibellion events and using our services.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">9.4 Legal Action</h3>
            <p className="text-muted-foreground leading-relaxed">
              In cases involving illegal activities, we reserve the right to involve law enforcement 
              and pursue legal action as appropriate.
            </p>

            <p className="text-muted-foreground leading-relaxed mt-4">
              We reserve the right to take any action we deem appropriate to maintain a safe and respectful 
              environment for all participants.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">10. Appeals Process</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you believe a decision regarding a Code of Conduct violation was made in error, you may 
              request a review by:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Submitting a written appeal through our{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  contact page
                </Link>
                {" "}within 30 days of the decision</li>
              <li>Including relevant information, evidence, or context not previously considered</li>
              <li>Requests will be reviewed by a different decision-maker when possible</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Appeals will be considered fairly, but decisions are final. We are not obligated to grant 
              appeals, especially in cases of clear violations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">11. Emergency Situations</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In case of emergency or immediate threat to safety:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Call 911 immediately</strong> for medical emergencies, threats of violence, or crimes in progress</li>
              <li>Notify event staff or security personnel as soon as it is safe to do so</li>
              <li>Follow instructions from emergency responders and event staff</li>
              <li>Do not attempt to handle dangerous situations yourself</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Event venues should have emergency procedures posted. Familiarize yourself with exits, 
              emergency contacts, and evacuation procedures when you arrive.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">12. Support Resources</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you need support during or after an event:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Event Staff:</strong> Available at all events to provide assistance and support</li>
              <li><strong>Email Support:</strong>{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  Contact us through our contact page
                </Link>
                {" "}for non-urgent concerns</li>
              <li><strong>Mental Health Resources:</strong> If you need mental health support, consider contacting local crisis helplines or mental health services</li>
              <li><strong>Legal Resources:</strong> For serious violations, consider consulting with legal professionals or law enforcement</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">13. Our Commitment</h2>
            <p className="text-muted-foreground leading-relaxed">
              Vibellion Events Inc. is committed to creating and maintaining environments where all 
              participants feel safe, respected, and able to fully participate. We take violations of 
              this Code of Conduct seriously and will take appropriate action to ensure a positive 
              experience for everyone.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We also recognize that creating inclusive environments is an ongoing process. We welcome 
              feedback on how we can improve our policies and practices to better serve our community.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">14. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For questions about this Code of Conduct, to report violations, or to provide feedback, 
              please contact us:
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
                {" "}with any questions about this Code of Conduct, to report violations, or to provide feedback.
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We aim to respond to all inquiries and reports within 48 hours during business days.
            </p>
          </section>

          <section className="mb-8">
            <p className="text-sm text-muted-foreground italic mt-8">
              Thank you for helping us create a respectful and inclusive environment for all participants. 
              Your cooperation ensures that Vibellion events remain valuable, professional, and welcoming 
              spaces for everyone.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
