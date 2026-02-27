"use client";
import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="w-full bg-[#7A1F14] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

        {/* LEFT WHITE CARD */}
        <div className="flex-1 flex justify-center lg:justify-start">
          <div className="bg-white rounded-[40px] p-10 md:p-14 max-w-[600px] w-full">

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#7A1F14] mb-6 leading-tight">
              The Unyielding <br /> Mission
            </h2>

            <p className="text-lg text-yellow-600 mb-6">
              Pillars of Quality and Craftsmanship
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              At Wava Grill, our mission is rooted in <strong>obsession</strong> for quality,
              ensuring every ingredient is sourced responsibly, every craftsman
              is trained rigorously, and rituals bring our flavors to life.
            </p>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">

          <div className="bg-yellow-500 p-1.5 rounded-[30px]">

            <div className="relative 
                            w-[220px] sm:w-[260px] md:w-[320px] 
                            h-[280px] sm:h-[340px] md:h-[400px] 
                            rounded-[24px] overflow-hidden">

              <Image
                src="/images/missions.jpg"
                alt="Mission"
                fill
                className="object-contain mix-blend-multiply"
                priority
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}