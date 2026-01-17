"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
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

  const heroTexts = [
    { main: "Potent. Precise. Pure.", sub: "Wellness is earned, not marketed." },
    { main: "Nature's Wisdom.", sub: "Ancient herbs, modern purity." },
    { main: "Rooted in Nature.", sub: "Crafted with intention." },
    { main: "Balance. Restore. Thrive.", sub: "Your natural wellness journey." },
    { main: "Pure Herbal Power.", sub: "No fillers. No compromises." },
    { main: "Traditional. Tested. True.", sub: "Quality you can trust." },
    { main: "Healing from Within.", sub: "Nature's finest formulations." },
    { main: "Wellness Redefined.", sub: "Potency meets purity." },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % africanHerbImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [africanHerbImages.length])

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
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 text-balance tracking-tight">
              {heroTexts[currentImageIndex].main}
            </h1>

            <div className="mb-12">
              <p className="text-2xl sm:text-3xl lg:text-4xl text-white/95 font-light text-balance tracking-wide">
                {heroTexts[currentImageIndex].sub}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

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
