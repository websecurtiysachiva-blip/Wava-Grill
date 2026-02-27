"use client";

import { useCart } from "@/src/context/CartContext";
import { useState } from "react";

export default function CheckoutPage() {
  const { items, total } = useCart();
  const [tip, setTip] = useState(0);

  const deliveryFee = total > 0 ? 29 : 0;
  const taxes = total * 0.05;
  const grandTotal = total + deliveryFee + taxes + tip;

  return (
    <div className="min-h-screen bg-[#f7f7f7] py-10">

      <div className="max-w-[1100px] mx-auto bg-white p-10 rounded-lg shadow-sm">

        {/* ================= DELIVERY HEADER ================= */}
        <div className="border-b pb-6 mb-8">
          <h1 className="text-2xl font-semibold">Delivery Order</h1>
          <p className="text-sm text-gray-500 mt-2">
            ASAP (27–60 min)
          </p>
        </div>

        {/* ================= PAYMENT TYPE ================= */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Payment Type</h2>

          <div className="space-y-3">
            <button className="w-full border p-3 rounded-md hover:bg-gray-50">
              Google Pay
            </button>
            <button className="w-full border p-3 rounded-md hover:bg-gray-50">
              PayPal
            </button>
            <button className="w-full bg-blue-600 text-white p-3 rounded-md">
              New Card
            </button>
          </div>
        </section>

        {/* ================= CONTACT INFO ================= */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Contact Info</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <input className="checkout-input" placeholder="First Name" />
            <input className="checkout-input" placeholder="Last Name" />
            <input className="checkout-input" placeholder="Phone #" />
            <input className="checkout-input" placeholder="Email" />
          </div>
        </section>

        {/* ================= CREDIT CARD ================= */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Credit Card Info</h2>

          <div className="space-y-4">
            <input className="checkout-input" placeholder="Credit Card #" />

            <div className="grid md:grid-cols-3 gap-6">
              <input className="checkout-input" placeholder="Expire Month" />
              <input className="checkout-input" placeholder="Expire Year" />
              <input className="checkout-input" placeholder="CVV" />
            </div>
          </div>
        </section>

        {/* ================= TIP SECTION ================= */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Add Tip</h2>

          <div className="flex gap-3 flex-wrap">
            {[10, 15, 20, 25].map((percent) => {
              const tipAmount = (total * percent) / 100;
              return (
                <button
                  key={percent}
                  onClick={() => setTip(tipAmount)}
                  className={`px-5 py-3 border rounded-md ${
                    tip === tipAmount ? "bg-blue-600 text-white" : ""
                  }`}
                >
                  {percent}% ₹{tipAmount.toFixed(2)}
                </button>
              );
            })}
          </div>
        </section>

        {/* ================= ORDER TOTAL ================= */}
        <section className="border-t pt-8">

          <div className="space-y-2 text-sm">

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹ {total.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery</span>
              <span>₹ {deliveryFee.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Tax</span>
              <span>₹ {taxes.toFixed(2)}</span>
            </div>

            {tip > 0 && (
              <div className="flex justify-between">
                <span>Tip</span>
                <span>₹ {tip.toFixed(2)}</span>
              </div>
            )}

            <div className="flex justify-between font-bold text-lg border-t pt-4">
              <span>Total</span>
              <span>₹ {grandTotal.toFixed(2)}</span>
            </div>

          </div>

          <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-4 rounded-md text-lg font-semibold">
            Complete Order
          </button>

        </section>

      </div>
    </div>
  );
}