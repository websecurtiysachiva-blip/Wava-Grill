// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const slides = [
//   { image: "/images/slide1.jpg", title: "Delicious White Sauce" },
//   { image: "/images/slide2.jpg", title: "Hot Spicy Sauce" },
//   { image: "/images/slide3.jpg", title: "Signature Taste" },
//   { image: "/images/slide4.jpg", title: "Premium Flavours" },
// ];

// export default function Hero() {

//   const [index, setIndex] = useState(0);

//   const paginate = (dir: number) => {
//     setIndex((prev) => (prev + dir + slides.length) % slides.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => paginate(1), 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
// <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[85vh] mt-[100px] overflow-hidden bg-black">

//       {/* SLIDES */}
//       {slides.map((slide, i) => {

//         const isActive = i === index;

//         return (
//           <motion.div
//             key={i}
//             initial={{ x: "100%" }}
//             animate={{ 
//               x: isActive ? "0%" : i < index ? "-100%" : "100%" 
//             }}
//             transition={{ duration: 0.9, ease: "easeInOut" }}
//             className="absolute top-0 left-0 w-full h-full"
//           >
//         <div className="relative w-full h-full overflow-hidden">
//   <Image
//   src={slide.image}
//   alt="Hero"
//   fill
//   priority
//   sizes="100vw"
//   placeholder="blur"
//   blurDataURL="/images/slide1.jpg"
//   className="object-cover object-top"
// />
// </div>

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/40" />
//             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

//             {/* TEXT */}
//             {isActive && (
//               <motion.div
//                 initial={{ opacity: 0, y: 80 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5, duration: 0.6 }}
//                 className="absolute inset-0 flex items-center justify-center md:justify-start px-6 md:px-24 z-10"
//               >
//                <div className="
// relative 
// max-w-[360px] md:max-w-[420px] 
// p-5 md:p-7
// rounded-2xl
// bg-white/10
// backdrop-blur-2xl
// border border-white/20
// shadow-[0_8px_40px_rgba(0,0,0,0.4)]
// overflow-hidden
// ">

// {/* Gradient Glow Border */}
// <div className="absolute inset-0 rounded-2xl border border-white/10 
// bg-gradient-to-br from-white/20 via-transparent to-white/10 pointer-events-none"/>

// <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3">
//   {slide.title}
// </h1>

// <p className="text-sm md:text-base opacity-80 mb-5">
//   Experience the authentic taste of Wava Grill’s premium sauces.
// </p>

// <button className="
// bg-red-600 hover:bg-red-700 
// px-5 py-2.5
// text-sm md:text-base
// rounded-full 
// transition-all duration-300 
// hover:scale-105 
// shadow-lg
// ">
//   Order Now
// </button>

// </div>
//               </motion.div>
//             )}

//           </motion.div>
//         );
//       })}

//       {/* LEFT ARROW */}
//     {/* NAVIGATION */}
// <div className="
// absolute 
// bottom-[12%] 
// left-1/2 
// -translate-x-1/2 
// z-20 
// flex 
// flex-row 
// items-center 
// justify-center 
// gap-4
// bg-white/10 
// backdrop-blur-md 
// px-4 py-2 
// rounded-full 
// border border-white/20
// ">

//   {/* LEFT */}
//   <button
//     onClick={() => paginate(-1)}
//     className="
//     group
//     w-9 h-9 
//     rounded-full 
//     bg-gradient-to-br from-red-500 to-orange-500
//     shadow-lg 
//     flex items-center justify-center
//     transition-all duration-300
//     hover:scale-110
//     hover:shadow-[0_0_20px_rgba(255,80,80,0.8)]
//     "
//   >
//     <span className="text-white text-xl font-bold group-hover:-translate-x-0.5 transition">
//       ‹
//     </span>
//   </button>

//   {/* RIGHT */}
//   <button
//     onClick={() => paginate(1)}
//     className="
//     group
//     w-9 h-9
//     rounded-full 
//     bg-gradient-to-br from-orange-500 to-pink-500
//     shadow-lg 
//     flex items-center justify-center
//     transition-all duration-300
//     hover:scale-110
//     hover:shadow-[0_0_20px_rgba(255,100,150,0.8)]
//     "
//   >
//     <span className="text-white text-xl font-bold group-hover:translate-x-0.5 transition">
//       ›
//     </span>
//   </button>

// </div>

//     </section>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const slides = [
  { image: "/images/slides1.jpg" },
  { image: "/images/slides2.jpg" },
  { image: "/images/slides3.jpg" },
  { image: "/images/slides4.jpg" },
  { image: "/images/slides5.jpg" },
];

export default function Hero() {

  const [index, setIndex] = useState(0);

  const paginate = (dir: number) => {
    setIndex((prev) => (prev + dir + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => paginate(1), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[85vh] mt-[100px] overflow-hidden bg-black">

      {/* SLIDES */}
      {slides.map((slide, i) => {

        const isActive = i === index;

        return (
          <motion.div
            key={i}
            initial={{ x: "100%" }}
            animate={{ 
              x: isActive ? "0%" : i < index ? "-100%" : "100%" 
            }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full"
          >
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt="Hero Slide"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"   // No hover effect
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>
        );
      })}

      {/* NAVIGATION */}
      <div className="
        absolute 
        bottom-[12%] 
        left-1/2 
        -translate-x-1/2 
        z-20 
        flex 
        flex-row 
        items-center 
        justify-center 
        gap-4
        bg-white/10 
        backdrop-blur-md 
        px-4 py-2 
        rounded-full 
        border border-white/20
      ">

        {/* LEFT */}
        <button
          onClick={() => paginate(-1)}
          className="
            w-9 h-9 
            rounded-full 
            bg-gradient-to-br from-red-500 to-orange-500
            shadow-lg 
            flex items-center justify-center
            transition-all duration-300
            hover:scale-110
          "
        >
          <span className="text-white text-xl font-bold">‹</span>
        </button>

        {/* RIGHT */}
        <button
          onClick={() => paginate(1)}
          className="
            w-9 h-9
            rounded-full 
            bg-gradient-to-br from-orange-500 to-pink-500
            shadow-lg 
            flex items-center justify-center
            transition-all duration-300
            hover:scale-110
          "
        >
          <span className="text-white text-xl font-bold">›</span>
        </button>

      </div>

    </section>
  );
}