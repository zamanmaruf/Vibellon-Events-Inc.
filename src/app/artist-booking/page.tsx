"use client";
import Head from "next/head";
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
    <>
      <Head>
        <title>Artist Booking | Vibellion Events Inc.</title>
        <meta name="description" content="Book elite DJs, bands, and MCs for your next event with Vibellion. Discover top talent and elevate your party experience in Canada." />
        <link rel="canonical" href="https://www.vibellioneventsinc.ca/artist-booking" />
        <meta property="og:type" content="event" />
        <meta property="og:title" content="Artist Booking | Vibellion Events Inc." />
        <meta property="og:description" content="Book elite DJs, bands, and MCs for your next event with Vibellion. Discover top talent and elevate your party experience in Canada." />
        <meta property="og:image" content="/gallery6.jpg" />
        <meta property="og:url" content="https://www.vibellioneventsinc.ca/artist-booking" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Artist Booking | Vibellion Events Inc." />
        <meta name="twitter:description" content="Book elite DJs, bands, and MCs for your next event with Vibellion. Discover top talent and elevate your party experience in Canada." />
        <meta name="twitter:image" content="/gallery6.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "Artist Booking",
              "startDate": "2025-07-01T21:00",
              "location": {
                "@type": "Place",
                "name": "Vibellion Events Venue",
                "address": "Toronto, Canada"
              },
              "image": [
                "https://www.vibellioneventsinc.ca/gallery6.jpg"
              ],
              "description": "Book elite DJs, bands, and MCs for your next event with Vibellion. Discover top talent and elevate your party experience in Canada.",
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
        <h1 className="text-4xl font-bold mb-6">Artist Booking</h1>
        <nav className="mb-8 flex flex-wrap gap-4">
          <Link href="/">Home</Link>
          <Link href="/club-nights">Club Nights</Link>
          <Link href="/wedding-events">Wedding Events</Link>
          <Link href="/vip-experiences">VIP Experiences</Link>
        </nav>
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
      </main>
    </>
  );
} 