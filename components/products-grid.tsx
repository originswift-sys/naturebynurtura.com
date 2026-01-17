"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Sparkles, Leaf, ShoppingCart } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { whatsappNumber } from "@/lib/constants"
import { useToast } from "@/components/ui/use-toast"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type PricingOption = {
  size: string
  price: string
}

type Product = {
  id: number
  name: string
  benefit: string
  image: string
  ingredients: string
  benefits: string
  pricing?: PricingOption[]
}

const products: Product[] = [
  {
    id: 1,
    name: "GreenNova Moringa",
    benefit: "Complete Nutrition in a Leaf",
    image: "/products/greennova-moringa.jpg",
    ingredients: "Pure Moringa leaf powder (500mg)",
    benefits:
      "Moringa is nature's multivitamin, loaded with essential nutrients that nourish and energize the body from within. • Boosts natural energy and vitality • Enhances focus and mental clarity • Supports healthy metabolism and digestion • Strengthens hair, skin, and nails • Provides powerful antioxidant protection. Perfect For: Those with busy schedules, nutrient-deficient diets, or low energy levels. A daily essential for anyone who wants to stay energized, nourished, and mentally alert without relying on caffeine or synthetic supplements.",
    pricing: [
      { size: "150 capsules", price: "GH₵315" },
      { size: "100 capsules", price: "GH₵265" },
      { size: "60 capsules", price: "GH₵200" },
    ],
  },
  {
    id: 2,
    name: "Feminine Reset Capsules",
    benefit: "Deep Cleanse & Balance Formula",
    image: "/products/feminine-reset.jpg",
    ingredients: "Clove, Coriander, and Essential herbs blend",
    benefits:
      "A natural herbal blend that supports internal cleansing, odor control, and pH balance, restoring confidence and comfort. • Clears odor, discharge, and bacterial imbalance • Supports vaginal pH and internal freshness • Eases bloating, cramps, and fatigue • Promotes healthy hormonal balance • Encourages natural comfort and confidence. Perfect For: Women experiencing odor, discharge, or recurring infections. Also ideal for those who want to maintain daily freshness, confidence, and balanced feminine wellness naturally and discreetly.",
    pricing: [
      { size: "150 capsules", price: "GH₵335" },
      { size: "100 capsules", price: "GH₵285" },
      { size: "60 capsules", price: "GH₵245" },
    ],
  },
  {
    id: 3,
    name: "VitalBlack Black Seed",
    benefit: "Immunity & Vitality Support",
    image: "/products/vitalblack-blackseed.jpg",
    ingredients: "Pure Black Seed (Nigella Sativa) extract",
    benefits:
      "A powerhouse for total body defense and balance. Black Seed strengthens the immune system, balances hormones, and supports focus, stamina, and inner vitality. • Boosts immune and respiratory health • Regulates hormones naturally • Increases focus and daily energy • Reduces inflammation and supports detoxification • Promotes clear skin and balanced digestion. Perfect For: Those who want stronger immunity, sharper focus, and long-term vitality. Ideal for anyone seeking to balance hormones, boost natural stamina, and maintain clear, resilient skin through reduced inflammation and oxidative stress.",
    pricing: [
      { size: "150 capsules", price: "GH₵350" },
      { size: "100 capsules", price: "GH₵270" },
      { size: "60 capsules", price: "GH₵220" },
    ],
  },
  {
    id: 4,
    name: "CoreGuard Cloves",
    benefit: "Total Internal Cleanse",
    image: "/products/coreguard-cloves.jpg",
    ingredients: "Pure Clove extract (500mg)",
    benefits: "Clove is a natural detoxifier that restores balance by targeting harmful bacteria, candida, and digestive buildup. • Supports gut and oral health • Clears candida, parasites, and toxins • Relieves bloating and internal heaviness • Promotes fresh breath naturally • Enhances circulation and immune defense. Perfect For: Those who feel bloated, heavy, or notice recurring odor or imbalance. Excellent for people rebuilding gut health or clearing toxin buildup, promoting internal freshness and balanced digestion.",
    pricing: [
      { size: "150 capsules", price: "GH₵310" },
      { size: "100 capsules", price: "GH₵260" },
      { size: "60 capsules", price: "GH₵215" },
    ],
  },
  {
    id: 5,
    name: "VitalSpire Ginger",
    benefit: "Digestion & Immunity Boost",
    image: "/products/vitalspire-ginger.jpg",
    ingredients: "Pure Ginger root extract",
    benefits: "Ginger supports digestion, circulation, and overall vitality keeping the body light, energized, and resilient. • Eases bloating and indigestion • Strengthens immunity naturally • Relieves nausea and motion sickness • Promotes circulation and energy balance • Reduces inflammation and body discomfort. Perfect For: People with poor digestion, cold hands and feet, or frequent bloating. Great for anyone seeking better circulation, faster nutrient absorption, and a gentle internal cleanse that supports comfort, warmth, and smoother skin tone.",
    pricing: [
      { size: "150 capsules", price: "GH₵315" },
      { size: "100 capsules", price: "GH₵260" },
      { size: "60 capsules", price: "GH₵200" },
    ],
  },
  {
    id: 6,
    name: "CinnaVerve Cinnamon",
    benefit: "Circulation & Metabolism Support",
    image: "/products/cinnaverve-cinnamon.jpg",
    ingredients: "Pure Ceylon Cinnamon extract (500mg)",
    benefits: "Cinnamon promotes balanced energy, healthy circulation, and metabolic wellness, naturally strengthening the body's rhythm. • Improves blood circulation and oxygen flow • Balances blood sugar levels • Aids metabolism and fat-burning • Supports joint and muscle comfort • Boosts overall vitality and endurance. Perfect For: Those managing sugar levels, energy crashes, or sluggish metabolism. Especially beneficial for individuals seeking to stabilize appetite, boost circulation, and support a healthy weight while maintaining glowing, balanced skin through better internal flow.",
    pricing: [
      { size: "150 capsules", price: "GH₵330" },
      { size: "100 capsules", price: "GH₵245" },
      { size: "60 capsules", price: "GH₵195" },
    ],
  },
  {
    id: 7,
    name: "Ruut Maca Root",
    benefit: "Strength, Energy & Endurance",
    image: "/products/ruut-maca.jpg",
    ingredients: "Pure Maca Root powder (500mg)",
    benefits:
      "A natural adaptogen that helps the body handle stress while boosting endurance, libido, and mood stability. • Increases strength and stamina • Balances hormones and mood • Supports fertility and reproductive health • Enhances focus and mental clarification • Boosts natural energy. Perfect For: Anyone seeking balanced energy, mood stability, and enhanced performance. Ideal for individuals under stress or fatigue who want to maintain focus, endurance, and hormonal harmony resulting in better physical strength and overall vibrancy.",
    pricing: [
      { size: "150 capsules", price: "GH₵385" },
      { size: "100 capsules", price: "GH₵345" },
      { size: "60 capsules", price: "GH₵295" },
    ],
  },
  {
    id: 8,
    name: "CleanCore Neem Capsules",
    benefit: "Internal Detox & Purification",
    image: "/products/cleancore-neem.jpg",
    ingredients: "Pure Neem leaf extract (500mg)",
    benefits: "Known as nature's purifier, Neem works deeply to cleanse the body, clear the skin, and support overall internal balance. • Detoxifies the liver and purifies the blood • Promotes clear, healthy skin • Fights harmful bacteria and parasites • Reduces internal inflammation • Supports hormonal and digestive balance. Perfect For: Those battling breakouts, dull skin, or recurring internal imbalance. Especially beneficial for individuals exposed to toxins, polluted environments, or unclean diets. Neem's natural antibacterial, antifungal, and antiparasitic compounds help cleanse the blood, fight hidden infections, and support clear, healthy skin from the inside out.",
    pricing: [
      { size: "150 capsules", price: "GH₵320" },
      { size: "100 capsules", price: "GH₵270" },
      { size: "60 capsules", price: "GH₵130" },
    ],
  },
  {
    id: 9,
    name: "CurveSync Fenugreek",
    benefit: "Hormonal & Vitality Balance",
    image: "/products/curvesync-fenugreek.jpg",
    ingredients: "Pure Fenugreek seed extract (500mg)",
    benefits: "Fenugreek naturally supports hormonal health, stamina, and digestion, restoring energy and overall body balance. • Balances hormones and supports metabolism • Promotes digestive comfort and appetite regulation • Supports natural body curves and strength • Enhances stamina and energy levels • Promotes clear skin and internal harmony. Perfect For: Men and women who want to restore hormonal balance, natural energy, and body tone. Especially helpful for those managing fatigue, hormonal breakouts, or low libido, supporting vitality and muscle tone.",
    pricing: [
      { size: "150 capsules", price: "GH₵350" },
      { size: "100 capsules", price: "GH₵250" },
      { size: "60 capsules", price: "GH₵150" },
    ],
  },
  {
    id: 10,
    name: "Turmeric & Black Pepper Capsules",
    benefit: "Anti-Inflammatory Power Duo",
    image: "/new p.jpg",
    ingredients: "Organic Turmeric Root Extract (Curcumin 95%) with BioPerine® Black Pepper Extract (500mg)",
    benefits:
      "A potent blend designed for maximum absorption and deep healing. Turmeric's curcumin compound is enhanced by black pepper, allowing the body to fully absorb its anti-inflammatory and antioxidant benefits. • Eases joint and body pain naturally • Speeds recovery and supports muscle repair • Brightens and evens skin tone • Strengthens immunity and cellular protection • Promotes digestion and liver health. Perfect for individuals dealing with inflammation, body aches, or uneven skin tone. Ideal for active people, wellness enthusiasts, or those who want to reduce internal stress, restore radiance, and support smooth skin and joint recovery through deep cellular healing.",
    pricing: [
      { size: "150 capsules", price: "GH₵360" },
      { size: "100 capsules", price: "GH₵287" },
      { size: "60 capsules", price: "GH₵244" },
    ],
  },
]

