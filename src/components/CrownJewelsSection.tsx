"use client";

import Image from "next/image";

export default function CrownJewelsSection() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto">

        <div className="rounded-[40px] px-8 lg:px-16 py-16 bg-[#591A13] shadow-2xl">

          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* LEFT CONTENT */}
            <div className="flex-1 text-white">

              <h2 className="text-4xl lg:text-5xl font-extrabold text-[#FFC700] mb-6">
                Crown Jewels
              </h2>

              <p className="text-lg leading-relaxed max-w-xl text-white/90">
                Crafted with passion and perfected with precision.
                Our signature sauces are the secret behind every bold flavor,
                delivering richness and unforgettable taste in every bite.
              </p>

              <div className="mt-8 h-[3px] w-24 bg-[#FFC700]" />
            </div>

            {/* RIGHT IMAGE */}
          <div className="flex-1 flex justify-center lg:justify-end">

  {/* OUTER MAROON FRAME */}
  <div className="bg-[#591A13] p-2 rounded-[28px]">

    {/* YELLOW FRAME */}
    <div className="bg-[#FFC700] p-2 rounded-[22px]">

      {/* IMAGE WRAPPER */}
      <div className="bg-white rounded-[16px] overflow-hidden">

        <Image
          src="/images/crown.jpg"
          alt="Crown Jewel Sauces"
          width={1200}
          height={1200}
          className="w-[550px] lg:w-[650px] h-auto"
          priority
        />

      </div>

    </div>
  </div>

</div>

          </div>

        </div>

      </div>
    </section>
  );
}