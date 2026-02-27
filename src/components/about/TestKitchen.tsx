"use client";
import Image from "next/image";

export default function TestKitchen() {
  return (
    <section className="w-full bg-[#7A1F14] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

        {/* LEFT CONTENT */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-500 mb-6">
            Test Kitchen
          </h2>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-[550px] mx-auto lg:mx-0">
            For <strong>1000 nights</strong>, Ashraf meticulously honed his recipes,
            blending flavors and techniques. This relentless pursuit of
            perfection transformed his kitchen into an experimental lab.
            Each dish became an embodiment of passion, innovation, and
            a commitment to exceptional culinary experiences that define
            Wava Grill's identity.
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
                src="/images/kichen.png"
                alt="Test Kitchen"
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