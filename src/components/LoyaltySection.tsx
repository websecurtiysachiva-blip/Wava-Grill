"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LoyaltySection() {
  return (
    <section className="relative w-full py-24 px-4 sm:px-6 lg:px-12 overflow-hidden">

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-pink-100 to-yellow-100 animate-gradient-x" />

      <Link href="/loyalty">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full 
                     rounded-3xl 
                     bg-white/70 backdrop-blur-xl
                     shadow-2xl 
                     px-8 lg:px-16 py-14
                     flex flex-col lg:flex-row 
                     items-center justify-between 
                     gap-14 cursor-pointer
                     hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                     transition duration-500"
        >

          {/* LEFT PHONE */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="flex justify-center w-full lg:w-1/3"
          >
            <Image
              src="/images/phone.png"
              alt="Waba App"
              width={280}
              height={500}
              className="w-[200px] sm:w-[240px] lg:w-[260px] drop-shadow-2xl"
            />
          </motion.div>

          {/* CENTER CONTENT */}
          <div className="text-center lg:w-1/3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 tracking-wide">
              WAVA GRILL LOYALTY
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Download the Wava Grill app to earn rewards,
              unlock exclusive offers, and enjoy healthier meals.
            </p>

            <div className="flex justify-center gap-6">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Image
                  src="/images/appstore.png"
                  alt="App Store"
                  width={160}
                  height={50}
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }}>
                <Image
                  src="/images/playstore.png"
                  alt="Google Play"
                  width={160}
                  height={50}
                />
              </motion.div>
            </div>
          </div>

          {/* RIGHT FOOD */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="flex justify-center w-full lg:w-1/3"
          >
            <Image
              src="/images/food.png"
              alt="Waba Food"
              width={420}
              height={500}
              className="w-[260px] sm:w-[300px] lg:w-[360px] drop-shadow-2xl"
            />
          </motion.div>

        </motion.div>
      </Link>

    </section>
  );
}