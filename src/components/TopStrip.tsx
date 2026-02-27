"use client";

import { motion } from "framer-motion";

export default function TopStrip() {
  return (
    <div className="w-full bg-[#3d120d] text-white border-b border-[#591A13]">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-2 text-sm">

        {/* Left Section */}
        <motion.div
          whileHover={{ x: 4 }}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <motion.span
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-[#FFC700]"
          >
            📍
          </motion.span>

          <span className="tracking-widest font-semibold text-white group-hover:text-[#FFC700] transition duration-300">
            FIND MY WAVA GRILL
          </span>
        </motion.div>

        {/* Right Section */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="flex items-center"
        >
          <button className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FFC700]/40 bg-[#591A13] hover:bg-[#FFC700] hover:text-black transition-all duration-300 font-semibold shadow-sm">
            <span className="text-[#FFC700] group-hover:text-black">👤</span>
            LOGIN
          </button>
        </motion.div>

      </div>

      {/* Subtle Gold Line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#FFC700] to-transparent opacity-40"></div>
    </div>
  );
}
