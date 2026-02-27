"use client";
import Image from "next/image";

export default function JoinFlavorRevolution() {
  return (
    <section className="w-full bg-[#7A1410] py-20 px-6 md:px-16 lg:px-24 overflow-hidden">

      {/* YELLOW SLANTED HEADER */}
      <div className="relative mb-20">
        <div className="relative bg-yellow-500 rounded-[40px] py-10 px-12">

          {/* Right angled shape */}
          <div className="absolute right-[-60px] top-0 h-full w-[120px] bg-yellow-500 transform skew-x-[-20deg] rounded-r-[40px]" />

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-black relative z-10">
            Join the Flavor Revolution!
          </h2>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* LEFT PHONE IMAGE */}
        <div className="flex-1 flex justify-center">
          <div className="relative 
                          w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px]
                          h-[420px] sm:h-[480px] md:h-[540px] lg:h-[600px]
                          rounded-[30px] overflow-hidden">

            <Image
              src="/images/promise.jpg"   // 👈 apni phone image ka naam
              alt="Order App"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* RIGHT CONTACT CARD */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="bg-[#EAEAEA] rounded-[40px] p-12 w-full max-w-[520px]">

            <div className="mb-12">
              <h3 className="text-xl font-bold text-[#5a0d0d] mb-2">
                Email
              </h3>
              <p className="text-gray-700">
                info@wavagrill.com
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-bold text-[#5a0d0d] mb-2">
                Social Media
              </h3>
              <p className="text-gray-700">
                @wavagrill
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#5a0d0d] mb-2">
                Phone
              </h3>
              <p className="text-gray-700">
                +1 (469) 348 - 4409
              </p>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}