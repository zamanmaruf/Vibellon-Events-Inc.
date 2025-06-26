"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function VIPExperiencesPage() {
  return (
    <>
      <Head>
        <title>VIP Experiences | Vibellion Events Inc.</title>
        <meta name="description" content="Discover exclusive, personalized VIP experiences for high-profile guests. Vibellion Events Inc. delivers luxury, privacy, and unforgettable moments in Canada." />
        <link rel="canonical" href="https://www.vibellioneventsinc.ca/vip-experiences" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content="VIP Experiences | Vibellion Events Inc." />
        <meta property="og:description" content="Discover exclusive, personalized VIP experiences for high-profile guests. Vibellion Events Inc. delivers luxury, privacy, and unforgettable moments in Canada." />
        <meta property="og:image" content="/vip-experience.jpg" />
        <meta property="og:url" content="https://www.vibellioneventsinc.ca/vip-experiences" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VIP Experiences | Vibellion Events Inc." />
        <meta name="twitter:description" content="Discover exclusive, personalized VIP experiences for high-profile guests. Vibellion Events Inc. delivers luxury, privacy, and unforgettable moments in Canada." />
        <meta name="twitter:image" content="/vip-experience.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Vibellion Events Inc. VIP Experiences",
              "image": "https://www.vibellioneventsinc.ca/vip-experience.jpg",
              "@id": "https://www.vibellioneventsinc.ca/vip-experiences",
              "url": "https://www.vibellioneventsinc.ca/vip-experiences",
              "telephone": "+1-555-555-5555",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Luxury Ave",
                "addressLocality": "Toronto",
                "addressRegion": "ON",
                "postalCode": "M5V 2T6",
                "addressCountry": "CA"
              },
              "description": "Discover exclusive, personalized VIP experiences for high-profile guests. Vibellion Events Inc. delivers luxury, privacy, and unforgettable moments in Canada."
            })
          }}
        />
      </Head>
      <main>
        <h1 className="text-4xl font-bold mb-6">VIP Experiences</h1>
        <nav className="mb-8 flex flex-wrap gap-4">
          <Link href="/">Home</Link>
          <Link href="/club-nights">Club Nights</Link>
          <Link href="/artist-booking">Artist Bookings</Link>
          <Link href="/wedding-events">Wedding Events</Link>
        </nav>
        <div className="relative min-h-screen w-full font-sans text-white flex flex-col">
          {/* Background Image */}
          <div className="absolute inset-0 -z-10">
            <Image src="/vip-experience.jpg" alt="VIP Experience" fill className="object-cover brightness-75" priority />
          </div>
          {/* Hero Section */}
          <section className="flex flex-col items-center justify-center h-[60vh] text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-widest mb-4 drop-shadow-lg">VIP EXPERIENCES</h1>
            <p className="text-lg md:text-2xl max-w-2xl mx-auto text-gray-200 mb-8 drop-shadow">Personalized. Exclusive. Unforgettable. For those who expect the extraordinary at every moment.</p>
          </section>
          {/* Personalization Section */}
          <section className="max-w-3xl mx-auto bg-black/70 rounded-2xl p-8 mb-10 shadow-xl border border-zinc-800">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-purple-300">Tailored For You</h2>
            <ul className="space-y-3 text-lg text-gray-200">
              <li>• Dedicated VIP host and concierge</li>
              <li>• Private lounges & exclusive access</li>
              <li>• Custom menus, entertainment, and décor</li>
              <li>• Pre-event consultation & post-event follow-up</li>
              <li>• Discreet, high-touch service for every guest</li>
            </ul>
          </section>
          {/* Call to Action */}
          <div className="flex justify-center mb-16">
            <a href="/contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-700 to-blue-600 text-white font-bold text-lg shadow-lg hover:scale-105 hover:shadow-purple-500/40 transition-all duration-200">Request Your VIP Experience</a>
          </div>
          {/* Footer */}
          <footer className="w-full py-6 bg-black/80 text-center text-gray-400 text-sm mt-auto border-t border-zinc-800">
            © 2025 Vibellion Events Inc. | Discretion. Luxury. Excellence.
          </footer>
        </div>
      </main>
    </>
  );
} 