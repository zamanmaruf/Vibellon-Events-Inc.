"use client";
import Image from "next/image";
import Link from "next/link";

const artists = [
  {
    name: "Emma Stone",
    tag: "Available this month · House",
    img: "/gallery6.jpg",
  },
  {
    name: "DJ Nexus",
    tag: "EDM · Resident DJ",
    img: "/gallery1.jpg",
  },
  {
    name: "Luna Ray",
    tag: "Pop · Rising Star",
    img: "/gallery2.jpg",
  },
];

export default function ArtistBookingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] md:h-[60vh] flex flex-col justify-center items-center overflow-hidden">
        <Image src="/gallery3.jpg" alt="Artist Booking Hero" fill className="object-cover brightness-75" priority />
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
          <h1 className="text-3xl md:text-5xl font-bold uppercase text-white text-center tracking-widest">BOOK ELITE TALENT FOR YOUR NEXT EVENT</h1>
          <p className="text-lg md:text-2xl font-light text-gray-300 mt-2 text-center">From international DJs to rising stars — we bring the vibe to life.</p>
          <Link href="#artists" className="mt-6 bg-purple-700 hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all">Browse Artists</Link>
        </div>
      </div>
      {/* Talent Category Icons */}
      <div className="flex flex-wrap justify-center gap-4 mt-8 mb-4 px-4">
        <div className="group bg-[#111] rounded-2xl p-6 flex flex-col items-center w-40 shadow-md hover:shadow-purple-500/40 transition-all border border-gray-800 hover:border-purple-500 cursor-pointer">
          <span className="text-3xl mb-2">🎧</span>
          <span className="font-semibold">DJs</span>
        </div>
        <div className="group bg-[#111] rounded-2xl p-6 flex flex-col items-center w-40 shadow-md hover:shadow-blue-500/40 transition-all border border-gray-800 hover:border-blue-500 cursor-pointer">
          <span className="text-3xl mb-2">🎸</span>
          <span className="font-semibold">Live Bands</span>
        </div>
        <div className="group bg-[#111] rounded-2xl p-6 flex flex-col items-center w-40 shadow-md hover:shadow-pink-500/40 transition-all border border-gray-800 hover:border-pink-500 cursor-pointer">
          <span className="text-3xl mb-2">🎤</span>
          <span className="font-semibold">Hosts & MCs</span>
        </div>
        <div className="group bg-[#111] rounded-2xl p-6 flex flex-col items-center w-40 shadow-md hover:shadow-indigo-500/40 transition-all border border-gray-800 hover:border-indigo-500 cursor-pointer">
          <span className="text-3xl mb-2">🖼️</span>
          <span className="font-semibold">Event Highlights</span>
        </div>
      </div>
      {/* Featured Artists Section */}
      <div id="artists" className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mb-12">
        {artists.map((artist) => (
          <div key={artist.name} className="bg-[#18181b] rounded-2xl shadow-lg flex flex-col items-center p-6 hover:shadow-purple-700/40 transition-all border border-gray-800 hover:border-purple-500">
            <Image src={artist.img} alt={artist.name} width={200} height={200} className="rounded-full object-cover w-32 h-32 mb-4 border-4 border-gray-900" />
            <div className="text-xl font-bold mb-1">{artist.name}</div>
            <div className="text-sm text-gray-400 mb-4">{artist.tag}</div>
            <button className="border border-white rounded-full px-6 py-2 text-white hover:bg-purple-700 hover:border-purple-700 transition-all">Book Now</button>
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