"use client";

import { useEffect, useState } from "react";
import { fetchCategories, fetchMenuByCategory } from "@/src/services/api";
import DeliveryMenuCard from "@/src/components/DeliveryMenuCard";
import { MenuItem } from "@/src/types/menu";
import { CartProvider } from "@/src/context/CartContext";
import BottomCartBar from "@/src/components/BottomCartBar";
type Category = {
  id: number;
  name: string;
};

function DeliveryMenuContent() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [items, setItems] = useState<Record<number, MenuItem[]>>({});

  useEffect(() => {
    const loadData = async () => {
      const catData = await fetchCategories();
      setCategories(catData);

      const allItems: Record<number, MenuItem[]> = {};

      for (let cat of catData) {
        const data = await fetchMenuByCategory(cat.id);
        allItems[cat.id] = data;
      }

      setItems(allItems);
    };

    loadData();
  }, []);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#1c0f08] via-[#2a140c] to-[#3b1d12]">

      {/* LEFT - MENU */}
 <div className="flex-1 p-10">

        <h1 className="text-4xl font-bold mb-12 text-white">
          Order For Delivery
        </h1>

        {categories.map((cat) => (
          <section key={cat.id} className="mb-16">

            <h2 className="text-2xl font-semibold mb-8 text-[#f5b78c]">
              {cat.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {items[cat.id]?.map((item) => (
                <DeliveryMenuCard key={item.id} item={item} />
              ))}
            </div>

          </section>
        ))}

      </div>
    </div>
  );
}

export default function DeliveryMenuPage() {
  return (
    <CartProvider>
      <DeliveryMenuContent />
       <BottomCartBar />
    </CartProvider>
  );
}