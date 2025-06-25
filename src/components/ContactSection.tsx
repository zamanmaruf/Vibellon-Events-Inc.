export default function ContactSection() {
  return (
    <section id="contact" className="w-full max-w-2xl mx-auto py-20 px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-wide uppercase text-center">Contact</h2>
      <form
        action="https://formspree.io/f/mgvykrbn"
        method="POST"
        className="flex flex-col gap-6 bg-black/70 rounded-2xl p-8 shadow-lg border border-white/10 mb-8"
        target="_blank"
        autoComplete="off"
      >
        <input name="name" type="text" placeholder="Name" className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent" required />
        <input name="email" type="email" placeholder="Email" className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent" required />
        <textarea name="message" placeholder="Message" rows={4} className="bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent" required />
        <input type="hidden" name="_subject" value="New message from Vibellion Events Inc. website" />
        <button type="submit" className="px-8 py-3 rounded-full bg-accent text-white font-bold shadow-glow hover:scale-105 transition-all duration-300">Send Message</button>
      </form>
      <div className="text-center text-muted">
        <p>Email: <a href="mailto:vibellioneventsinc@gmail.com" className="text-accent hover:underline">vibellioneventsinc@gmail.com</a></p>
        <p>Halifax, NS</p>
      </div>
    </section>
  );
} 