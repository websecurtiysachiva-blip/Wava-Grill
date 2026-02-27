"use client";
import Image from "next/image";

export default function LaunchDay() {
  return (
    <section className="w-full bg-[#6b0f0f] py-20 px-6 md:px-12 lg:px-24">
   <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-3 lg:gap-3">

        {/* LEFT CONTENT CARD */}
        <div className="flex-1 flex justify-center lg:justify-start">
          <div className="bg-[#5a0d0d] p-10 md:p-14 rounded-[40px] max-w-[600px] w-full">

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-500 mb-6">
              Launch Day
            </h2>

            <p className="text-gray-200 text-base md:text-lg leading-relaxed">
              The grand opening of Wava Grill marked a momentous occasion,
              filled with excitement and high standards. Without any soft
              openings, the team welcomed eager customers ready to experience
              a bold new flavor revolution from day one.
            </p>

          </div>
        </div>

        {/* RIGHT IMAGE */}
  <div className="flex justify-center">

  {/* Yellow Frame */}
  <div className="bg-yellow-500 p-1.5 rounded-[30px]">

    {/* Smaller Image Container */}
    <div className="relative 
                    w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px]
                    h-[260px] sm:h-[300px] md:h-[360px] lg:h-[400px]
                    rounded-[24px] overflow-hidden">

      <Image
        src="/images/location.png"
        alt="Launch Day"
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