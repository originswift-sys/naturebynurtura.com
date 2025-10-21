"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Hero() {
  const ref = useRef(null)
  const router = useRouter()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const africanHerbImages = [
    "/p1.jpg",
    "/p2.jpg",
    "/p3.jpg",
    "/p4.jpg",
    "/p5.jpg",
    "/p6.jpg",
    "/p7.jpg",
    "/p8.jpg",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % africanHerbImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [africanHerbImages.length])

  const navigateToProducts = () => {
    router.push("/products")
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url('${africanHerbImages[currentImageIndex]}')`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/75" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-[1]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)`,
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
      >
        <motion.h1
          variants={itemVariants}
          className="font-serif text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 text-balance tracking-tight"
        >
          Potent. Precise. Pure.
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-2xl sm:text-3xl lg:text-4xl text-white/95 font-light text-balance tracking-wide">
            Wellness is earned, not marketed.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Button
            size="lg"
            onClick={navigateToProducts}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-12 py-7 text-lg rounded-full shadow-2xl hover:shadow-secondary/50 transition-all duration-500 hover:scale-105"
          >
            Explore Products
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-7 h-12 border-2 border-white/60 rounded-full flex items-start justify-center p-2 backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="w-2 h-2 bg-white/80 rounded-full shadow-lg"
          />
        </div>
      </motion.div>
    </section>
  )
}
