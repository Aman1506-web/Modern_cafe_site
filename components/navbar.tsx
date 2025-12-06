"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/cart-store";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/reserve", label: "Reserve Table" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const items = useCartStore((s) => s.items);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all",
        scrolled ? "backdrop-blur bg-cream/80 shadow-soft" : "bg-cream"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-full bg-brown px-3 py-2 text-sm font-semibold text-amber-100 shadow-chip">
            BHC
          </div>
          <div className="leading-tight">
            <p className="display text-lg font-bold text-brown">
              Bakehouse Café
            </p>
            <p className="text-xs text-brown/70">Fresh bakes, coffee & bites</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 rounded-full bg-white px-4 py-2 text-sm font-medium text-brown shadow-chip md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-3 py-2 transition-colors",
                pathname === link.href ? "bg-amber-100 text-brown" : "hover:bg-amber-50"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            className="relative rounded-full border border-brown/10 bg-white p-2 text-brown shadow-chip"
            onClick={() => router.push("/menu")}
            aria-label="Cart"
          >
            <ShoppingBag className="size-5" />
            {items.length > 0 ? (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange px-1 text-[11px] font-bold text-brown shadow-chip">
                {items.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            ) : null}
          </button>
          <Button
            size="sm"
            className="rounded-full bg-orange text-brown hover:bg-orange/90"
            onClick={() => router.push("/menu")}
          >
            Order Now
          </Button>
        </div>
      </div>
    </header>
  );
}
