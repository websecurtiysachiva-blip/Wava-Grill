"use client";

import Link from "next/link";

export default function TopAnnouncement() {
  return (
    <div className="w-full bg-[#f2f0ed] border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">

        {/* Left Text */}
        <p className="text-sm md:text-base font-semibold text-[#4b1e0f] tracking-wide">
          JOIN WABA REWARDS. UNLOCK FREE WABA.
        </p>

        {/* Right Buttons */}
        <div className="flex items-center gap-4 text-sm font-semibold">
          <button className="bg-[#4b1e0f] text-white px-4 py-2 rounded hover:bg-[#6a2c16] transition">
            CREATE AN ACCOUNT
          </button>

          <span className="text-gray-500">OR</span>

          <Link
            href="/login"
            className="text-[#4b1e0f] underline hover:text-red-600 transition"
          >
            SIGN IN
          </Link>
        </div>

      </div>
    </div>
  );
}
