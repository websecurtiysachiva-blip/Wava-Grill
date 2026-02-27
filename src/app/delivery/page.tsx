"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
export default function DeliveryPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    street: "",
    apartment: "",
    zip: "",
    instructions: "",
    noContact: false,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const [loading, setLoading] = useState(false);
const [result, setResult] = useState<any>(null);

const handleSubmit = async () => {
  if (!form.street || !form.zip) {
    alert("Street address and Zip required");
    return;
  }

  try {
    setLoading(true);

    const res = await fetch("http://localhost:5000/api/delivery/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: 1, // temporarily static (later auth se aayega)
        street: form.street,
        apartment: form.apartment,
        zip: form.zip,
      }),
    });

    const data = await res.json();
    setResult(data);
    setLoading(false);

    if (data.available) {
      localStorage.setItem("deliveryAddress", JSON.stringify(form));
   router.push("/delivery-menu");
    }

  } catch (error) {
    console.error(error);
    setLoading(false);
    alert("Server error");
  }
};
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#111827] to-black flex items-center justify-center px-4 py-12">

      <div className="w-full max-w-3xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-[0_0_40px_rgba(0,0,0,0.4)]">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white tracking-tight">
            Verify Your Address
          </h1>
          <p className="text-gray-400 mt-3">
            Enter delivery details to check availability in your area.
          </p>
        </div>

        {/* Street */}
        <div className="mb-8">
          <input
            type="text"
            name="street"
            placeholder="Street Address *"
            value={form.street}
            onChange={handleChange}
            className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-white/30 transition"
          />
        </div>

        {/* Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <input
            type="text"
            name="apartment"
            placeholder="Apartment / Suite"
            value={form.apartment}
            onChange={handleChange}
            className="bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-white/30 transition"
          />

          <input
            type="text"
            name="zip"
            placeholder="Zip Code *"
            value={form.zip}
            onChange={handleChange}
            className="bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-white/30 transition"
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-3 mb-8">
          <input
            type="checkbox"
            name="noContact"
            checked={form.noContact}
            onChange={handleChange}
            className="w-5 h-5 accent-white"
          />
          <span className="text-gray-300 text-sm">
            Contactless delivery preferred
          </span>
        </div>

        {/* Instructions */}
        <div className="mb-10">
          <textarea
            name="instructions"
            placeholder="Delivery instructions (optional)"
            value={form.instructions}
            onChange={handleChange}
            rows={4}
            className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-white/30 transition resize-none"
          />
        </div>

        {/* Button */}
      <button
  onClick={handleSubmit}
  disabled={loading}
  className="w-full bg-gradient-to-r from-white to-gray-300 text-black font-semibold py-4 rounded-2xl hover:scale-[1.02] transition-all duration-300 shadow-xl disabled:opacity-50"
>
  {loading ? "Checking..." : "Verify & Continue"}
</button>

{result && (
  <div className="mt-6 text-center">
    {result.available ? (
      <p className="text-green-400">
        Delivery Available ✅ (Distance: {result.distance} km)
      </p>
    ) : (
      <p className="text-red-400">
        Out of delivery range ❌ (Distance: {result.distance} km)
      </p>
    )}
  </div>
)}

      </div>
    </div>
  );
}