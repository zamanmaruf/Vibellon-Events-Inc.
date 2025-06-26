"use client";
import Image from "next/image";
import Link from "next/link";

const packages = [
  {
    name: "Classic Romance",
    img: "/classic-romance.jpg",
  },
  {
    name: "Modern Elegance",
    img: "/modern-elegance.jpg",
  },
  {
    name: "Luxury Celebration",
    img: "/gallery6.jpg",
  },
];

export default function WeddingEventsPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] flex flex-col justify-center items-center overflow-hidden">
        <Image src="/wedding-couple.jpg" alt="Wedding Events" fill className="object-cover brightness-75" priority />
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-widest text-center">WEDDING EVENTS</h1>
          <p className="text-lg md:text-2xl font-light mt-2 text-center">Refined, tailored, luxury wedding service</p>
          <Link href="#packages" className="mt-6 bg-purple-700 hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all">Explore Packages</Link>
        </div>
      </div>
      {/* Icon Navigation */}
      <div className="flex flex-wrap justify-center gap-8 mt-8 mb-4 px-4">
        <div className="flex flex-col items-center">
          <span className="text-3xl mb-2">🏠</span>
          <span className="font-semibold">Venues</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl mb-2">🍽️</span>
          <span className="font-semibold">Catering</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl mb-2">📸</span>
          <span className="font-semibold">Photography</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl mb-2">🎵</span>
          <span className="font-semibold">Music & DJs</span>
        </div>
      </div>
      {/* Featured Packages */}
      <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-8 tracking-wide uppercase text-center">Featured Packages</h2>
      <div id="packages" className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mb-12">
        {packages.map((pkg) => (
          <div key={pkg.name} className="bg-[#18181b] rounded-2xl shadow-lg flex flex-col items-center p-6 hover:shadow-purple-700/40 transition-all border border-gray-800 hover:border-purple-500">
            <Image src={pkg.img} alt={pkg.name} width={300} height={200} className="rounded-xl object-cover w-full h-40 mb-4" />
            <div className="text-lg font-bold mb-2">{pkg.name}</div>
            <button className="w-full border border-white rounded-full px-6 py-2 text-white hover:bg-purple-700 hover:border-purple-700 transition-all">View Details</button>
          </div>
        ))}
      </div>
      {/* Footer */}
      <footer className="bg-[#111] text-gray-400 py-6 flex flex-col items-center mt-auto">
        <div className="flex gap-4 mb-2">
          <a href="#" aria-label="Instagram" className="hover:text-white"><span>📸</span></a>
          <a href="#" aria-label="Twitter" className="hover:text-white"><span>🐦</span></a>
          <a href="#" aria-label="Facebook" className="hover:text-white"><span>📘</span></a>
        </div>
        <div className="text-xs">© 2025 Vibellion Events Inc.</div>
      </footer>
    </div>
  );
} 