"use client";
import Image from "next/image";

export default function CulturalFusion() {
  return (
    <section className="w-full bg-[#7A1F14] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-10">

        {/* LEFT CONTENT */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-500 mb-6">
            Cultural Fusion
          </h2>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-[550px] mx-auto lg:mx-0">
            WAVA Grill embodies a unique <strong>flavor triangle</strong>
            that marries the vibrant energy of NYC hustle, the warmth
            of Texas heart, and the boldness of Indian spices.
            This fusion not only defines our dishes but also shapes
            our culinary identity and community connection.
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
                src="/images/cultural.jpg"
                alt="Cultural Fusion"
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