"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
};

type Props = {
  item: MenuItem;
};

export default function MenuCard({ item }: Props) {
  const [open, setOpen] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<
  "delivery" | "carryout" | ""
>("");   
const [loading, setLoading] = useState(false);
const router = useRouter();
  const imageUrl = `http://localhost:5000${item.image}`;
const handleAddToCart = async () => {
  try {
    setLoading(true);

    const res = await fetch("http://localhost:5000/api/cart/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: 1, // temporary static (later auth se aayega)
        menu_item_id: item.id,
        quantity: 1,
      }),
    });

    const data = await res.json();
    console.log(data);

    setLoading(false);
    alert("Item added to cart ✅");

  } catch (error) {
    console.error(error);
    setLoading(false);
    alert("Error adding to cart");
  }
};


  // ESC close + scroll lock
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  return (
    <>
      {/* CARD */}
      <div
onClick={() => setOrderModalOpen(true)}
        className="mt-24 group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-2"
      >
        {/* Image */}
        <div className="relative h-40 w-full overflow-hidden">
         <img
  src={imageUrl}
  alt={item.name}
  className="w-full h-full object-cover"
/>

        </div>
        

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold group-hover:text-red-600 transition">
            {item.name}
          </h3>

          <p className="text-gray-500 text-sm mt-2 line-clamp-2">
            {item.description}
          </p>

          <div className="flex justify-between items-center mt-4">
            <p className="text-red-600 font-bold text-lg">
              ${item.price}
            </p>

            <span className="text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full">
              View
            </span>
          </div>
        </div>
      </div>

      {orderModalOpen && (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="bg-white w-[95%] sm:w-[520px] rounded-3xl shadow-2xl p-8 relative animate-scaleUp">

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
        Choose Order Type
      </h2>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-6 mb-8">

<button
  onClick={() => setSelectedType("delivery")}
  className={`py-6 rounded-2xl text-lg font-semibold transition-all duration-300 
  ${
    selectedType === "delivery"
      ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-xl scale-105"
      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
  }`}
>
  🚗 Delivery
</button>
        <button
          onClick={() => setSelectedType("carryout")}
          className={`py-6 rounded-2xl text-lg font-semibold transition-all duration-300 
          ${
            selectedType === "carryout"
              ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-xl scale-105"
              : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          }`}
        >
          🛍 Carryout
        </button>

      </div>

      {/* Update Button */}
 <button
  onClick={() => {
    if (!selectedType) return;

    localStorage.setItem("orderType", selectedType);

    if (selectedType === "delivery") {
      router.push("/delivery");
    }

    if (selectedType === "carryout") {
      setOrderModalOpen(false);
      setOpen(true); // open item modal
    }
  }}
  disabled={!selectedType}
  className={`w-full py-4 rounded-2xl text-lg font-semibold transition-all duration-300
  ${
    selectedType
      ? "bg-gradient-to-r from-black to-gray-800 text-white hover:opacity-90"
      : "bg-gray-300 text-gray-500 cursor-not-allowed"
  }`}
>
  Continue
</button>

    </div>
  </div>
)}

      {/* MODAL */}
      {open && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 animate-fadeIn"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white w-[92%] sm:w-[450px] rounded-3xl p-6 relative animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-5 text-xl font-bold hover:text-red-600"
            >
              ✕
            </button>

            {/* Image */}
            <div className="relative h-60 w-full mb-5 rounded-2xl overflow-hidden">
              <Image
                src={imageUrl}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Info */}
            <h2 className="font-bold text-2xl">{item.name}</h2>

            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
              {item.description}
            </p>

            <p className="text-red-600 font-bold mt-4 text-xl">
              ${item.price}
            </p>
<button
  onClick={handleAddToCart}
  disabled={loading}
  className="mt-6 w-full bg-gradient-to-r from-red-500 to-red-700 hover:opacity-90 transition text-white py-3 rounded-full font-semibold shadow-lg disabled:opacity-50"
>
  {loading ? "Adding..." : "Add to Cart"}
</button>
          
          </div>
        </div>
      )}
    </>
  );
}
