import React, { ReactNode } from "react";
import Head from "next/head";
import "./globals.css";

const defaultTitle = "Vibellion Events Inc. | Premier Event Planning & Luxury Experiences";
const defaultDescription = "Vibellion Events Inc. offers luxury event planning, club nights, artist bookings, weddings, and VIP experiences in Canada. Elevate your next event with us.";
const defaultUrl = "https://www.vibellioneventsinc.ca";
const defaultOgImage = "/logo.png";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{defaultTitle}</title>
        <meta name="description" content={defaultDescription} />
        <link rel="canonical" href={defaultUrl} />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={defaultTitle} />
        <meta property="og:description" content={defaultDescription} />
        <meta property="og:image" content={defaultOgImage} />
        <meta property="og:url" content={defaultUrl} />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={defaultTitle} />
        <meta name="twitter:description" content={defaultDescription} />
        <meta name="twitter:image" content={defaultOgImage} />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* Google Analytics & Search Console Placeholder */}
        {/* <!-- Google Analytics: Paste your GA script here --> */}
        {/* <!-- Google Search Console: Paste verification meta here --> */}
        {/* Structured Data: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Vibellion Events Inc.",
              "url": defaultUrl,
              "logo": `${defaultUrl}/logo.png`,
              "sameAs": [
                "https://www.instagram.com/", // Add your real social links
                "https://www.facebook.com/"
              ]
            })
          }}
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
