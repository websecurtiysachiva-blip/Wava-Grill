"use client";
import Image from "next/image";

export default function FutureVision() {
  return (
    <section className="w-full bg-[#5a0d0d] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-10">

        {/* LEFT CONTENT */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-500 mb-6">
            Future Vision
          </h2>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-[550px] mx-auto lg:mx-0">
            Wava Grill is committed to legacy, building through sustainable
            growth and training the next generation of flavor innovators,
            ensuring our values and quality continue to thrive.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">

          <div className="bg-yellow-500 p-1.5 rounded-[30px]">

            <div className="relative
                            w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px]
                            h-[260px] sm:h-[300px] md:h-[360px] lg:h-[400px]
                            rounded-[24px] overflow-hidden">

              <Image
                src="/images/visions.jpg"
                alt="Future Vision"
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