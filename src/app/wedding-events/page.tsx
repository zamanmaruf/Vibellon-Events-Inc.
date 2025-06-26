"use client";
import Head from "next/head";
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
    <>
      <Head>
        <title>Wedding Events | Vibellion Events Inc.</title>
        <meta name="description" content="Plan your dream wedding with Vibellion Events Inc. Luxury venues, catering, photography, and music for unforgettable celebrations in Canada." />
        <link rel="canonical" href="https://www.vibellioneventsinc.ca/wedding-events" />
        <meta property="og:type" content="event" />
        <meta property="og:title" content="Wedding Events | Vibellion Events Inc." />
        <meta property="og:description" content="Plan your dream wedding with Vibellion Events Inc. Luxury venues, catering, photography, and music for unforgettable celebrations in Canada." />
        <meta property="og:image" content="/wedding-couple.jpg" />
        <meta property="og:url" content="https://www.vibellioneventsinc.ca/wedding-events" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wedding Events | Vibellion Events Inc." />
        <meta name="twitter:description" content="Plan your dream wedding with Vibellion Events Inc. Luxury venues, catering, photography, and music for unforgettable celebrations in Canada." />
        <meta name="twitter:image" content="/wedding-couple.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "Wedding Events",
              "startDate": "2025-07-01T16:00",
              "location": {
                "@type": "Place",
                "name": "Vibellion Events Venue",
                "address": "Toronto, Canada"
              },
              "image": [
                "https://www.vibellioneventsinc.ca/wedding-couple.jpg"
              ],
              "description": "Plan your dream wedding with Vibellion Events Inc. Luxury venues, catering, photography, and music for unforgettable celebrations in Canada.",
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
        <h1 className="text-4xl font-bold mb-6">Wedding Events</h1>
        <nav className="mb-8 flex flex-wrap gap-4">
          <Link href="/">Home</Link>
          <Link href="/club-nights">Club Nights</Link>
          <Link href="/artist-booking">Artist Bookings</Link>
          <Link href="/vip-experiences">VIP Experiences</Link>
        </nav>
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
      </main>
    </>
  );
} 