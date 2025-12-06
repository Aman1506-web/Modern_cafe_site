"use client";

import { useMemo, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/cart-store";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const OWNER_NUMBER = "918888888888"; // replace with real owner number when ready

export function CartSummary({ className }: { className?: string }) {
  const items = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clearCart);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [mode, setMode] = useState("pickup");

  const { count, total } = useMemo(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    const total = items.reduce((sum, item) => sum + item.quantity * item.price, 0);
    return { count, total };
  }, [items]);

  const handleSend = () => {
    if (!name || !phone || items.length === 0) return;
    const lines = items
      .map((item) => `${item.quantity}x ${item.name} – ₹${item.price * item.quantity}`)
      .join("\n");
    const message = [
      `Hello Bakehouse Café!`,
      `Order mode: ${mode === "pickup" ? "Pickup" : "Dine-in"}`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : null,
      `Items:`,
      lines,
      `Total: ₹${total}`,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${OWNER_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setOpen(false);
  };

  return (
    <>
      <div
        className={cn(
          "flex items-center justify-between rounded-full bg-brown px-4 py-3 text-amber-100 shadow-soft",
          className
        )}
      >
        <div className="flex items-center gap-2 text-sm font-semibold">
          <ShoppingBag className="size-4" />
          <span>
            {count} item{count === 1 ? "" : "s"} • ₹{total}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            className="rounded-full bg-yellow text-brown hover:bg-yellow/90"
            onClick={() => setOpen(true)}
            disabled={items.length === 0}
          >
            Send Order on WhatsApp
          </Button>
          {items.length > 0 ? (
            <button
              className="rounded-full px-3 py-1 text-xs text-amber-100/80 hover:text-white"
              onClick={clearCart}
            >
              Clear
            </button>
          ) : null}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
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
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone number</Label>
              <Input
                id="phone"
                placeholder="98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email (optional)</Label>
              <Input
                id="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
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
