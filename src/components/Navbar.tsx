// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import TopStrip from "./TopStrip";

// export default function Navbar() {
//   const pathname = usePathname();
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "MENU", href: "/menu" },
//     { name: "LOCATIONS", href: "/locations" },
//     { name: "ABOUT", href: "/about" },
//     { name: "OFFERS", href: "/offers" },
//   ];

//   return (
//      <div className="sticky top-0 w-full z-50">

//     {/* 🔴 TOP STRIP YAHAN ADD KARO */}
//     <TopStrip />

//     <motion.header
//   initial={{ y: -60 }}
//   animate={{ y: 0 }}
//   transition={{ duration: 0.4 }}
//   className="w-full py-4 bg-black shadow-md"

// >

//         <div className="max-w-7xl mx-auto flex items-center px-4 sm:px-6 lg:px-8">

//           {/* Logo Left */}
//           <div className="flex items-center">
//             <Image
//               src="/images/ooo.png"
//               alt="Logo"
//               width={140}
//               height={140}
//               priority
//               className="w-[110px] h-auto object-contain"
//             />
//           </div>

//           {/* Right Section */}
//           <div className="ml-auto flex items-center gap-8">

//             {/* Desktop Nav */}
//             <nav className="hidden md:flex gap-8 font-semibold text-sm tracking-wide uppercase">
//               {navLinks.map((link) => {
//                 const isActive = pathname === link.href;

//                 return (
//                   <Link
//                     key={link.name}
//                     href={link.href}
//                     className={`transition-all duration-300 ${
//                       isActive
//                         ? "text-red-600"
//                         : "text-white hover:text-red-600"
//                     }`}
//                   >
//                     {link.name}
//                   </Link>
//                 );
//               })}
//             </nav>

//             {/* ORDER NOW Button */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold text-sm transition-all duration-300"
//             >
//               ORDER NOW
//             </motion.button>

//           </div>
//         </div>

//         {/* Bottom subtle line */}
//         <div className="h-[2px] w-full bg-gray-800 mt-4"></div>
//       </motion.header>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TopStrip from "./TopStrip";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "MENU", href: "/menu" },
    { name: "LOCATIONS", href: "/locations" },
    { name: "ABOUT", href: "/about" },
    { name: "OFFERS", href: "/offers" },
  ];

  return (
    <div className="sticky top-0 w-full z-50 bg-black">

      <TopStrip />

      <motion.header
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full py-2 bg-black"
      >
        <div className="max-w-7xl mx-auto flex items-center px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/ooo.png"
              alt="Logo"
              width={140}
              height={140}
              priority
              className="w-[90px] h-auto object-contain"
            />
          </div>

          {/* Right Section */}
          <div className="ml-auto flex items-center gap-8">

            <nav className="hidden md:flex gap-8 font-semibold text-sm tracking-wide uppercase">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`transition-all duration-300 ${
                      isActive
                        ? "text-red-600"
                        : "text-white hover:text-red-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold text-sm transition-all duration-300"
            >
              ORDER NOW
            </motion.button>

          </div>
        </div>
      </motion.header>
    </div>
  );
}
