"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CateringContent() {
  return (
    <section className="w-full bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-start"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-[280px] sm:w-[350px] lg:w-[420px]"
          >
            <Image
              src="/images/white-sauce.png"   // 👈 apni image path yaha daalo
              alt="Catering Product"
              width={500}
              height={600}
              className="w-full h-auto object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-red-600 leading-tight">
            CATERING <br /> DONE DIFFERENTLY
          </h1>

          <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed">
            Here at The Wava Grill, we do catering differently! Whether you are
            getting food for your co-workers, event attendees or just a hungry
            group of friends you can count on us to provide all of your
            mouth-watering favorites!
          </p>

          <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
            Simply let us know how many people you are ordering for, select one
            of the packages below and sit back and relax. We got this!
          </p>

          <p className="mt-6 font-semibold text-gray-900 text-base sm:text-lg">
            All packages include: Basmati rice, fresh lettuce & tomato, warm
            pita, our world-famous white sauce and fiery hot sauce and all
            serving utensils and plate ware.
          </p>
        </motion.div>
      </div>
    </section>
  );
}