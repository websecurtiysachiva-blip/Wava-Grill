"use client";
import Image from "next/image";

export default function BrandStory() {
  return (
    <section className="w-full min-h-screen bg-[#7A1F14] px-4 sm:px-8 lg:px-16 py-8 lg:py-12">
      
      {/* HEADER */}
      <div className="bg-black rounded-[30px] lg:rounded-[40px] px-6 lg:px-12 py-6 flex flex-col sm:flex-row justify-between items-center gap-6">
        
        <h1 className="text-[#FFC700] text-3xl sm:text-4xl lg:text-6xl font-bold tracking-wide text-center sm:text-left">
          WAVA GRILL – Brand Story
        </h1>

        {/* Logo Image */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
          <Image
            src="/images/ooo.png"
            alt="Wava Grill Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-10 lg:mt-16 items-start">

        {/* LEFT BIG IMAGE */}
        <div className="bg-[#FFC700] p-3 lg:p-5 rounded-[20px] lg:rounded-[30px]">
          <div className="relative w-full h-[300px] sm:h-[380px] lg:h-[450px] rounded-[20px] overflow-hidden">
            <Image
              src="/images/story.jpg"
              alt="Brand Main"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6 lg:gap-10">

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[250px] sm:h-[300px] rounded-[20px] lg:rounded-[30px] overflow-hidden">
            <Image
              src="/images/storys.jpg"
              alt="Brand Side"
              fill
              className="object-cover"
            />
          </div>

          {/* PRESENTED CARD */}
          <div className="bg-[#E9E9E9] rounded-[20px] lg:rounded-[25px] p-6 lg:p-10 text-center sm:text-left">
            <p className="text-lg sm:text-xl font-semibold text-black">
              Presented by
            </p>
            <p className="text-xl sm:text-2xl font-bold text-[#7A1F14] mt-2 lg:mt-3">
              IAN BRANDTECH SOLUTIONS
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}