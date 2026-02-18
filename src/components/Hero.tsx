"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const slides = [
  { image: "/images/slide1.png" },
  { image: "/images/slide2.png" },
  { image: "/images/slide3.png" },
    { image: "/images/slide1.png" },
  { image: "/images/slide2.png" },
  { image: "/images/slide3.png" },
    { image: "/images/slide1.png" },
  { image: "/images/slide2.png" },
  { image: "/images/slide3.png" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
const [direction, setDirection] = useState(1);

const nextSlide = () => {
  setIndex((prev) => {
    if (prev === slides.length - 1) {
      setDirection(-1);
      return prev - 1;
    }
    if (prev === 0 && direction === -1) {
      setDirection(1);
      return prev + 1;
    }
    return prev + direction;
  });
};


  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // 🔥 Clean Auto Slide (No re-render bug)
  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
}, [direction]);


  return (
   <section className="relative w-full overflow-hidden mt-0 pt-0">
    <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[75vh] bg-black">



        {/* Slide Track */}
        <motion.div
          className="flex h-full cursor-grab active:cursor-grabbing"
          animate={{ x: `-${index * 100}%` }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={(e, info) => {
            if (info.offset.x < -100) nextSlide();
            if (info.offset.x > 100) prevSlide();
          }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="min-w-full h-full relative">
              <Image
                src={slide.image}
                alt={`Slide ${i}`}
                fill
                priority={i === 0}
                className="object-contain bg-black"
              />
            </div>
          ))}
        </motion.div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition z-10"
        >
          ‹
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition z-10"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 w-full flex justify-center gap-3 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-yellow-400 scale-125"
                  : "bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
