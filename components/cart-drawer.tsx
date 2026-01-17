"use client"

import { useCart } from "@/contexts/cart-context"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ShoppingCart, Plus, Minus, Trash2, Send } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { whatsappNumber } from "@/lib/constants"

export function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, clearCart, cartCount, cartTotal } = useCart()
  const [open, setOpen] = useState(false)

  const handleCheckout = () => {
    if (cart.length === 0) return

    // Format cart items for WhatsApp message
    let message = "Hello! I'd like to order the following items:\n\n"
    
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`
      message += `   Size: ${item.size}\n`
      message += `   Price: ${item.price}\n`
      message += `   Quantity: ${item.quantity}\n\n`
    })
    
    message += `Total: GH₵${cartTotal.toFixed(2)}\n\n`
    message += "Please confirm availability and shipping details. Thank you!"

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="font-serif text-2xl text-primary">Shopping Cart</SheetTitle>
        </SheetHeader>
        
        <div className="mt-8 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground text-lg">Your cart is empty</p>
              <p className="text-sm text-muted-foreground mt-2">Add some products to get started!</p>
            </div>
          ) : (
            <>
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="flex gap-4 p-4 border border-border rounded-lg bg-card"
                >
                  <div className="relative h-20 w-20 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <h4 className="font-semibold text-sm">{item.name}</h4>
                    <p className="text-xs text-muted-foreground">{item.size}</p>
                    <p className="text-sm font-bold text-primary">{item.price}</p>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 border border-border rounded-full">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 rounded-full"
                          onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 rounded-full"
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 text-destructive hover:text-destructive hover:bg-destructive/10"
                        onClick={() => removeFromCart(item.id, item.size)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="pt-4 space-y-4">
                <div className="flex justify-between items-center text-lg font-bold border-t border-border pt-4">
                  <span>Total:</span>
                  <span className="text-primary">GH₵{cartTotal.toFixed(2)}</span>
                </div>
                
                <Button
                  onClick={handleCheckout}
                  className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white py-6 text-base font-semibold rounded-full shadow-lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Checkout via WhatsApp
                </Button>
                
                <Button
                  onClick={clearCart}
                  variant="outline"
                  className="w-full"
                >
                  Clear Cart
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}


