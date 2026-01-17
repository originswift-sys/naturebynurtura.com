"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

export type CartItem = {
  id: string
  name: string
  image: string
  size: string
  price: string
  quantity: number
}

type CartContextType = {
  cart: CartItem[]
  addToCart: (item: Omit<CartItem, "quantity">) => void
  removeFromCart: (id: string, size: string) => void
  updateQuantity: (id: string, size: string, quantity: number) => void
  clearCart: () => void
  cartCount: number
  cartTotal: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("naturebynurtura-cart")
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart))
      } catch (error) {
        console.error("Failed to load cart:", error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("naturebynurtura-cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id && i.size === item.size)
      
      if (existingItem) {
        return prevCart.map((i) =>
          i.id === item.id && i.size === item.size ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      
      return [...prevCart, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (id: string, size: string) => {
    setCart((prevCart) => prevCart.filter((item) => !(item.id === id && item.size === size)))
  }

  const updateQuantity = (id: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id, size)
      return
    }
    
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.size === size ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)
  
  const cartTotal = cart.reduce((total, item) => {
    const priceValue = parseFloat(item.price.replace(/[^0-9.]/g, ""))
    return total + priceValue * item.quantity
  }, 0)

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}


