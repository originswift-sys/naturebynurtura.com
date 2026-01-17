"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { whatsappNumber } from "@/lib/constants"

const featuredProducts = [
  {
    id: 1,
    name: "GreenNova Moringa",
    benefit: "Energy & vitality boost",
    image: "/products/greennova-moringa.jpg",
  },
  {
    id: 2,
    name: "Feminine Reset Capsules",
    benefit: "Women's wellness & balance",
    image: "/products/feminine-reset.jpg",
  },
  {
    id: 3,
    name: "VitalBlack Black Seed",
    benefit: "Immunity & overall wellness",
    image: "/products/vitalblack-blackseed.jpg",
  },
]

export default function FeaturedProducts() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])

  const handleBuyNow = (productName: string) => {
    const message = `Hello! I'm interested in purchasing ${productName}.\n\nPlease provide more information about availability, pricing, and shipping. Thank you!`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section id="products" ref={ref} className="pt-32 pb-40 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      {/* Artistic Logo Placements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 25 }}
        animate={isInView ? { opacity: 0.03, scale: 1, rotate: 25 } : {}}
        transition={{ duration: 2 }}
        className="absolute top-32 right-5 w-28 h-28 sm:w-40 sm:h-40"
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
        initial={{ opacity: 0, scale: 0.8, rotate: -30 }}
        animate={isInView ? { opacity: 0.04, scale: 1, rotate: -30 } : {}}
        transition={{ duration: 2, delay: 0.4 }}
        className="absolute bottom-32 left-5 w-32 h-32 sm:w-44 sm:h-44"
      >
        <Image
          src="/logo 7.png"
          alt=""
          width={176}
          height={176}
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
            <Sparkles className="w-12 h-12 text-accent" />
          </motion.div>
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-6 text-balance">
            Featured Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Discover our carefully curated selection of premium herbal supplements
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8"
        >
          {featuredProducts.map((product, index) => (
            <motion.div key={product.id} variants={cardVariants}>
              <Card className="group overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-700 bg-card">
                <div className="relative overflow-hidden aspect-square">
                  <motion.img
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                  >
                    Premium
                  </motion.div>
                </div>

                <CardContent className="p-8 text-center">
                  <h3 className="font-serif text-3xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{product.benefit}</p>

                  <Button
                    onClick={() => handleBuyNow(product.name)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105"
                  >
                    Buy Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
