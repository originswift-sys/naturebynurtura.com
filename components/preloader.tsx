'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Hide preloader after page is loaded
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false)
      }, 500) // Small delay for smooth transition
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#f5f1e7]"
        >
          {/* Logo or Brand Name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#031c13]">
              Nature by Nurtura
            </h1>
          </motion.div>

          {/* Animated Leaves */}
          <div className="relative w-24 h-24">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ rotate: index * 120 }}
                animate={{
                  rotate: [index * 120, index * 120 + 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.2,
                }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#031c13]"
                  >
                    <path
                      d="M20 5C20 5 10 10 10 20C10 25 15 30 20 35C25 30 30 25 30 20C30 10 20 5 20 5Z"
                      fill="currentColor"
                      opacity="0.8"
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Loading Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mt-8 text-xs tracking-wider uppercase text-[#031c13]/70 font-sans"
          >
            Loading Wellness...
          </motion.p>

          {/* Progress Bar */}
          <motion.div
            className="w-48 h-1 bg-[#d4cfc4] rounded-full overflow-hidden mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-[#031c13] via-[#bfa760] to-[#031c13]"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

