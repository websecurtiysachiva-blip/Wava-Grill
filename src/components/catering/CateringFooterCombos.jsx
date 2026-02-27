"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const combos = [
  {
    title: "Family Feast Combo",
    subtitle: "Perfect for small gatherings",
    img: "/catering/combo1.png",
  },
  {
    title: "Corporate Party Pack",
    subtitle: "Ideal for office events",
    img: "/catering/combo2.png",
  },
  {
    title: "Weekend Special Buffet",
    subtitle: "Celebrate with authentic flavors",
    img: "/catering/combo3.png",
  },
];

export default function CateringFooterCombos() {
  const router = useRouter();

  return (
    <section className="bg-black py-16 md:py-28">

      {/* ================= MOBILE UI ================= */}
{/* ================= MOBILE UI ================= */}
<div className="md:hidden px-4 space-y-10">
  {combos.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative cursor-pointer"
      onClick={() => router.push("/delivery")}
    >
      {/* Image Wrapper */}
      <div className="relative w-full bg-black rounded-2xl overflow-hidden flex items-center justify-center">
        <Image
          src={item.img}
          alt={item.title}
          width={1200}
          height={800}
          quality={100}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Text Below Image (No Overlay Now) */}
      <div className="mt-4 text-white">
        <h3 className="text-xl font-bold mb-1">
          {item.title}
        </h3>
        <p className="text-gray-400 text-sm">
          {item.subtitle}
        </p>
      </div>
    </motion.div>
  ))}
</div>
      {/* ================= DESKTOP UI ================= */}
      <div className="hidden md:block px-20">
        <div className="max-w-7xl mx-auto space-y-24">
          {combos.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
              onClick={() => router.push("/delivery")}
            >
              <div className="relative w-full h-[550px] overflow-hidden rounded-3xl">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  quality={100}
                  className="object-cover transition duration-[2000ms] ease-out group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl" />

              <div className="absolute bottom-12 left-12 text-white">
                <h3 className="text-4xl font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-300">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}