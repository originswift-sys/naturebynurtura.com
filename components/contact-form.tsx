"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Instagram, Mail } from "lucide-react"

export default function ContactForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section ref={ref} className="py-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      {/* Artistic Logo Placements */}
      <motion.div
        initial={{ opacity: 0, rotate: 18 }}
        animate={isInView ? { opacity: 0.035, rotate: 18 } : {}}
        transition={{ duration: 1.8 }}
        className="absolute top-24 left-12 w-32 h-32 sm:w-48 sm:h-48"
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
        initial={{ opacity: 0, rotate: -22 }}
        animate={isInView ? { opacity: 0.04, rotate: -22 } : {}}
        transition={{ duration: 1.8, delay: 0.4 }}
        className="absolute bottom-28 right-10 w-36 h-36 sm:w-52 sm:h-52"
      >
        <Image
          src="/logo 7.png"
          alt=""
          width={208}
          height={208}
          className="w-full h-full object-contain"
        />
      </motion.div>

      <motion.div style={{ y }} className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-6 text-balance">
            Get In Touch
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Connect with us through your preferred channel. We're here to answer your questions and guide you on your
            wellness journey.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            href="https://www.instagram.com/naturebynurtura?igsh=OWkwMHNvMXphZWV1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-10 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 group"
          >
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
              <Instagram className="w-12 h-12 text-primary" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Instagram</h3>
            <p className="text-muted-foreground text-center text-lg">Follow our wellness journey and updates</p>
          </motion.a>

          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            href="mailto:Naturebynurtura@gmail.com"
            className="flex flex-col items-center p-10 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 group"
          >
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
              <Mail className="w-12 h-12 text-primary" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Email</h3>
            <p className="text-muted-foreground text-center text-lg break-all px-2">Naturebynurtura@gmail.com</p>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
