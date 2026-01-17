import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import { siteUrl } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch",
  description:
    "Contact Nature by Nurtura for questions about our premium herbal wellness products. Reach us via Instagram or email. We're here to guide you on your wellness journey.",
  openGraph: {
    title: "Contact Us | Nature by Nurtura",
    description:
      "Contact Nature by Nurtura for questions about our premium herbal wellness products. We're here to guide you on your wellness journey.",
    url: `${siteUrl}/contact`,
    images: [
      {
        url: `${siteUrl}/logo 7.png`,
        width: 1200,
        height: 630,
        alt: "Contact Nature by Nurtura",
      },
    ],
  },
  twitter: {
    title: "Contact Us | Nature by Nurtura",
    description:
      "Contact Nature by Nurtura for questions about our premium herbal wellness products.",
    images: [`${siteUrl}/logo 7.png`],
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
}

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactForm />
      <Footer />
    </main>
  )
}
