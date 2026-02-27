"use client";

import { useCart } from "@/src/context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function CartPageContent() {
  const { items, updateItem, removeItem, total } = useCart();
  const [agree, setAgree] = useState(false);
const router = useRouter();
  const deliveryFee = total > 0 ? 29 : 0;
  const taxes = total * 0.05;
  const grandTotal = total + deliveryFee + taxes;
return (
  <div className="min-h-screen bg-[#f4ede7]">

    <div className="max-w-[1400px] mx-auto px-6 py-12 flex items-start gap-10">

      {/* ================= LEFT SIDE ================= */}
      <div className="flex-1">

        <h1 className="text-3xl font-bold text-[#3b1d12] mb-10">
          Your Cart
        </h1>

        {items.length === 0 ? (
          <div className="bg-white p-10 rounded-2xl shadow text-center">
            <p className="text-gray-500 text-lg">
              Your cart is empty 🛒
            </p>
          </div>
        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <div className="flex gap-5">

                  <div className="w-24 h-24 rounded-xl overflow-hidden">
                    <img
                      src={`http://localhost:5000${item.image}`}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#3b1d12]">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      ₹ {item.price} per item
                    </p>

                    <div className="mt-4 flex items-center gap-4">
                      <div className="flex items-center border border-[#8b4513] rounded-lg overflow-hidden">

                        <button
                          onClick={() => updateItem(item.id, -1)}
                          className="px-4 py-2 text-[#8b4513] font-bold hover:bg-[#8b4513] hover:text-white transition"
                        >
                          -
                        </button>

                        <span className="px-4 font-semibold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => updateItem(item.id, 1)}
                          className="px-4 py-2 text-[#8b4513] font-bold hover:bg-[#8b4513] hover:text-white transition"
                        >
                          +
                        </button>

                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 text-sm hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                </div>

                <div className="text-right mt-4">
                  <p className="text-lg font-bold text-[#8b4513]">
                    ₹ {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

              </div>
            ))}

          </div>

        )}

      </div>

      {/* ================= RIGHT SIDEBAR ================= */}
      {items.length > 0 && (
        <div className="hidden lg:block w-[400px] flex-shrink-0">

          <div className="sticky top-28">

            <div className="bg-white shadow-xl rounded-xl p-6 space-y-4">

              <h2 className="text-xl font-semibold">
                Your items
              </h2>

              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between text-sm border-b pb-2"
                  >
                    <span className="flex-1 pr-3 break-words">
                      {item.quantity} x {item.name}
                    </span>
                    <span className="font-semibold whitespace-nowrap">
                      ₹ {(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>



        
<div className="border-t pt-4 space-y-3">

  <div className="flex justify-between text-sm">
    <span>Subtotal</span>
    <span>₹ {total.toFixed(2)}</span>
  </div>

  <div className="flex justify-between text-sm">
    <span>Delivery Fee</span>
    <span>₹ {deliveryFee.toFixed(2)}</span>
  </div>

  <div className="flex justify-between text-sm">
    <span>Tax (5%)</span>
    <span>₹ {taxes.toFixed(2)}</span>
  </div>

  <div className="flex justify-between font-bold text-lg border-t pt-3">
    <span>Total</span>
    <span>₹ {grandTotal.toFixed(2)}</span>
  </div>
<button
  onClick={() => router.push("/checkout")}
  className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold mt-4 transition"
>
  Proceed to Checkout
</button>

              </div>

            </div>

          </div>

        </div>
      )}

    </div>

  </div>
);
}