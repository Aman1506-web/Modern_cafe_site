"use client";

import { useEffect, useMemo, useState } from "react";
import { ShoppingBag, X, Minus, Plus, MessageCircle } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/cart-store";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const OWNER_NUMBER = "919654248879"; // replace with real WhatsApp number

type CartDrawerProps = {
  triggerContent?: React.ReactNode;
  triggerClassName?: string;
};

export function CartDrawer({ triggerContent, triggerClassName }: CartDrawerProps) {
  const items = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clearCart);
  const increaseQty = useCartStore((s) => s.increaseQty);
  const decreaseQty = useCartStore((s) => s.decreaseQty);
  const removeItem = useCartStore((s) => s.removeItem);
  const hydrate = useCartStore.persist?.rehydrate;
  const [open, setOpen] = useState(false);
  const [whOpen, setWhOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [mode, setMode] = useState("pickup");
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string }>({});

  const { count, total } = useMemo(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    const total = items.reduce((sum, item) => sum + item.quantity * item.price, 0);
    return { count, total };
  }, [items]);

  const handleSend = () => {
    const nextErrors: typeof errors = {};
    if (!name.trim()) nextErrors.name = "Name is required";
    if (!phone.trim()) {
      nextErrors.phone = "Phone is required";
    } else if (!/^[0-9+\-\s]{8,15}$/.test(phone.trim())) {
      nextErrors.phone = "Enter a valid phone number";
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = "Enter a valid email";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0 || items.length === 0) return;
    const lines = items
      .map((item) => `${item.quantity}x ${item.name} – ₹${item.price * item.quantity}`)
      .join("\n");
    const message = [
      "Hello Bakehouse Café!",
      `Order mode: ${mode === "pickup" ? "Pickup" : "Dine-in"}`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : null,
      "",
      "Items:",
      lines,
      `Total: ₹${total}`,
    ]
      .filter(Boolean)
      .join("\n");
    const url = `https://wa.me/${OWNER_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setWhOpen(false);
    clearCart();
  };

  // ensure persisted store is hydrated when component mounts (for SSR)
  useEffect(() => {
    hydrate?.();
  }, [hydrate]);

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            className={cn(
              "flex items-center gap-2 rounded-full border border-brown/15 bg-white px-4 py-2 text-sm font-semibold text-brown shadow-chip transition hover:-translate-y-0.5 hover:shadow-soft",
              triggerClassName
            )}
            aria-label="Open cart"
          >
            {triggerContent ? (
              triggerContent
            ) : (
              <>
                <ShoppingBag className="size-4" />
                {count > 0 ? `${count} items • ₹${total}` : "Cart"}
              </>
            )}
          </button>
        </SheetTrigger>
        <SheetContent className="w-full max-w-md bg-white p-0 shadow-soft">
          <SheetHeader className="border-b border-amber-100 px-5 py-4">
            <SheetTitle className="display text-xl text-brown">My Cart</SheetTitle>
          </SheetHeader>

          {items.length === 0 ? (
            <div className="p-5 text-sm text-brown/70">Your cart is empty.</div>
          ) : (
            <div className="flex h-full flex-col justify-between gap-4 p-5">
              <div className="space-y-3 overflow-auto">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-xl bg-amber-50 p-3 shadow-soft"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="font-semibold text-brown">{item.name}</p>
                        <p className="text-xs text-brown/60">
                          ₹{item.price} • {item.category}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 rounded-full bg-white px-2 py-1 shadow-chip">
                          <button
                            className="grid h-7 w-7 place-items-center rounded-full bg-brown text-amber-100"
                            onClick={() => decreaseQty(item.id)}
                            aria-label="Decrease quantity"
                          >
                            <Minus className="size-3" />
                          </button>
                          <span className="min-w-[20px] text-center text-sm font-semibold text-brown">
                            {item.quantity}
                          </span>
                          <button
                            className="grid h-7 w-7 place-items-center rounded-full bg-brown text-amber-100"
                            onClick={() => increaseQty(item.id)}
                            aria-label="Increase quantity"
                          >
                            <Plus className="size-3" />
                          </button>
                        </div>
                        <button
                          className="text-brown/50 hover:text-brown"
                          aria-label="Remove item"
                          onClick={() => removeItem(item.id)}
                        >
                          <X className="size-4" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-2 text-sm font-semibold text-brown">
                      ₹{item.price * item.quantity}
                    </div>
                  </div>
                ))}
                <div className="flex items-center justify-between rounded-xl bg-amber-100 px-3 py-2 font-semibold text-brown">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  className="w-full rounded-full bg-yellow px-4 py-3 text-center font-semibold text-brown shadow-chip hover:bg-yellow/90"
                  onClick={() => setWhOpen(true)}
                >
                  <span className="inline-flex items-center gap-2">
                    <MessageCircle className="size-4" /> Send Order on WhatsApp
                  </span>
                </button>
                <button
                  className="w-full text-sm text-brown/60 hover:text-brown"
                  onClick={clearCart}
                >
                  Clear cart
                </button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>

      <Dialog open={whOpen} onOpenChange={setWhOpen}>
        <DialogContent className="rounded-3xl border-none bg-white p-6 shadow-soft">
          <DialogHeader>
            <DialogTitle className="display text-2xl text-brown">
              Send order on WhatsApp
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full name</Label>
              <Input
                id="name"
                placeholder="Jane Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name ? (
                <p className="text-xs font-medium text-red-600">{errors.name}</p>
              ) : null}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone number</Label>
              <Input
                id="phone"
                placeholder="98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone ? (
                <p className="text-xs font-medium text-red-600">{errors.phone}</p>
              ) : null}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email (optional)</Label>
              <Input
                id="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email ? (
                <p className="text-xs font-medium text-red-600">{errors.email}</p>
              ) : null}
            </div>
            <div className="space-y-2">
              <Label>Mode</Label>
              <div className="flex gap-2">
                {["pickup", "dine-in"].map((opt) => (
                  <button
                    key={opt}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-semibold shadow-chip",
                      mode === opt
                        ? "bg-brown text-amber-100"
                        : "bg-amber-50 text-brown hover:bg-amber-100"
                    )}
                    onClick={() => setMode(opt)}
                  >
                    {opt === "pickup" ? "Pickup" : "Dine-in"}
                  </button>
                ))}
              </div>
            </div>
            <Button
              className="w-full rounded-full bg-orange text-brown shadow-chip hover:bg-orange/90"
              onClick={handleSend}
              disabled={!name || !phone || items.length === 0}
            >
              Open WhatsApp
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
