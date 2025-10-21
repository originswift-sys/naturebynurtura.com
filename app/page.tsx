import Hero from "@/components/hero"
import Philosophy from "@/components/philosophy"
import FeaturedProducts from "@/components/featured-products"
import Testimonial from "@/components/testimonial"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Philosophy />
      <FeaturedProducts />
      <Testimonial />
      <Footer />
    </main>
  )
}
