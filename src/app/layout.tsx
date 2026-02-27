"use client";
import "leaflet/dist/leaflet.css";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { usePathname } from "next/navigation";
import React from "react";
import { CartProvider } from "@/src/context/CartContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideLayout = ["/login", "/delivery", "/delivery-menu", "/cart", "/checkout"].includes(pathname);

  return (
    <html lang="en">
      <body className="bg-[#591A13] text-black overflow-x-hidden scroll-smooth">

        <CartProvider>

          {!hideLayout && <Navbar />}

          <main className="min-h-screen">
            {children}
          </main>

          {!hideLayout && <Footer />}

        </CartProvider>

      </body>
    </html>
  );
}