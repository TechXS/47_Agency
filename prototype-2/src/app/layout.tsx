import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import { ViewTransitions } from "next-view-transitions";

import { getSettings, asImageSrc } from "@/lib/content";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

const gambarino = localFont({
  src: "./gambarino.woff2",
  display: "swap",
  variable: "--font-gambarino",
});

//export async function generateMetadata(): Promise<Metadata> {
 // const settings = await getSettings();

  //return {
   // title: settings.site_title || "TechX KE - Digital Agency",
   // description:
  //    settings.meta_description ||
//      "Building Web Products & Designs That Matter. TechX KE is a digital agency specializing in modern web applications, automation, and creative design.",
//    openGraph: {
//      images: settings.fallback_og_image && asImageSrc(settings.fallback_og_image)
//        ? [settings.fallback_og_image.url]
//        : ["/cote-royale-og-image.png"],
//    },
//  };
//}

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();

  // Use your Prismic fallback or static files
  const ogImageUrl = settings.fallback_og_image && asImageSrc(settings.fallback_og_image)
    ? asImageSrc(settings.fallback_og_image)
    : '/icon.png';  // Your new static OG image in /app or /public

  return {
    metadataBase: new URL('https://techxs.dpdns.org'),
    title: settings.site_title || "TechXS KE - Digital Agency",
    description:
      settings.meta_description ||
      "Building Web Products & Designs That Matter. TechXS KE is a digital agency specializing in modern web applications, automation, and creative design.",
    
    // Icons setup – Next.js auto-handles favicon.ico/icon.png/apple-icon.png if files exist,
    // but explicit is safer + supports custom paths
    icons: {
      icon: [
        { url: '/icon.ico' },          // Primary favicon
        { url: '/icon.png', type: 'image/png' },  // Optional high-res
      ],
      apple: [
        { url: '/icon.png', sizes: '180x180', type: 'image/png' },
      ],
      // shortcut: '/favicon.ico',  // Optional legacy
    },

    openGraph: {
      title: settings.site_title || "TechXS KE - Digital Agency",
      description: settings.meta_description || "...",
      url: "https://techxs.dpdns.org",
      siteName: "TechXS KE",
      images: [
        {
          url: ogImageUrl ??'/icon.ico',
          width: 1200,
          height: 630,
          alt: "TechXS KE - AI, Web Apps & Automation in Kenya",
        },
      ],
      locale: "en_KE",
      type: "website",
    },

    // Optional: Twitter card (similar to OG)
    twitter: {
      card: "summary_large_image",
      title: settings.site_title || "TechXS KE",
      description: settings.meta_description || "...",
      images: [ogImageUrl ?? '/icon.ico'],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSettings();

  return (
    <ViewTransitions>
      <html
        lang="en"
        className={`${raleway.variable} ${gambarino.variable} antialiased`}
      >
        <body className="bg-neutral-900 text-white">
          <NavBar settings={settings} />
          <main className="pt-14 md:pt-16">{children}</main>
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
