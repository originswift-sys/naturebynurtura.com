import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import AboutContent from "@/components/about-content"
import { siteUrl } from "@/lib/constants"

export const metadata: Metadata = {
  title: "About Us | Our Story & Philosophy",
  description:
    "Learn about Nature by Nurtura's mission to provide premium herbal wellness products. Discover our commitment to purity, potency, and natural healing. Rooted in nature, crafted with intention.",
  openGraph: {
    title: "About Us | Nature by Nurtura",
    description:
      "Learn about Nature by Nurtura's mission to provide premium herbal wellness products. Rooted in nature, crafted with intention.",
    url: `${siteUrl}/about`,
    images: [
      {
        url: `${siteUrl}/p3.jpg`,
        width: 1200,
        height: 630,
        alt: "Nature by Nurtura - About Us",
      },
    ],
  },
  twitter: {
    title: "About Us | Nature by Nurtura",
    description:
      "Learn about Nature by Nurtura's mission to provide premium herbal wellness products. Rooted in nature, crafted with intention.",
    images: [`${siteUrl}/p3.jpg`],
  },
  alternates: {
    canonical: `${siteUrl}/about`,
  },
}

export default function About() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutContent />
      <Footer />
    </main>
  )
}
