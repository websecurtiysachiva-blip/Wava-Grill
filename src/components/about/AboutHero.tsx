"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="w-full overflow-x-hidden">

      {/* ================= FULL WIDTH HERO ================= */}
      <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[85vh]">

        {/* Background Image */}
        <Image
          src="/images/about.jpg"
          alt="About Banner"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Brand Maroon Overlay */}
        <div className="absolute inset-0 bg-[#591A13]/65" />

        {/* Center Title */}
        <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-wide">
            About Us
          </h1>
        </div>

      </section>
    </div>
  );
}