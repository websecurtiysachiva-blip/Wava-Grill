"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CateringGallery() {
  return (
<section className="relative w-full h-[calc(100vh-100px)] overflow-hidden mt-[100px]">

      {/* BACKGROUND IMAGE */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <Image
          src="/images/catering1.jpg"
          alt="Premium Catering"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/55" />

      {/* CENTER CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">

        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-white text-4xl md:text-6xl font-bold tracking-wide"
        >
          Premium Catering Experience
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-gray-200 mt-6 text-lg md:text-xl max-w-2xl"
        >
          Fresh Mediterranean flavors crafted perfectly for your
          events, parties, and celebrations.
        </motion.p>

        <motion.button
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition"
        >
          Book Catering Now
        </motion.button>

      </div>
    </section>
  );
}





// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function CateringGallery() {
//   return (
//     <section className="relative w-full h-screen pt-[100px] overflow-hidden">

//       {/* Background Image FULL WIDTH */}
//       <motion.div
//         initial={{ scale: 1.05, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 1.2 }}
//         className="absolute inset-0"
//       >
//         <Image
//           src="/images/catering3.jpg"
//           alt="Premium Catering"
//           fill
//           priority
//           className="object-cover object-center"
//         />
//       </motion.div>

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/60" />

//       {/* Center Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

//         <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold">
//           Premium Catering Experience
//         </h1>

//         <p className="text-gray-200 mt-6 text-lg md:text-xl max-w-2xl">
//           Fresh Mediterranean flavors crafted perfectly for your events,
//           parties, and celebrations.
//         </p>

//         <button className="mt-8 bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition">
//           Book Catering Now
//         </button>

//       </div>
//     </section>
//   );
// }