import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Preloader } from "@/components/preloader"
import { GoogleAnalytics } from "@/components/google-analytics"
import { OrganizationStructuredData, WebsiteStructuredData } from "@/components/structured-data"
import { Providers } from "@/components/providers"
import { siteUrl } from "@/lib/constants"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nature by Nurtura | Premium Herbal Wellness Products",
    template: "%s | Nature by Nurtura",
  },
  description:
    "Premium herbal wellness products crafted with intention. Potent, precise, and pure herbal supplements for energy, immunity, balance, and vitality. Shop premium Moringa, Black Seed, Ginger, and more. Ships to Ghana and Nigeria.",
  keywords: [
    "herbal supplements",
    "natural wellness",
    "premium herbs",
    "moringa capsules",
    "black seed oil",
    "herbal medicine",
    "wellness products",
    "natural health",
    "herbal remedies",
    "organic supplements",
    "Ghana herbal products",
    "Nigeria wellness",
    "herbal capsules",
    "natural energy",
    "immune support",
  ],
  authors: [{ name: "Nature by Nurtura" }],
  creator: "Nature by Nurtura",
  publisher: "Nature by Nurtura",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Nature by Nurtura",
    title: "Nature by Nurtura | Premium Herbal Wellness Products",
    description:
      "Premium herbal wellness products crafted with intention. Potent, precise, and pure herbal supplements for energy, immunity, balance, and vitality.",
    images: [
      {
        url: `${siteUrl}/logo 7.png`,
        width: 1200,
        height: 630,
        alt: "Nature by Nurtura - Premium Herbal Wellness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nature by Nurtura | Premium Herbal Wellness Products",
    description:
      "Premium herbal wellness products crafted with intention. Potent, precise, and pure.",
    images: [`${siteUrl}/logo 7.png`],
    creator: "@naturebynurtura",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo 7.png",
    apple: "/logo 7.png",
    shortcut: "/logo 7.png",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Health & Wellness",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}>
        <Providers>
          <OrganizationStructuredData />
          <WebsiteStructuredData />
          <Preloader />
          {children}
          <GoogleAnalytics />
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
