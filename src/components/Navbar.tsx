"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import TopStrip from "./TopStrip";
import { useRouter } from "next/navigation";


export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

const [mobileSubOpen, setMobileSubOpen] = useState(false);

  const navLinks = [
     { name: "HOME", href: "/" },
    { name: "MENU", href: "/menu" },
    { name: "LOCATIONS", href: "/locations" },
    { name: "ABOUT", href: "/about" },
    { name: "OFFERS", href: "/offers" },
  ];

const goToAbout = () => {
  router.push("/about");
  setAboutOpen(false);
};




const goToAboutSection = (id: string) => {
  router.push(`/about#${id}`);
  setAboutOpen(false);
};



  return (
   <div className="fixed top-0 left-0 w-full z-[999] bg-black">
      <TopStrip />

      <motion.header
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full py-3 bg-black"
      >
        <div className="max-w-7xl mx-auto flex items-center px-4 sm:px-6 lg:px-8">

          {/* Logo */}
        <Link href="/">
  <Image
    src="/images/ooo.png"
    alt="Logo"
    width={140}
    height={140}
    priority
    className="w-[90px] h-auto object-contain cursor-pointer"
  />
</Link>

          {/* Right Section */}
          <div className="ml-auto flex items-center gap-6">

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8 font-semibold text-sm tracking-wide uppercase relative">

              {navLinks.map((link) => {
                const isActive = pathname === link.href;


                  if (link.name === "ABOUT") {
  return (
    <div
      key={link.name}
      className="relative"
      onMouseEnter={() => setAboutOpen(true)}
      onMouseLeave={() => setAboutOpen(false)}
    >
   <div
  onClick={goToAbout}
  className={`flex items-center gap-1 cursor-pointer ${
    isActive
      ? "text-red-600"
      : "text-white hover:text-red-600"
  }`}
>
  ABOUT <span className="text-xs">⌄</span>
</div>


      <AnimatePresence>
        {aboutOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-12 left-1/2 -translate-x-1/2 
            w-64 bg-white text-black rounded-xl shadow-xl py-4 z-50"
          >
            <div className="flex flex-col">
<div className="flex flex-col">

  <button
    onClick={goToAbout}
    className="px-6 py-2 text-left hover:bg-gray-100 font-semibold"
  >
    About
  </button>

  <button
    onClick={() => goToAboutSection("ourStory")}
    className="px-6 py-2 text-left hover:bg-gray-100"
  >
    Our Story
  </button>

  <button
    onClick={() => goToAboutSection("mission")}
    className="px-6 py-2 text-left hover:bg-gray-100"
  >
    Mission & Vision
  </button>

  <button
    onClick={() => goToAboutSection("team")}
    className="px-6 py-2 text-left hover:bg-gray-100"
  >
    Our Team
  </button>

  <button
    onClick={() => goToAboutSection("contact")}
    className="px-6 py-2 text-left hover:bg-gray-100"
  >
    Contact Us
  </button>

</div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
 if (link.name === "MENU") {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setMenuOpen(true)}
                      onMouseLeave={() => setMenuOpen(false)}
                    >
                      <div
                        className={`flex items-center gap-1 cursor-pointer transition-all duration-300 ${
                          isActive
                            ? "text-red-600"
                            : "text-white hover:text-red-600"
                        }`}
                      >
                        MENU <span className="text-xs">⌄</span>
                      </div>

                      {/* Desktop Dropdown */}
                      <AnimatePresence>
                        {menuOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-12 left-1/2 -translate-x-1/2 
                            w-64 bg-white text-black rounded-xl 
                            shadow-[0_15px_40px_rgba(0,0,0,0.25)] 
                            py-4 z-50"
                          >
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 
                            w-4 h-4 bg-white rotate-45"></div>

                            <div className="flex flex-col">

                              <Link
                                href="/menu"
                                className="px-6 py-3 hover:bg-gray-100 transition font-medium"
                              >
                                Menu
                              </Link>

                              <Link
                                href="/catering"
                                className="px-6 py-3 hover:bg-gray-100 transition font-medium"
                              >
                                Catering
                              </Link>

                              <Link
                                href="/nutrition"
                                className="px-6 py-3 hover:bg-gray-100 transition font-medium"
                              >
                                Nutritional Guide
                              </Link>

                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                        prefetch={true}
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

            {/* Desktop Order Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold text-sm transition-all duration-300"
            >
              ORDER NOW
            </motion.button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden text-white text-2xl"
            >
              ☰
            </button>

          </div>
        </div>
      </motion.header>
<AnimatePresence>
  {mobileOpen && (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 right-0 h-full w-80 bg-black text-white z-[1000] p-8 shadow-2xl"
    >
      {/* Close */}
      <button
        onClick={() => setMobileOpen(false)}
        className="text-right w-full text-2xl mb-10"
      >
        ✕
      </button>

      <div className="flex flex-col gap-8 uppercase font-semibold text-lg">

        {/* HOME */}
        <Link href="/" onClick={() => setMobileOpen(false)}>
          HOME
        </Link>

        {/* MENU WITH SUB */}
        <div>
          <button
            onClick={() => setMobileSubOpen(!mobileSubOpen)}
            className="flex justify-between items-center w-full"
          >
            MENU
            <span>{mobileSubOpen ? "−" : "+"}</span>
          </button>

          <AnimatePresence>
            {mobileSubOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col mt-4 ml-4 gap-4 text-base text-gray-300"
              >
                <Link href="/menu" onClick={() => setMobileOpen(false)}>
                  Full Menu
                </Link>

                <Link href="/catering" onClick={() => setMobileOpen(false)}>
                  Catering
                </Link>

                <Link href="/nutrition" onClick={() => setMobileOpen(false)}>
                  Nutritional Guide
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* LOCATIONS */}
        <Link href="/locations" onClick={() => setMobileOpen(false)}>
          LOCATIONS
        </Link>

        {/* ABOUT WITH SUB */}
        <div>
          <button
            onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
            className="flex justify-between items-center w-full"
          >
            ABOUT
            <span>{mobileAboutOpen ? "−" : "+"}</span>
          </button>

          <AnimatePresence>
            {mobileAboutOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col mt-4 ml-4 gap-4 text-base text-gray-300"
              >
                <button
                  onClick={() => {
                    goToAbout();
                    setMobileOpen(false);
                  }}
                >
                  About
                </button>

                <button
                  onClick={() => {
                    goToAboutSection("ourStory");
                    setMobileOpen(false);
                  }}
                >
                  Our Story
                </button>

                <button
                  onClick={() => {
                    goToAboutSection("mission");
                    setMobileOpen(false);
                  }}
                >
                  Mission & Vision
                </button>

                <button
                  onClick={() => {
                    goToAboutSection("team");
                    setMobileOpen(false);
                  }}
                >
                  Our Team
                </button>

                <button
                  onClick={() => {
                    goToAboutSection("contact");
                    setMobileOpen(false);
                  }}
                >
                  Contact Us
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* OFFERS */}
        <Link href="/offers" onClick={() => setMobileOpen(false)}>
          OFFERS
        </Link>

        {/* ORDER BUTTON */}
        <button className="mt-8 bg-red-600 hover:bg-red-700 py-3 rounded-full font-bold transition">
          ORDER NOW
        </button>

      </div>
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
}
