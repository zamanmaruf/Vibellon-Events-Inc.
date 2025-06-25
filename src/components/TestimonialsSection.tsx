const testimonials = [
  {
    quote: "Vibellion made our night truly unforgettable. The energy and class were unmatched!",
    name: "Aarav S.",
  },
  {
    quote: "The best Desi nightlife experience in Halifax. Highly recommended!",
    name: "Priya K.",
  },
  {
    quote: "From start to finish, every detail was perfect. Thank you, Vibellion!",
    name: "Rahul M.",
  },
  {
    quote: "Absolutely loved the VIP experience. Will book again!",
    name: "Simran D.",
  },
  {
    quote: "Professional, creative, and so much fun. Our wedding was magical!",
    name: "Neha & Arjun",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full max-w-4xl mx-auto py-20 px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 tracking-wide uppercase text-center">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-black/70 rounded-2xl p-8 shadow-lg border border-white/10 flex flex-col items-center">
            <p className="italic text-lg text-white mb-4">“{t.quote}”</p>
            <span className="text-muted text-sm">— {t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
} 