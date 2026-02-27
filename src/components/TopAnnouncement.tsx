"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function TopAnnouncement() {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500"
    >
 <div className="max-w-7xl mx-auto px-4 py-3">

  <div className="flex flex-col lg:flex-row 
                  items-center justify-between 
                  gap-4 text-center lg:text-left">

    {/* Left Text */}
    <p className="text-sm md:text-base font-semibold text-white tracking-wide max-w-xl">
      🎉 JOIN WAVA GRILL REWARDS. UNLOCK FREE WAVA GRILL.
    </p>

    {/* Right Buttons */}
    <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 text-sm font-semibold">

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-red-600 
                   px-5 py-2 rounded-full 
                   shadow-md hover:shadow-xl 
                   transition duration-300 whitespace-nowrap"
      >
        CREATE ACCOUNT
      </motion.button>

      <span className="text-white font-medium hidden sm:block">
        OR
      </span>

      <motion.div whileHover={{ scale: 1.05 }}>
        <Link
          href="/login"
          className="bg-black/20 backdrop-blur-md 
                     text-white px-5 py-2 
                     rounded-full 
                     hover:bg-black/40 
                     transition duration-300 whitespace-nowrap"
        >
          SIGN IN
        </Link>
      </motion.div>

    </div>

  </div>
</div>
    </motion.div>
  );
}