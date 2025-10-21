"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Quote } from "lucide-react"

export default function Testimonial() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <section
      ref={ref}
      className="py-32 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, currentColor 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, currentColor 0%, transparent 50%)`,
          }}
        />
      </div>

      <motion.div style={{ y }} className="container mx-auto max-w-5xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={isInView ? { opacity: 0.2, scale: 1, rotate: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-8"
        >
          <Quote className="w-24 h-24" />
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-3xl sm:text-4xl lg:text-6xl font-light italic text-balance leading-tight"
        >
          "Because nature knows how to restore your balance."
        </motion.blockquote>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 h-px w-32 mx-auto bg-primary-foreground/30"
        />
      </motion.div>
    </section>
  )
}
