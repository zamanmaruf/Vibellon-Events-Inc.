"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function ClubNightsPage() {
  return (
    <>
      <Head>
        <title>Club Nights | Vibellion Events Inc.</title>
        <meta name="description" content="Experience luxury nightlife with Vibellion's Club Nights. Enjoy exclusive events, live DJs, VIP tables, and unforgettable party moments in Canada." />
        <link rel="canonical" href="https://www.vibellioneventsinc.ca/club-nights" />
        <meta property="og:type" content="event" />
        <meta property="og:title" content="Club Nights | Vibellion Events Inc." />
        <meta property="og:description" content="Experience luxury nightlife with Vibellion's Club Nights. Enjoy exclusive events, live DJs, VIP tables, and unforgettable party moments in Canada." />
        <meta property="og:image" content="/gallery1.jpg" />
        <meta property="og:url" content="https://www.vibellioneventsinc.ca/club-nights" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Club Nights | Vibellion Events Inc." />
        <meta name="twitter:description" content="Experience luxury nightlife with Vibellion's Club Nights. Enjoy exclusive events, live DJs, VIP tables, and unforgettable party moments in Canada." />
        <meta name="twitter:image" content="/gallery1.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "Club Nights",
              "startDate": "2025-07-01T21:00",
              "location": {
                "@type": "Place",
                "name": "Vibellion Events Venue",
                "address": "Toronto, Canada"
              },
              "image": [
                "https://www.vibellioneventsinc.ca/gallery1.jpg"
              ],
              "description": "Experience luxury nightlife with Vibellion's Club Nights. Enjoy exclusive events, live DJs, VIP tables, and unforgettable party moments in Canada.",
              "organizer": {
                "@type": "Organization",
                "name": "Vibellion Events Inc.",
                "url": "https://www.vibellioneventsinc.ca/"
              }
            })
          }}
        />
      </Head>
      <main>
        <h1 className="text-4xl font-bold mb-6">Club Nights</h1>
        <nav className="mb-8 flex flex-wrap gap-4">
          <Link href="/">Home</Link>
          <Link href="/artist-booking">Artist Bookings</Link>
          <Link href="/wedding-events">Wedding Events</Link>
          <Link href="/vip-experiences">VIP Experiences</Link>
        </nav>
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
      </main>
    </>
  );
} 