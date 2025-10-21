import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Preloader } from "@/components/preloader"
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
  title: "Nature by Nurtura | Premium Herbal Wellness",
  description: "Potent. Precise. Pure. Wellness is earned, not marketed.",
  generator: "v0.app",
  icons: {
    icon: "/logo 7.png",
    apple: "/logo 7.png",
    shortcut: "/logo 7.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}>
        <Preloader />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
