"use client";
import Image from "next/image";

export default function CrownJewels() {
  return (
    <section className="w-full bg-[#5a0d0d] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

        {/* LEFT CONTENT */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-500 mb-6">
            Crown Jewels
          </h2>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-[550px] mx-auto lg:mx-0">
            Our signature sauces represent the essence of Wava Grill.
            Carefully crafted secret formulas deliver vibrant textures,
            bold flavors, and unforgettable taste experiences.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">

          <div className="bg-yellow-500 p-1.5 rounded-[30px]">

            <div className="relative 
                            w-[220px] sm:w-[260px] md:w-[320px] 
                            h-[280px] sm:h-[340px] md:h-[400px] 
                            rounded-[24px] overflow-hidden">

              <Image
                src="/images/crown.jpg"
                alt="Crown Jewels"
                fill
                className="object-cover"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}