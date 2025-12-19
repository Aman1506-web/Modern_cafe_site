"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";

export default function HeroCarousel() {
  const router = useRouter();

  return (
    <section
      className="
        grid
        grid-cols-1
        items-center
        gap-1 sm:gap-6 lg:gap-10
        px-4 sm:px-6 lg:px-12
        pt-8 sm:pt-12 lg:pt-0
        lg:grid-cols-2
        min-h-[85vh]
      "
    >
      {/* Text and buttons div */}
      <div
        className="
          flex flex-col
          items-center text-center
          gap-3 sm:gap-4 lg:gap-0
          lg:items-start lg:text-left
          pl-0 lg:pl-12
        "
      >
        <h1 className="display text-4xl sm:text-5xl lg:text-8xl font-bold">
          Everything
          <br />
          is better
          <br />
          with a&nbsp;
          <span className="text-yellow-500 display">Burger</span>
        </h1>

        <p className="display text-gray-500 text-base sm:text-lg lg:text-2xl max-w-xs sm:max-w-md lg:max-w-2xl">
          Burger is the missing piece that makes every day complete, a simple
          yet delicious joy in life
        </p>

        <div className="mt-3 sm:mt-5 flex flex-col items-center sm:flex-row sm:items-start gap-4">
          <Button
            className="relative overflow-hidden rounded-full border border-brown/70 bg-yellow px-5 py-2 text-brown shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg sm:px-6 sm:py-3.5"
            onClick={() => router.push("/menu?category=burger")}
          >
            <span className="display text-lg sm:text-xl font-extrabold uppercase tracking-wide">
              Order Now
            </span>
            <ChevronRight strokeWidth={3} className="ml-1 h-5 w-5 sm:h-6 sm:w-6" />
            <span className="pointer-events-none absolute inset-0 rounded-full border border-brown/70 opacity-80" />
          </Button>

          <Button className="flex items-center gap-1 py-1 sm:py-2 text-lg sm:text-xl text-gray-700 display font-semibold bg-transparent" onClick={() => router.push("/menu")}>
            Learn More
            <ChevronRight />
          </Button>
        </div>
      </div>

      {/* Image div */}
      <div
        className="
          relative
          w-full
          h-[360px]
          sm:h-[480px]
          md:h-[560px]
          lg:h-[720px]
          flex
          items-end
          justify-center
          overflow-visible
          -mt-4 sm:mt-0
        "
      >
        <div className="absolute bottom-4 sm:bottom-8 lg:bottom-10 h-32 w-[240px] sm:h-44 sm:w-[300px] lg:h-60 lg:w-[390px] rounded-full bg-black blur-2xl" />

        <Image
          src="/images/burger.png"
          alt="Burger"
          fill
          className="object-cover object-[50%_85%] lg:object-[10%_100%]"
        />
      </div>
    </section>
  );
}


// object-[10%_100%]
