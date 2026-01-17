import type { Metadata } from "next"
import Hero from "@/components/hero"
import Philosophy from "@/components/philosophy"
import FeaturedProducts from "@/components/featured-products"
import Testimonial from "@/components/testimonial"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"
import { siteUrl } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Premium Herbal Wellness Products | Nature by Nurtura",
  description:
    "Discover premium herbal wellness products crafted with intention. Shop potent, precise, and pure herbal supplements including Moringa, Black Seed, Ginger, and more. Free shipping to Ghana and Nigeria.",
  openGraph: {
    title: "Premium Herbal Wellness Products | Nature by Nurtura",
    description:
      "Discover premium herbal wellness products crafted with intention. Shop potent, precise, and pure herbal supplements.",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/p1.jpg`,
        width: 1200,
        height: 630,
        alt: "Nature by Nurtura Premium Herbal Products",
      },
    ],
  },
  twitter: {
    title: "Premium Herbal Wellness Products | Nature by Nurtura",
    description:
      "Discover premium herbal wellness products crafted with intention. Shop potent, precise, and pure herbal supplements.",
    images: [`${siteUrl}/p1.jpg`],
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedProducts />
      <Philosophy />
      <Testimonial />
      <Footer />
    </main>
  )
}
