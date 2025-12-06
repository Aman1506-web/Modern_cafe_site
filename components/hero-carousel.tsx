"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { gsap } from "@/lib/gsap";
import Link from "next/link";

const slides = [
  {
    id: "pizza",
    title: "Bake the Cookies",
    subtitle: "Warm slices, gooey chips, and a sweet crunch in every bite.",
    tags: ["Fresh", "Crunchy", "Tasty"],
    cta: "/menu?category=pizza",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "coffee",
    title: "Brew the Coffee",
    subtitle: "House-roasted beans poured into velvety, creamy cups.",
    tags: ["Slow Brew", "Silky", "Bold"],
    cta: "/menu?category=coffee",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "burgers",
    title: "Stack the Burgers",
    subtitle: "Char-grilled patties, pillowy buns, and tangy sauces.",
    tags: ["Juicy", "Cheesy", "Stacked"],
    cta: "/menu?category=burgers",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "snacks",
    title: "Snack on Fresh Bakes",
    subtitle: "Pretzels, bagels, and croissants baked on repeat daily.",
    tags: ["Bagels", "Pretzel", "Warm"],
    cta: "/menu?category=snacks",
    image:
      "https://images.unsplash.com/photo-1528733918450-4b1f064b97a1?w=900&q=80&auto=format&fit=crop",
  },
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const slideRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-heading",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, ease: "power3.out", duration: 0.8, delay: 0.1 }
      );
      gsap.fromTo(
        ".hero-sub",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, ease: "power3.out", duration: 0.8, delay: 0.25 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!slideRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        slideRef.current,
        { opacity: 0, scale: 0.97 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
      );
    }, slideRef);
    return () => ctx.revert();
  }, [index]);

  const current = useMemo(() => slides[index], [index]);

  return (
    <section
      ref={containerRef}
      className="mx-auto flex max-w-6xl flex-col gap-6 px-4 pb-10 pt-4 sm:px-6"
    >
      <div className="display text-sm font-semibold text-brown/70">
        Freshly baked • Colorful bites • Cozy sips
      </div>
      <div className="rounded-[32px] bg-white p-6 shadow-soft lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col justify-center gap-6">
            <div className="flex flex-wrap gap-2">
              {current.tags.map((tag) => (
                <Badge
                  key={tag}
                  className="rounded-full bg-yellow px-3 py-1 text-xs font-semibold text-brown shadow-chip"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="hero-heading display text-4xl font-extrabold leading-[1.05] text-brown sm:text-5xl lg:text-6xl">
              {current.title}
            </h1>
            <p className="hero-sub max-w-xl text-lg text-brown/80">
              {current.subtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/menu">
                <Button className="rounded-full bg-orange text-brown shadow-chip hover:bg-orange/90">
                  Order Now
                </Button>
              </Link>
              <Link href={current.cta}>
                <Button
                  variant="outline"
                  className="rounded-full border border-brown/20 bg-cream text-brown hover:bg-amber-50"
                >
                  View Menu
                </Button>
              </Link>
            </div>
          </div>

          <div
            ref={slideRef}
            className="relative h-[320px] overflow-hidden rounded-[28px] bg-cream p-4 shadow-soft sm:h-[380px]"
          >
            <div className="absolute right-4 top-4 rounded-full bg-brown px-3 py-1 text-xs font-semibold text-amber-100 shadow-chip">
              {current.id.toUpperCase()}
            </div>
            <Image
              src={current.image}
              alt={current.title}
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-white/30" />
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              className={cn(
                "h-3 rounded-full bg-brown/20 transition-all",
                i === index ? "w-10 bg-brown" : "w-3 hover:bg-brown/50"
              )}
              onClick={() => setIndex(i)}
              aria-label={`Go to ${slide.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
