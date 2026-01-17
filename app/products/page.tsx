import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ProductsGrid from "@/components/products-grid"
import { siteUrl } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Premium Herbal Supplements | Shop All Products",
  description:
    "Browse our complete collection of premium herbal supplements. Moringa, Black Seed, Ginger, Cinnamon, Maca, Neem, Fenugreek, and more. Available in 60, 100, and 150 capsule bottles. Ships to Ghana and Nigeria.",
  keywords: [
    "herbal supplements",
    "moringa capsules",
    "black seed capsules",
    "ginger supplements",
    "cinnamon capsules",
    "maca root",
    "neem capsules",
    "fenugreek supplements",
    "turmeric capsules",
    "herbal wellness products",
  ],
  openGraph: {
    title: "Premium Herbal Supplements | Shop All Products",
    description:
      "Browse our complete collection of premium herbal supplements. Available in 60, 100, and 150 capsule bottles.",
    url: `${siteUrl}/products`,
    images: [
      {
        url: `${siteUrl}/products/greennova-moringa.jpg`,
        width: 1200,
        height: 630,
        alt: "Nature by Nurtura Premium Herbal Supplements",
      },
    ],
  },
  twitter: {
    title: "Premium Herbal Supplements | Shop All Products",
    description:
      "Browse our complete collection of premium herbal supplements. Available in 60, 100, and 150 capsule bottles.",
    images: [`${siteUrl}/products/greennova-moringa.jpg`],
  },
  alternates: {
    canonical: `${siteUrl}/products`,
  },
}

export default function Products() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ProductsGrid />
      <Footer />
    </main>
  )
}
