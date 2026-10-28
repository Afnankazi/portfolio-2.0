import type { Metadata } from "next";
import { site, siteUrl } from "./site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.title,
  description: site.description,
  applicationName: "Afnan Kazi Portfolio",
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  category: "technology",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: site.title,
    description: site.description,
    siteName: "Afnan Kazi Portfolio",
    url: "/",
    locale: "en_US",
    images: [{ url: site.image, alt: "A moonlit Japanese temple from Afnan Kazi's interactive portfolio" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [{ url: site.image, alt: "Afnan Kazi's interactive Japanese temple portfolio" }],
  },
  icons: { icon: "/kage.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: site.name,
        url: siteUrl,
        jobTitle: "Software Developer",
        sameAs: site.profiles,
        knowsAbout: ["JavaScript", "TypeScript", "React", "Next.js", "Java", "Spring Boot", "Three.js"],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "Afnan Kazi Portfolio",
        url: siteUrl,
        description: site.description,
        inLanguage: "en",
        author: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: site.title,
        description: site.description,
        isPartOf: { "@id": `${siteUrl}/#website` },
        mainEntity: { "@id": `${siteUrl}/#person` },
      },
    ],
  };

  return <html lang="en"><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    {children}
  </body></html>;
}
