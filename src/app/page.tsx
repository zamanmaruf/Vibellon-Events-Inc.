import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import GallerySection from "../components/GallerySection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vibellion Events Inc. | Premier Event Planning & Luxury Experiences</title>
        <meta name="description" content="Vibellion Events Inc. offers luxury event planning, club nights, artist bookings, weddings, and VIP experiences in Canada. Elevate your next event with us." />
        <link rel="canonical" href="https://www.vibellioneventsinc.ca/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Vibellion Events Inc. | Premier Event Planning & Luxury Experiences" />
        <meta property="og:description" content="Vibellion Events Inc. offers luxury event planning, club nights, artist bookings, weddings, and VIP experiences in Canada. Elevate your next event with us." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://www.vibellioneventsinc.ca/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vibellion Events Inc. | Premier Event Planning & Luxury Experiences" />
        <meta name="twitter:description" content="Vibellion Events Inc. offers luxury event planning, club nights, artist bookings, weddings, and VIP experiences in Canada. Elevate your next event with us." />
        <meta name="twitter:image" content="/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Vibellion Events Inc.",
              "url": "https://www.vibellioneventsinc.ca/",
              "logo": "https://www.vibellioneventsinc.ca/logo.png",
              "sameAs": [
                "https://www.instagram.com/",
                "https://www.facebook.com/"
              ]
            })
          }}
        />
      </Head>
      <main className="bg-background min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  );
}
