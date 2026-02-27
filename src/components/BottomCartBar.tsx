"use client";

import { useRouter } from "next/navigation";
import { useCart } from "@/src/context/CartContext";

export default function BottomCartBar() {
  const { items, total } = useCart();
  const router = useRouter();

  if (items.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#8b4513] text-white p-4 shadow-2xl flex justify-between items-center z-50">

      <div>
        <p className="font-semibold">
          {items.reduce((sum, i) => sum + i.quantity, 0)} Items
        </p>
        <p className="text-sm">₹ {total.toFixed(2)}</p>
      </div>

      <button
        onClick={() => router.push("/cart")}
        className="bg-white text-[#8b4513] px-6 py-2 rounded-lg font-semibold"
      >
        View Cart
      </button>

    </div>
  );
}