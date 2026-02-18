"use client";

import { motion } from "framer-motion";

export default function WabaPromise() {
  return (
    <section className="w-full bg-gray-100 py-16 sm:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide text-black"
        >
          THE WABA PROMISE
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-6 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed"
        >
      At WaBa Grill, we’re redefining what it means to eat better. Born in LA and inspired by the balanced, better-for-you traditions of Asian cuisine, we craft bold, grilled-to-order meals designed to nourish your body and satisfy your cravings—without compromise. Whether you’re on the go or enjoying a quick bite with friends, WaBa Grill delivers fresh, flavorful dishes that fit seamlessly into your active lifestyle. Because at WaBa Grill, every meal is made to leave you feeling Pleasingly Nourished.
        </motion.p>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 border-2 border-black px-8 py-3 font-semibold text-sm sm:text-base tracking-wide hover:bg-black hover:text-white transition-all duration-300"
        >
          LEARN MORE
        </motion.button>

      </div>
    </section>
  );
}
