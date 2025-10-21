import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ProductsGrid from "@/components/products-grid"

export default function Products() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ProductsGrid />
      <Footer />
    </main>
  )
}
