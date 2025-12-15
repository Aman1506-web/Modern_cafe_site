"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function MyStory() {
  return (
    <section
      className="
      relative 
    px-4 sm:px-6 lg:px-12
    pt-8       /* mobile top gap from hero */
    pb-12
    lg:pt-20     /* desktop spacing */
    lg:pb-20
  "
    >
      {/* subtle separator from hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-brown/10" />

      {/* Text and underline div */}
      <div className="lg:mb-14 mb-11 text-center">
        <h2 className="display text-4xl sm:text-5xl lg:text-6xl font-bold">
          Our <span className="text-yellow-500">Story</span>
        </h2>

        {/* underline */}
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-yellow-400" />
      </div>

      {/* Image and story text and button div */}
      <div
        className="
  grid
  grid-cols-1
  lg:grid-cols-2
  gap-8        /* mobile tighter */
  lg:gap-16    /* desktop same */
  items-center
"
      >
        {/* Image div */}
        <div
          className="
  relative
  w-full
  h-[240px]        /* mobile = horizontal */
  sm:h-[320px]
  lg:h-[420px]     /* desktop unchanged */
  rounded-3xl
  overflow-hidden
"
        >
          <Image
            src="/images/cafe.jpg" // change to your actual image
            alt="Bakehouse Cafe"
            fill
            className="object-cover object-center sm:object-[50%_40%]"
          />
        </div>

        {/* Text and buttons div */}
        <div className="flex flex-col gap-6">
          <p className="text-sm uppercase tracking-widest text-yellow-600 font-semibold">
            Our Journey
          </p>

          <h3 className="display text-4xl font-bold leading-tight">
            A place built on warmth, coffee
            <br />& conversations.
          </h3>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
            What started as a small neighborhood bakehouse is now a place where
            friends meet, stories are shared, and every cup is brewed with care.
            We believe great food tastes even better when enjoyed together.
          </p>
          <div className="mt-4 flex items-center gap-6">
            <Button className="rounded-full lg:text-xl text-lg bg-yellow px-6 py-3 text-brown font-bold hover:shadow-lg cursor-pointer border-2 border-brown/70">
              <Link href={"/reserve"}> Reserve Table</Link>
            </Button>

            <Link
              href="/about"
              className="flex items-center gap-1 text-lg lg:text-xl font-bold text-brown hover:underline underline-offset-4"
            >
              <span className="leading-none">Read More</span>
              <ChevronRight className="h-4 w-4 " />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
