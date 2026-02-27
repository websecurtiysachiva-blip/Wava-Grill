"use client";

import { createContext, useContext, useEffect, useState } from "react";

type CartItem = {
  id: number;
  menu_item_id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addItem: (menu_item_id: number) => void;
  updateItem: (cart_item_id: number, change: number) => void;
  removeItem: (cart_item_id: number) => void;
  total: number;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: any) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const userId = 1;

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    const res = await fetch(
      `http://localhost:5000/api/cart/${userId}`
    );
    const data = await res.json();
    setItems(data.items || []);
  };

  // 🔥 ADD ITEM (Instant UI + backend sync)
  const addItem = async (menu_item_id: number) => {
    const existing = items.find(
      (i) => i.menu_item_id === menu_item_id
    );

    if (existing) {
      updateItem(existing.id, 1);
      return;
    }

    await fetch("http://localhost:5000/api/cart/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: userId,
        menu_item_id,
        quantity: 1,
      }),
    });

    fetchCart(); // only fetch after insert
  };

  // 🔥 UPDATE ITEM (Instant local update)
  const updateItem = async (cart_item_id: number, change: number) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === cart_item_id
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

    await fetch("http://localhost:5000/api/cart/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart_item_id, change }),
    });
  };

  const removeItem = async (cart_item_id: number) => {
    setItems((prev) =>
      prev.filter((item) => item.id !== cart_item_id)
    );

    await fetch(
      `http://localhost:5000/api/cart/remove/${cart_item_id}`,
      { method: "DELETE" }
    );
  };

  const total = items.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ items, addItem, updateItem, removeItem, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext)!;
};