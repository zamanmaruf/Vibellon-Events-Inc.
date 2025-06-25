import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-background overflow-hidden" id="hero">
      <Image
        src="/hero-party.jpg"
        alt="Party crowd with DJ"
        fill
        className="object-cover object-center opacity-100"
        priority
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full pt-24 pb-20">
        <h1 className="text-5xl md:text-7xl font-light uppercase text-white tracking-widest mb-4 drop-shadow-xl">
          VIBELLION EVENTS INC.
        </h1>
        <p className="text-xl md:text-2xl text-white/80 font-light mb-8 drop-shadow-lg">
          Curating Unforgettable Nights for the Elite
        </p>
        <a
          href="#contact"
          className="px-8 py-4 rounded-full bg-black/70 text-white font-bold text-xl shadow-lg hover:bg-black/80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/40"
        >
          BOOK YOUR EVENT
        </a>
      </div>
    </section>
  );
} 