"use client";
import Image from "next/image";
import Link from "next/link";

export default function ClubNightsPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      {/* Header Section */}
      <div className="relative w-full h-[40vh] md:h-[60vh] flex flex-col justify-center items-center overflow-hidden">
        <Image src="/gallery1.jpg" alt="Club Nights" fill className="object-cover brightness-75" priority />
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-widest">CLUB NIGHTS</h1>
          <p className="text-lg md:text-2xl font-light mt-2">By Vibellion</p>
        </div>
      </div>
      {/* Icon Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mt-8 mb-4 px-4">
        <Link href="#upcoming" className="group bg-[#111] rounded-2xl p-6 flex flex-col items-center w-40 shadow-md hover:shadow-purple-500/40 transition-all border border-gray-800 hover:border-purple-500">
          <span className="text-3xl mb-2">📅</span>
          <span className="font-semibold">Upcoming Events</span>
        </Link>
        <Link href="#dj-lineups" className="group bg-[#111] rounded-2xl p-6 flex flex-col items-center w-40 shadow-md hover:shadow-blue-500/40 transition-all border border-gray-800 hover:border-blue-500">
          <span className="text-3xl mb-2">🎤</span>
          <span className="font-semibold">Live DJ Lineups</span>
        </Link>
        <Link href="#vip-tables" className="group bg-[#111] rounded-2xl p-6 flex flex-col items-center w-40 shadow-md hover:shadow-pink-500/40 transition-all border border-gray-800 hover:border-pink-500">
          <span className="text-3xl mb-2">🍾</span>
          <span className="font-semibold">VIP Tables</span>
        </Link>
        <Link href="#highlights" className="group bg-[#111] rounded-2xl p-6 flex flex-col items-center w-40 shadow-md hover:shadow-indigo-500/40 transition-all border border-gray-800 hover:border-indigo-500">
          <span className="text-3xl mb-2">🖼️</span>
          <span className="font-semibold">Event Highlights</span>
        </Link>
      </div>
      {/* Call-to-Action Buttons */}
      <div className="relative w-full h-[30vh] md:h-[40vh] flex items-center justify-center mb-8">
        <Image src="/gallery2.jpg" alt="Party Hero" fill className="object-cover brightness-75" />
        <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center w-full justify-center">
          <Link href="#upcoming" className="bg-purple-700 hover:bg-purple-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transition-all mb-2 md:mb-0">Upcoming Events</Link>
          <Link href="#vip-tables" className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transition-all">VIP Tables</Link>
        </div>
      </div>
      {/* Secondary Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        <Link href="#upcoming" className="bg-[#18181b] hover:bg-purple-800 text-white px-6 py-2 rounded-lg border border-gray-700 hover:border-purple-500 transition-all">Upcoming</Link>
        <Link href="#gallery" className="bg-[#18181b] hover:bg-blue-800 text-white px-6 py-2 rounded-lg border border-gray-700 hover:border-blue-500 transition-all">Gallery</Link>
        <Link href="#book" className="bg-[#18181b] hover:bg-pink-800 text-white px-6 py-2 rounded-lg border border-gray-700 hover:border-pink-500 transition-all">Book Now</Link>
      </div>
      {/* Gallery Section */}
      <div id="gallery" className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mb-12">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <Image src="/gallery3.jpg" alt="Nightlife 1" width={400} height={300} className="object-cover w-full h-60 hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <Image src="/gallery4.jpg" alt="Nightlife 2" width={400} height={300} className="object-cover w-full h-60 hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <Image src="/gallery5.jpg" alt="Nightlife 3" width={400} height={300} className="object-cover w-full h-60 hover:scale-105 transition-transform duration-300" />
        </div>
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