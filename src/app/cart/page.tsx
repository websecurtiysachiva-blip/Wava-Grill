
"use client";

import { CartProvider } from "@/src/context/CartContext";
import CartPageContent from "./CartPageContent";

export default function CartPage() {
  return (
    <CartProvider>
      <CartPageContent />
    </CartProvider>
  );
}