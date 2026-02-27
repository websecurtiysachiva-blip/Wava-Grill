"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function WabaPromise() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 py-5 px-6 overflow-hidden">

      {/* Background Light Effects */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-black/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-black/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE CONTENT */}
        <div className="max-w-xl">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="uppercase tracking-[0.35em] text-xs text-gray-500 font-medium"
          >
            Our Commitment
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-black"
          >
            The WaVa Grill Promise
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-gray-600 text-base sm:text-lg leading-relaxed"
          >
            We redefine what it means to eat better. Inspired by balanced,
            better-for-you traditions, we craft bold, grilled-to-order meals
            designed to nourish your body and satisfy your cravings —
            without compromise.
            <br /><br />
            Every meal is made fresh and designed to leave you feeling{" "}
            <span className="font-semibold text-black">
              Pleasingly Nourished.
            </span>
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            viewport={{ once: true }}
            className="mt-10 flex flex-wrap gap-6"
          >
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-8 py-3 rounded-full font-semibold shadow-xl hover:shadow-2xl transition"
              >
                Learn More
              </motion.button>
            </Link>

            <Link href="/menu">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="border border-black text-black px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition"
              >
                View Menu
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT SIDE PHONE WITH FLOATING EFFECT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end relative"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 1.5, 0, -1.5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px]"
          >
            <Image
              src="/images/promise.jpg"   // 👈 transparent hand + phone image
              alt="App Preview"
              width={500}
              height={1000}
              className="w-full h-auto object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.25)]"
              priority
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}