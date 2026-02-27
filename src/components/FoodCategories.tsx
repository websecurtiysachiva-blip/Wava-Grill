"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function FoodCategories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const card = container.querySelector(".card") as HTMLElement;
    if (!card) return;

    const cardWidth = card.offsetWidth + 32; // gap included

    container.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  const products = [
    {
      title: "Shrimp Plate",
      desc: "Fully peeled shrimp with signature sauce.",
      img: "/images/shrimp.png",
    },
      {
      title: "Chicken Bowl",
      desc: "Grilled chicken caramelized with sauce.",
      img: "/images/bowl1.png",
    },
    {
      title: "Taco Trio",
      desc: "Grilled chicken, steak or shrimp tacos.",
      img: "/images/taco.png",
    },
    {
      title: "Family Meal",
      desc: "Perfect for sharing with fresh ingredients.",
      img: "/images/family.png",
    },
    {
      title: "Chicken Bowl",
      desc: "Grilled chicken caramelized with sauce.",
      img: "/images/bowl1.png",
    },
      {
      title: "Shrimp Plate",
      desc: "Fully peeled shrimp with signature sauce.",
      img: "/images/shrimp.png",
    },
  ];

  return (
    <section className="bg-[#f5f1e8] py-16">
      <div className="max-w-6xl mx-auto px-12 relative">

        {/* LEFT ARROW */}
        <button
          onClick={() => scroll("left")}
          className="absolute -left-6 top-1/2 -translate-y-1/2 bg-[#3b2f2f] text-yellow-400 p-3 rounded-full shadow-md hover:scale-110 transition z-10"
        >
          <ArrowLeft size={18} />
        </button>

        {/* SLIDER */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-hidden scroll-smooth"
        >
          {products.map((item, index) => (
            <div
              key={index}
              className="card min-w-[30%] flex-shrink-0 text-center space-y-4"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={160}
                height={160}
                className="mx-auto"
              />

              <h3 className="text-xl font-semibold text-[#2a1f1f]">
                {item.title}
              </h3>

              <p className="text-[#5c4033] text-sm px-4">
                {item.desc}
              </p>

              <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-[#3b2f2f] hover:text-yellow-400 transition text-sm">
                ORDER NOW
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={() => scroll("right")}
          className="absolute -right-6 top-1/2 -translate-y-1/2 bg-[#3b2f2f] text-yellow-400 p-3 rounded-full shadow-md hover:scale-110 transition z-10"
        >
          <ArrowRight size={18} />
        </button>

      </div>
    </section>
  );
}