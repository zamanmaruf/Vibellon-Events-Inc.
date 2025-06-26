import Link from "next/link";

const services = [
  { title: "Club Nights", icon: "🎧", href: "/club-nights" },
  { title: "Artist Bookings", icon: "🎤", href: "/artist-booking" },
  { title: "Wedding Events", icon: "💍", href: "/wedding-events" },
  { title: "VIP Experiences", icon: "🥂", href: "/vip-experiences" },
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full max-w-5xl mx-auto py-20 px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 tracking-wide uppercase text-center">Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {services.map((service) => (
          service.href ? (
            <Link
              key={service.title}
              href={service.href}
              className="bg-zinc-900 rounded-xl flex flex-col items-center justify-center p-8 shadow-lg hover:shadow-purple-700/40 transition-shadow duration-200 group border border-zinc-800 hover:border-purple-500"
            >
              <span className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                {service.icon}
              </span>
              <span className="text-lg font-semibold tracking-wide group-hover:text-purple-400 transition-colors duration-200">
                {service.title}
              </span>
            </Link>
          ) : (
            <div
              key={service.title}
              className="bg-zinc-900 rounded-xl flex flex-col items-center justify-center p-8 shadow-lg border border-zinc-800 opacity-60 cursor-not-allowed"
            >
              <span className="text-4xl mb-4">{service.icon}</span>
              <span className="text-lg font-semibold tracking-wide">{service.title}</span>
            </div>
          )
        ))}
      </div>
    </section>
  );
} 