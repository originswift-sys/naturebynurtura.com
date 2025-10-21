"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function Philosophy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const textVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section ref={ref} className="py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Artistic Logo Placements */}
      <motion.div
        initial={{ opacity: 0, rotate: -15 }}
        animate={isInView ? { opacity: 0.04, rotate: -15 } : {}}
        transition={{ duration: 1.5 }}
        className="absolute top-10 left-10 w-32 h-32 sm:w-48 sm:h-48"
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
        initial={{ opacity: 0, rotate: 20 }}
        animate={isInView ? { opacity: 0.05, rotate: 20 } : {}}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-20 right-10 w-40 h-40 sm:w-56 sm:h-56"
      >
        <Image
          src="/logo 7.png"
          alt=""
          width={224}
          height={224}
          className="w-full h-full object-contain"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, rotate: -10 }}
        animate={isInView ? { opacity: 0.03, rotate: -10 } : {}}
        transition={{ duration: 1.5, delay: 0.6 }}
        className="absolute top-1/2 right-1/4 w-24 h-24 sm:w-36 sm:h-36 hidden lg:block"
      >
        <Image
          src="/logo 7.png"
          alt=""
          width={144}
          height={144}
          className="w-full h-full object-contain"
        />
      </motion.div>

      <motion.div style={{ y, scale, opacity }} className="container mx-auto max-w-5xl text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-12"
        >
          Our Philosophy
        </motion.h2>

        <motion.div
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          <p className="text-xl sm:text-2xl lg:text-3xl text-foreground/90 leading-relaxed text-balance font-light">
            Rooted in Nature. Crafted with Intention. Guided by Purity.
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground/80 leading-relaxed text-balance max-w-4xl mx-auto">
            At Nature by Nurtura, we believe true wellness begins within, in the balance between body, mind, and spirit.
          </p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed text-balance max-w-3xl mx-auto"
          >
            Every capsule we create is a return to nature's wisdom: potent herbs, clean formulations, and purposeful healing. We exist to reconnect you with your natural rhythm, to restore, renew, and radiate from the inside out.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 space-y-8"
        >
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-primary">Our Promise</h3>
          <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed text-balance max-w-3xl mx-auto">
            We're redefining herbal wellness with purity and intention.
          </p>
          <ul className="text-center max-w-2xl mx-auto space-y-4 text-base sm:text-lg text-foreground/80">
            <li className="flex items-center justify-center gap-3">
              <span className="text-primary">•</span>
              <span>100% natural, ethically sourced ingredients</span>
            </li>
            <li className="flex items-center justify-center gap-3">
              <span className="text-primary">•</span>
              <span>No fillers, synthetics, or artificial additives</span>
            </li>
            <li className="flex items-center justify-center gap-3">
              <span className="text-primary">•</span>
              <span>Crafted in small batches for maximum potency</span>
            </li>
            <li className="flex items-center justify-center gap-3">
              <span className="text-primary">•</span>
              <span>Transparent sourcing and quality testing</span>
            </li>
            <li className="flex items-center justify-center gap-3">
              <span className="text-primary">•</span>
              <span>Designed to restore natural balance and performance</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        />
      </motion.div>
    </section>
  )
}
