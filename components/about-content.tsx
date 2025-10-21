"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Heart, Award, Leaf } from "lucide-react"

export default function AboutContent() {
  const ref = useRef(null)
  const imageRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

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
    hidden: { opacity: 0, y: 30 },
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
        initial={{ opacity: 0, rotate: 15 }}
        animate={isInView ? { opacity: 0.035, rotate: 15 } : {}}
        transition={{ duration: 1.8 }}
        className="absolute top-20 right-10 w-36 h-36 sm:w-52 sm:h-52"
      >
        <Image
          src="/logo 7.png"
          alt=""
          width={208}
          height={208}
          className="w-full h-full object-contain"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, rotate: -20 }}
        animate={isInView ? { opacity: 0.04, rotate: -20 } : {}}
        transition={{ duration: 1.8, delay: 0.5 }}
        className="absolute bottom-24 left-8 w-32 h-32 sm:w-48 sm:h-48"
      >
        <Image
          src="/logo 7.png"
          alt=""
          width={192}
          height={192}
          className="w-full h-full object-contain"
        />
      </motion.div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -60, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div style={{ y: imageY }} className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/p3.jpg"
                alt="Premium herbal botanicals"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-8 rounded-2xl shadow-2xl backdrop-blur-sm"
            >
              <Award className="w-16 h-16" />
            </motion.div>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.div variants={itemVariants}>
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block mb-6"
              >
                <Heart className="w-12 h-12 text-primary" />
              </motion.div>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-8 text-balance">
                Our Story
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p className="text-xl">
                Nature by Nurtura was born from a simple belief: that true wellness comes from nature's wisdom, not
                synthetic shortcuts. We are dedicated to preserving ancient herbal knowledge while meeting modern
                standards of purity and precision.
              </p>

              <p>
                Every capsule we create is a testament to our commitment to quality. We source only the finest herbs,
                carefully selected for their potency and purity. Our rigorous testing ensures that what you receive is
                nothing less than nature's best.
              </p>

              <p>
                We believe wellness is earned through consistent, mindful choices. Our mission is to provide you with
                herbal supplements that honor both tradition and science, helping you achieve balance and vitality
                naturally.
              </p>

              <motion.p
                variants={itemVariants}
                className="font-serif font-semibold text-2xl text-primary pt-4 flex items-center gap-3"
              >
                <Leaf className="w-8 h-8" />
                Potent. Precise. Pure. This is our promise to you.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
