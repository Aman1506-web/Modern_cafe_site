import Image from "next/image";
import Link from "next/link";
import { SectionWrapper } from "./section-wrapper";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

export function ReservePromo() {
  return (
    <SectionWrapper className="mt-6">
      <div className="grid gap-6 overflow-hidden rounded-[28px] bg-brown text-amber-50 shadow-soft md:grid-cols-[1fr_1.1fr]">
        <div className="relative min-h-[240px]">
          <Image
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&q=80&auto=format&fit=crop"
            alt="Restaurant interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brown/70 to-transparent" />
        </div>
        <div className="flex flex-col justify-center gap-4 p-6 sm:p-10">
          <p className="display text-sm uppercase tracking-wide text-yellow">
            Reserve a table
          </p>
          <h2 className="display text-3xl font-extrabold leading-tight">
            Bring friends for coffee dates & cozy dinners.
          </h2>
          <p className="max-w-2xl text-base text-amber-100/80">
            Lock your slot, share your cravings, and we’ll keep your favorite
            bakes warm when you walk in.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/reserve">
              <Button className="rounded-full bg-yellow text-brown shadow-chip hover:bg-yellow/90">
                Reserve Table
              </Button>
            </Link>
            <Badge className="rounded-full bg-amber-100/20 text-amber-50">
              Instant WhatsApp confirmation
            </Badge>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

const featured = [
  {
    title: "Bagel with Seeds",
    color: "bg-yellow",
    img: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Sliced Rustic Bread",
    color: "bg-sky",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Chunky Cookies",
    color: "bg-orange",
    img: "https://images.unsplash.com/photo-1481391032119-d89fee407e44?w=600&q=80&auto=format&fit=crop",
  },
];

export function FeaturedBakes() {
  return (
    <SectionWrapper className="mt-10 space-y-4">
      <div className="flex flex-col gap-2">
        <p className="display text-sm font-semibold text-brown/70">
          Product we bake here daily
        </p>
        <h2 className="display text-3xl font-extrabold text-brown sm:text-4xl">
          Fresh batches, morning to evening.
        </h2>
        <p className="max-w-2xl text-brown/70">
          Choose from sourdough loaves, pretzels, cookies, and special cruffins.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {featured.map((item) => (
          <div
            key={item.title}
            className={cn(
              "relative overflow-hidden rounded-[26px] p-4 shadow-soft",
              item.color
            )}
          >
            <div className="absolute right-3 top-3 rounded-full bg-brown/80 px-3 py-1 text-xs font-bold text-amber-100 shadow-chip">
              Daily
            </div>
            <div className="relative h-48 w-full">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="rounded-[18px] object-cover"
              />
            </div>
            <p className="mt-3 display text-xl font-extrabold text-brown">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export function CravingPills() {
  const pills = [
    { label: "Pizza", href: "/menu?category=pizza" },
    { label: "Pasta", href: "/menu?category=pasta" },
    { label: "Burgers", href: "/menu?category=burgers" },
    { label: "Momos", href: "/menu?category=momos" },
    { label: "Drinks", href: "/menu?category=drinks" },
  ];
  return (
    <SectionWrapper className="mt-6">
      <div className="flex flex-col gap-3 rounded-[24px] bg-white p-5 shadow-soft md:flex-row md:items-center md:justify-between">
        <div>
          <p className="display text-xl font-extrabold text-brown">
            What are you craving today?
          </p>
          <p className="text-brown/70">
            Jump straight to a category and build your order.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {pills.map((pill) => (
            <Link
              key={pill.label}
              href={pill.href}
              className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-brown shadow-chip hover:bg-yellow"
            >
              {pill.label}
            </Link>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export function StaffSection() {
  return (
    <SectionWrapper className="mt-10">
      <div className="grid gap-6 rounded-[28px] bg-brown text-amber-50 shadow-soft md:grid-cols-[1fr_0.9fr]">
        <div className="relative min-h-[260px]">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80&auto=format&fit=crop"
            alt="Chef at work"
            fill
            className="object-cover"
          />
          <div className="absolute left-4 top-4 rounded-full bg-yellow px-3 py-1 text-xs font-bold text-brown shadow-chip">
            COMBO
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4 p-6 sm:p-10">
          <h3 className="display text-3xl font-extrabold leading-tight">
            Chefs who love the craft.
          </h3>
          <p className="text-amber-100/80">
            Our team of bakers and baristas fold, whisk, and brew with real
            butter, organic flour, and single-origin beans.
          </p>
          <p className="rounded-2xl bg-white/10 p-4 text-sm italic text-amber-100">
            “Baking is a craft in itself, and we love these delicate flavors.”
            — Ashton Cooper, Head Baker
          </p>
          <Button className="w-fit rounded-full bg-yellow text-brown shadow-chip hover:bg-yellow/90">
            Meet the team
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}

export function WhyChooseUs() {
  const cards = [
    {
      title: "Fresh ingredients",
      desc: "Organic flour, cultured butter, house-roasted beans daily.",
    },
    {
      title: "Cozy ambience",
      desc: "Warm lighting, soft jazz playlists, and cushiony booths.",
    },
    {
      title: "Quick service",
      desc: "Order at table, pickup counter, or WhatsApp without queues.",
    },
  ];
  return (
    <SectionWrapper className="mt-10">
      <div className="rounded-[30px] bg-brown p-6 text-amber-50 shadow-soft sm:p-10">
        <h3 className="display text-3xl font-extrabold">
          Why our café is so special to customers?
        </h3>
        <p className="mt-2 max-w-3xl text-amber-100/80">
          Crafted spaces, playful colors, and a menu that hugs you back. We keep
          every batch small so it stays warm when you arrive.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl bg-white/10 p-4 shadow-soft backdrop-blur"
            >
              <p className="display text-xl font-extrabold text-yellow">
                {card.title}
              </p>
              <p className="text-sm text-amber-100/80">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export function ReviewsSection() {
  return (
    <SectionWrapper className="mt-10">
      <div className="rounded-[26px] bg-sky p-6 shadow-soft">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="display text-2xl font-extrabold text-brown">
              “With enough butter, anything is good!”
            </p>
            <p className="text-brown/70">
              Our guests say the same after the first bite of our chunky
              cookies.
            </p>
          </div>
          <div className="rounded-full bg-white px-4 py-2 text-brown shadow-chip">
            <span className="display text-xl font-extrabold">4.7</span>
            <span className="ml-2 text-sm text-brown/70">Based on 350+ reviews</span>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Plain Cake", "Croissant", "Cookies", "Pretzel", "Apple Pie"].map(
            (pill) => (
              <span
                key={pill}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brown shadow-chip"
              >
                {pill}
              </span>
            )
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}

export function VisitSection() {
  return (
    <SectionWrapper className="mt-10 mb-16">
      <div className="grid gap-6 rounded-[26px] bg-white p-6 shadow-soft md:grid-cols-[1fr_0.9fr]">
        <div className="space-y-3">
          <p className="display text-2xl font-extrabold text-brown">Visit us</p>
          <p className="text-brown/80">
            Bakehouse Café, 21st Street, Jubilee Hills, Hyderabad
          </p>
          <p className="text-brown/70">Open daily: 8:00 AM – 11:00 PM</p>
          <p className="text-brown/70">Phone: +91 88888 88888</p>
          <div className="flex gap-2">
            {["Instagram", "Facebook", "YouTube"].map((social) => (
              <span
                key={social}
                className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-brown shadow-chip"
              >
                {social}
              </span>
            ))}
          </div>
        </div>
        <div className="h-52 rounded-2xl bg-amber-100/70 p-3 shadow-inner">
          <div className="flex h-full w-full items-center justify-center rounded-xl border-2 border-dashed border-brown/20 text-brown/60">
            Map placeholder
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
