"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { CartDrawer } from "@/components/cart-drawer"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-muted/98 backdrop-blur-md shadow-lg" : "bg-primary/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          <Link href="/" className="flex items-center gap-4 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="rounded-2xl p-2">
                <Image
                  src="/logo 7.png"
                  alt="Nature by Nurtura"
                  width={80}
                  height={80}
                  className={`h-20 w-20 object-contain transition-all duration-500 ${
                    isScrolled ? "" : "brightness-0 invert"
                  }`}
                  priority
                />
              </div>
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`font-serif text-base sm:text-xl md:text-2xl font-semibold tracking-wider transition-colors duration-300 ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              Nature by Nurtura
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Link
                  href={link.href}
                  className={`relative text-base font-medium transition-colors duration-300 group ${
                    isScrolled ? "text-primary hover:text-accent" : "text-white hover:text-accent"
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
            <div className={isScrolled ? "text-primary" : "text-white"}>
              <CartDrawer />
            </div>
          </div>

          {/* Mobile Menu & Cart */}
          <div className="flex md:hidden items-center gap-2">
            <div className={isScrolled ? "text-primary" : "text-white"}>
              <CartDrawer />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className={`${
                isScrolled 
                  ? "text-primary hover:text-accent hover:bg-primary/10" 
                  : "text-white hover:text-accent hover:bg-white/10"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className={`py-6 border-t ${
                isScrolled ? "border-border/50" : "border-white/20"
              }`}>
                <div className="flex flex-col space-y-6">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <Link
                        href={link.href}
                        className={`font-medium text-lg transition-colors duration-200 ${
                          isScrolled 
                            ? "text-foreground hover:text-primary" 
                            : "text-white hover:text-accent"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
