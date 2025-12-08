"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { CartDrawer } from "@/components/cart-drawer";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/reserve", label: "Reserve Table" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
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
        <div className="flex items-center gap-2 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="rounded-full bg-white p-2 text-brown shadow-chip"
              >
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 bg-white p-4 shadow-soft">
              <SheetHeader className="sr-only">
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <div className="mb-4">
                <p className="display text-lg font-bold text-brown">Bakehouse Café</p>
                <p className="text-xs text-brown/70">Fresh bakes, coffee & bites</p>
              </div>
              <nav className="flex flex-col gap-2">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "rounded-xl px-3 py-2 text-sm font-semibold text-brown transition hover:bg-amber-50",
                      pathname === link.href ? "bg-amber-100" : ""
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-full bg-brown px-3 py-2 text-sm font-semibold text-amber-100 shadow-chip">
            BHC
          </div>
          <div className="leading-tight">
            <p className="display text-xl font-extrabold uppercase text-brown tracking-tight">
              Bakehouse Café
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 text-sm font-bold uppercase text-brown md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-3 py-2 transition",
                pathname === link.href
                  ? "bg-amber-100 text-brown shadow-chip"
                  : "hover:bg-amber-50 hover:text-brown"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <CartDrawer />
          </div>
          <Button
            size="sm"
            className="relative overflow-hidden rounded-full border border-brown/70 bg-yellow px-4 py-2 text-brown shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg sm:px-5 sm:py-3"
            onClick={() => router.push("/menu")}
          >
            <span className="display text-sm font-extrabold uppercase tracking-wide">
              Order Now
            </span>
            <span className="pointer-events-none absolute inset-0 rounded-full border border-brown/70 opacity-80" />
          </Button>
        </div>
      </div>
    </header>
  );
}
