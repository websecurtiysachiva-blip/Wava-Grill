"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#591A13] text-white pt-20 pb-12">

      {/* Top Accent Line */}
      <div className="w-full h-1 bg-[#FFC700]" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mt-16">

        {/* ================= BRAND ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/ooo.png"   // Use official transparent logo
            alt="Wava Grill Logo"
            width={180}
            height={80}
            className="mb-6"
          />

          <p className="text-sm text-gray-200 leading-relaxed mb-6">
            Authentic New York Style Halal Street Food,
            proudly served across Texas with quality,
            tradition, and bold flavor.
          </p>

          <div className="flex gap-4 text-lg text-[#FFC700]">
            <FaFacebookF className="hover:opacity-80 transition cursor-pointer" />
            <FaInstagram className="hover:opacity-80 transition cursor-pointer" />
            <FaTwitter className="hover:opacity-80 transition cursor-pointer" />
            <FaYoutube className="hover:opacity-80 transition cursor-pointer" />
          </div>
        </motion.div>

        {/* ================= QUICK LINKS ================= */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-[#FFC700]">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="hover:text-[#FFC700] transition">Home</Link></li>
            <li><Link href="/menu" className="hover:text-[#FFC700] transition">Menu</Link></li>
            <li><Link href="/locations" className="hover:text-[#FFC700] transition">Locations</Link></li>
            <li><Link href="/contact" className="hover:text-[#FFC700] transition">Contact</Link></li>
          </ul>
        </div>

        {/* ================= SUPPORT ================= */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-[#FFC700]">
            Support
          </h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/privacy" className="hover:text-[#FFC700] transition">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-[#FFC700] transition">Terms of Service</Link></li>
            <li><Link href="/faq" className="hover:text-[#FFC700] transition">FAQ</Link></li>
            <li><Link href="/help" className="hover:text-[#FFC700] transition">Help Center</Link></li>
          </ul>
        </div>

        {/* ================= CONTACT ================= */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-[#FFC700]">
            Contact
          </h3>
          <ul className="space-y-4 text-sm text-gray-200">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#FFC700] mt-1" />
              804 W Shore Dr, Richardson, TX 75080
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-[#FFC700]" />
              (469) 348-4409
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#FFC700]" />
              support@wavagrill.com
            </li>
          </ul>
        </div>

        {/* ================= NEWSLETTER ================= */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-[#FFC700]">
            Stay Updated
          </h3>

          <div className="flex mb-6">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 rounded-l-md bg-white text-black text-sm focus:outline-none"
            />
            <button className="px-5 py-3 bg-[#FFC700] text-black font-semibold rounded-r-md hover:opacity-90 transition">
              Subscribe
            </button>
          </div>

          <p className="text-sm text-gray-200 mb-3">
            Download Our App
          </p>

          <div className="flex gap-4">
            <Image
              src="/images/appstore.png"
              alt="App Store"
              width={120}
              height={40}
              className="hover:scale-105 transition"
            />
            <Image
              src="/images/playstore.png"
              alt="Play Store"
              width={120}
              height={40}
              className="hover:scale-105 transition"
            />
          </div>
        </div>

      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-[#7a2a23] mt-16 pt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Wava Grill. All Rights Reserved.
      </div>

    </footer>
  );
}