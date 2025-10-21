"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/logo 7.png"
                alt="Nature by Nurtura"
                width={60}
                height={60}
                className="h-14 w-14 object-contain"
              />
              <h3 className="font-serif text-3xl font-bold text-primary">Nature by Nurtura</h3>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-3">
              Premium herbal wellness for a balanced life.
            </p>
            <p className="text-sm text-primary/70 italic">
              📦 We ship within Ghana and Nigeria
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/products", label: "Products" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-base inline-block hover:translate-x-1 transition-transform"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground text-xl mb-6">Connect With Us</h4>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ duration: 0.3 }}
                href="https://www.instagram.com/naturebynurtura?igsh=OWkwMHNvMXphZWV1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ duration: 0.3 }}
                href="mailto:Naturebynurtura@gmail.com"
                className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8 text-center"
        >
          <p className="text-muted-foreground text-base">
            &copy; {new Date().getFullYear()} Nature by Nurtura. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2">
            Created by{" "}
            <a
              href="https://onchify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
            >
              Onchify
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
