import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { clinicConfig } from "@/config/clinic";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AfterHoursBanner } from "@/components/AfterHoursBanner";
import { FloatingContact } from "@/components/FloatingContact";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteTitle = "Beacon Bay Veterinary Clinic | Vet in Beacon Bay, East London";
const siteDescription =
  "Premium, clinical veterinary care in Beacon Bay, East London. Phone bookings only with after-hours on-call support.";

export const metadata: Metadata = {
  metadataBase: new URL(clinicConfig.siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Beacon Bay Veterinary Clinic",
  },
  description: siteDescription,
  alternates: {
    canonical: clinicConfig.siteUrl,
  },
  keywords: [
    "vet Beacon Bay",
    "veterinary East London",
    "exotic vet East London",
    "Beacon Bay Veterinary Clinic",
    "vet Eastern Cape",
    "after-hours vet East London",
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "en_ZA",
    siteName: "Beacon Bay Veterinary Clinic",
    images: [
      {
        url: "/stock/hero.png",
        width: 1200,
        height: 630,
        alt: "Beacon Bay Veterinary Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/stock/hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    name: clinicConfig.name,
    telephone: clinicConfig.phone,
    email: clinicConfig.email || undefined,
    url: clinicConfig.siteUrl,
    logo: `${clinicConfig.siteUrl}/logo.jpg`,
    priceRange: "$$",
    hasMap: clinicConfig.mapLink,
    sameAs: [
      clinicConfig.socials.facebook,
    ].filter(Boolean),
    address: {
      "@type": "PostalAddress",
      streetAddress: clinicConfig.address,
      addressLocality: "East London",
      addressRegion: "Eastern Cape",
      postalCode: "5205",
      addressCountry: "ZA",
    },
    areaServed: "Beacon Bay, East London",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:30",
        closes: "12:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "17:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "09:30",
        closes: "11:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "17:00",
        closes: "18:00",
      },
    ],
  };

  return (
    <html lang="en-ZA" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AfterHoursBanner />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
        <Analytics />
      </body>
    </html>
  );
}
