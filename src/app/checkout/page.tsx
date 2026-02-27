"use client";

import { CartProvider } from "@/src/context/CartContext";
import CheckoutContent from "./CheckoutContent";

export default function CheckoutPage() {
  return (
    <CartProvider>
      <CheckoutContent />
    </CartProvider>
  );
}