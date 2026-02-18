"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
  { name: "BUILD-YOUR-OWN", image: "/images/build.png", tag: "DIGITAL ONLY" },
  { name: "BURRITO", image: "/images/burrito.png" },
  { name: "BURRITO BOWL", image: "/images/bowl.png" },
  { name: "TACOS", image: "/images/tacos.png" },
  { name: "QUESADILLA", image: "/images/quesadilla.png", tag: "DIGITAL ONLY" },
  { name: "SALAD", image: "/images/salad.png" },
  { name: "KID'S MEAL", image: "/images/kids.png" },
  { name: "CHIPS & SIDES", image: "/images/chips.png" },
];

export default function MenuCategories() {
  return (
    <section className="w-full bg-[#f5f3f0] py-20 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">

          {categories.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="text-center group cursor-pointer"
            >

              {/* Image */}
              <div className="relative w-full h-60 flex justify-center items-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Tag */}
              {item.tag && (
                <span className="inline-block bg-black text-white text-xs px-3 py-1 rounded-full mb-4 tracking-wide">
                  {item.tag}
                </span>
              )}

              {/* Title */}
              <h3 className="text-3xl font-extrabold text-[#4b1e0f] tracking-wide group-hover:text-red-600 transition">
                {item.name}
              </h3>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
