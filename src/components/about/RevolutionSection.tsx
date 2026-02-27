"use client";
import Image from "next/image";

export default function RevolutionSection() {
  return (
    <section className="w-full bg-[#7A1F14] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-2">

        {/* LEFT SIDE */}
        <div className="flex-1 flex justify-center lg:justify-start">
          <div className="bg-[#EAEAEA] rounded-[40px] p-10 md:p-14 max-w-[600px] w-full">

            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
              Wava Grill <br /> Revolution
            </h2>

            <p className="text-lg text-[#7A1F14] mb-6">
              Fast-casual dining redefined with passion
            </p>

            <p className="text-gray-800 text-base md:text-lg leading-relaxed">
              At Wava Grill, we are on a <strong>mission to innovate</strong>{" "}
              fast-casual dining, blending quality ingredients and culinary
              excellence to create an unforgettable dining experience
              for our customers.
            </p>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 flex justify-center">

          <div className="bg-[#FFC700] p-1.5 rounded-[30px]">
            
            <div className="relative 
                            w-[220px] sm:w-[260px] md:w-[320px] 
                            h-[280px] sm:h-[340px] md:h-[400px] 
                            rounded-[24px] overflow-hidden">
              <Image
                src="/images/revolution.jpg"
                alt="Wava Grill Revolution"
                fill
                className="object-cover"
                priority
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}