"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HomeBottomBanner() {
  return (
    <section className="relative w-full overflow-hidden">

      {/* Background Image */}
      <div className="relative w-full h-[400px] md:h-[550px]">
        <Image
          src="/images/catering3.jpg"
          alt="Catering"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Premium Dark Gradient Overlay (NO YELLOW) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl text-white"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Authentic Flavor.
            <span className="text-[#FFC700]"> Unmatched Quality.</span>
          </h2>

          <p className="text-sm md:text-lg mb-6 text-white/90">
            Freshly prepared meals crafted with premium ingredients
            and served with passion.
          </p>

          <Link href="/menu" className="inline-block">
            <span className="bg-[#FFC700] text-black px-8 py-3 rounded-full font-semibold inline-block">
              Order Now
            </span>
          </Link>

        </motion.div>
      </div>

    </section>
  );
}