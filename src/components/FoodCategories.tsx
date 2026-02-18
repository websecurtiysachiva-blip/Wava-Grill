"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const categories = Array.from({ length: 15 }).map((_, i) => ({
  name: "Dosa",
  image: "/images/dosa.png",
}));

export default function FoodCategories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-16 bg-gradient-to-r from-red-50 via-white to-red-50 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 relative">

        {/* Heading + Arrows */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            What's on your mind?
          </h2>

          <div className="flex gap-3">
            <button
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full bg-white shadow hover:bg-red-100 transition"
            >
              ←
            </button>
            <button
              onClick={scrollRight}
              className="w-10 h-10 rounded-full bg-white shadow hover:bg-red-100 transition"
            >
              →
            </button>
          </div>
        </div>

        {/* Scroll Container */}
        <motion.div
          ref={scrollRef}
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
          className="flex gap-10 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
        >
          {categories.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              className="flex-shrink-0 flex flex-col items-center cursor-pointer group"
            >
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 bg-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 group-hover:shadow-2xl">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain p-4"
                />
              </div>

              <p className="mt-4 text-gray-700 font-medium group-hover:text-red-600 transition">
                {item.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
