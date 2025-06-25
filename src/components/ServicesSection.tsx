const services = [
  { title: "Club Nights", icon: "🎧" },
  { title: "Artist Bookings", icon: "🎤" },
  { title: "Wedding Events", icon: "💍" },
  { title: "VIP Experiences", icon: "🥂" },
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full max-w-5xl mx-auto py-20 px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 tracking-wide uppercase text-center">Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-black/60 rounded-2xl p-8 flex flex-col items-center shadow-lg border border-white/10 hover:shadow-glow hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-white mb-2 uppercase tracking-wide">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
} 