export default function ProductsGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedSize, setSelectedSize] = useState<string>("")
  const { addToCart } = useCart()
  const { toast } = useToast()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"])

  const handleAddToCart = (product: Product, size?: string, price?: string) => {
    if (!size || !price) {
      // If no size/price selected, open details dialog
      setSelectedProduct(product)
      setSelectedSize("")
      return
    }

    addToCart({
      id: product.id.toString(),
      name: product.name,
      image: product.image,
      size: size,
      price: price,
    })

    toast({
      title: "Added to cart!",
      description: `${product.name} (${size}) has been added to your cart.`,
    })
  }

  const handleBuyNow = (product: Product, size?: string, price?: string) => {
    // If size and price are provided, go directly to WhatsApp
    if (size && price) {
      const message = `Hello! I'd like to order:\n\n${product.name}\nSize: ${size}\nPrice: ${price}\n\nPlease confirm availability and shipping details. Thank you!`
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, "_blank")
    } else {
      // Otherwise, open details dialog to select size
      setSelectedProduct(product)
      setSelectedSize("")
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <>
      <section ref={ref} className="pt-32 pb-96 md:pb-56 px-4 sm:px-6 lg:px-8 min-h-screen relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.08]"
          style={{ backgroundImage: "url('/p6.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

        {/* Artistic Logo Placements */}
        <motion.div
          initial={{ opacity: 0, rotate: -25 }}
          animate={isInView ? { opacity: 0.025, rotate: -25 } : {}}
          transition={{ duration: 2 }}
          className="absolute top-40 left-10 w-28 h-28 sm:w-40 sm:h-40"
        >
          <Image
            src="/logo 7.png"
            alt=""
            width={160}
            height={160}
            className="w-full h-full object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, rotate: 30 }}
          animate={isInView ? { opacity: 0.03, rotate: 30 } : {}}
          transition={{ duration: 2, delay: 0.3 }}
          className="absolute bottom-40 right-8 w-32 h-32 sm:w-48 sm:h-48"
        >
          <Image
            src="/logo 7.png"
            alt=""
            width={192}
            height={192}
            className="w-full h-full object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, rotate: -10 }}
          animate={isInView ? { opacity: 0.02, rotate: -10 } : {}}
          transition={{ duration: 2, delay: 0.6 }}
          className="absolute top-1/3 right-1/4 w-24 h-24 sm:w-36 sm:h-36 hidden xl:block"
        >
          <Image
            src="/logo 7.png"
            alt=""
            width={144}
            height={144}
            className="w-full h-full object-contain"
          />
        </motion.div>

        <motion.div style={{ y }} className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block mb-6"
            >
              <Leaf className="w-14 h-14 text-primary" />
            </motion.div>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-6 text-balance">
              Our Products
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed mb-4">
              Discover our carefully curated collection of premium herbal supplements, each crafted with precision and
              purity.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-2"
            >
              <p className="text-lg text-primary/80 font-medium">
                Available in 60, 100, and 150 capsule bottles
              </p>
              <p className="text-base text-muted-foreground italic">
                📦 We ship within Ghana and Nigeria
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16 md:mb-8"
          >
            {products.map((product, index) => (
              <motion.div key={product.id} variants={cardVariants}>
                <Card className="group overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-700 h-full flex flex-col bg-card">
                  <div className="relative overflow-hidden aspect-square">
                    <motion.img
                      whileHover={{ scale: 1.12 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, x: 20 }}
                      whileInView={{ opacity: 1, scale: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="absolute top-4 right-4 bg-accent/95 backdrop-blur-sm text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1"
                    >
                      <Sparkles className="w-3 h-3" />
                      Premium
                    </motion.div>
                  </div>

                  <CardContent className="p-8 flex-1 flex flex-col">
                    <h3 className="font-serif text-3xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground mb-6 flex-1 text-lg leading-relaxed">{product.benefit}</p>

                    <div className="space-y-3">
                      <Button
                        variant="outline"
                        onClick={() => {
                          setSelectedProduct(product)
                          setSelectedSize("")
                        }}
                        className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground py-6 text-base font-semibold rounded-full transition-all duration-300 hover:scale-105"
                      >
                        View Details
                      </Button>
                      <Button
                        onClick={() => handleAddToCart(product)}
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <ShoppingCart className="w-5 h-5" />
                        Add to Cart
                      </Button>
                      <Button
                        onClick={() => handleBuyNow(product)}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105"
                      >
                        Buy Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <Dialog open={!!selectedProduct} onOpenChange={() => {
        setSelectedProduct(null)
        setSelectedSize("")
      }}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-serif text-3xl sm:text-4xl text-primary mb-2">
              {selectedProduct?.name}
            </DialogTitle>
            <DialogDescription className="text-base sm:text-lg">{selectedProduct?.benefit}</DialogDescription>
          </DialogHeader>

          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 sm:space-y-8 pb-4"
            >
              <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={selectedProduct.image || "/placeholder.svg"}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {selectedProduct.pricing && (
                <div>
                  <h4 className="font-serif font-semibold text-xl sm:text-2xl mb-3 sm:mb-4 text-primary">Select Size & Price</h4>
                  <Select 
                    value={selectedSize} 
                    onValueChange={setSelectedSize}
                  >
                    <SelectTrigger className="w-full h-14 text-lg border-2 border-primary/30 hover:border-primary">
                      <SelectValue placeholder="Choose your bottle size" />
                    </SelectTrigger>
                    <SelectContent>
                      {selectedProduct.pricing.map((option, index) => (
                        <SelectItem 
                          key={index} 
                          value={`${option.size}-${option.price}`}
                          className="text-lg py-4"
                        >
                          <div className="flex justify-between items-center w-full gap-4">
                            <span>{option.size}</span>
                            <span className="font-bold text-primary">{option.price}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {selectedSize && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-4 bg-accent/10 rounded-lg border-2 border-accent/30"
                    >
                      <p className="text-sm text-muted-foreground mb-1">Selected:</p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-medium">{selectedSize.split('-')[0]}</span>
                        <span className="text-2xl font-bold text-primary">{selectedSize.split('-')[1]}</span>
                      </div>
                    </motion.div>
                  )}
                </div>
              )}

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h4 className="font-serif font-semibold text-xl sm:text-2xl mb-2 sm:mb-3 text-primary">
                    Ingredients
                  </h4>
                  <p className="text-foreground/80 text-base sm:text-lg leading-relaxed">
                    {selectedProduct.ingredients}
                  </p>
                </div>

                <div>
                  <h4 className="font-serif font-semibold text-xl sm:text-2xl mb-3 sm:mb-4 text-primary">Benefits</h4>
                  <div className="space-y-3">
                    {selectedProduct.benefits.split('•').filter(benefit => benefit.trim()).map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3 bg-primary/5 p-3 rounded-lg">
                        <span className="text-primary font-bold text-lg mt-0.5 flex-shrink-0">•</span>
                        <p className="text-foreground/90 text-base sm:text-lg leading-relaxed flex-1">
                          {benefit.trim()}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {selectedSize && (
                  <Button
                    onClick={() => {
                      handleAddToCart(selectedProduct, selectedSize.split('-')[0], selectedSize.split('-')[1])
                      setSelectedProduct(null)
                      setSelectedSize("")
                    }}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-5 sm:py-6 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </Button>
                )}
              <Button
                  onClick={() => {
                    if (selectedSize) {
                      handleBuyNow(selectedProduct, selectedSize.split('-')[0], selectedSize.split('-')[1])
                      setSelectedProduct(null)
                      setSelectedSize("")
                    } else {
                      // Show message to select size first
                      alert("Please select a size first")
                    }
                  }}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-5 sm:py-6 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                  Buy Now via WhatsApp
              </Button>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
