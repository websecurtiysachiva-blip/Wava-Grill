"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = {
  id: number;
  name: string;
};

type Props = {
  categories: Category[];
  activeCategory: number | null;
  onCategoryClick: (id: number) => void;
};

export default function SidebarMenu({
  categories,
  activeCategory,
  onCategoryClick,
}: Props) {
  const [open, setOpen] = useState(false);

  const handleClick = (id: number) => {
    onCategoryClick(id);
    setOpen(false); // mobile auto close
  };

  return (
    <>
      {/* MOBILE TOP BUTTON */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setOpen(true)}
          className="bg-red-600 text-white px-5 py-2 rounded-lg shadow-md text-sm font-medium"
        >
          Menu
        </button>
      </div>

      {/* DESKTOP SIDEBAR */}
      <aside className="hidden md:block w-72 h-screen fixed top-28 left-0 bg-white border-r border-gray-200 px-8 py-12 overflow-y-auto">
        <SidebarContent
          categories={categories}
          activeCategory={activeCategory}
          onCategoryClick={handleClick}
        />
      </aside>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black z-40 md:hidden"
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="hidden md:block w-72 fixed top-28 left-0 h-[calc(100vh-112px)] bg-white border-r border-gray-200 px-8 py-10 overflow-y-auto"
            >
              <SidebarContent
                categories={categories}
                activeCategory={activeCategory}
                onCategoryClick={handleClick}
              />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function SidebarContent({
  categories,
  activeCategory,
  onCategoryClick,
}: Props) {
  return (
    <>
      {/* Title */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
          Our Menu
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          Browse categories
        </p>
      </div>

      {/* Category List */}
      <nav className="space-y-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => onCategoryClick(cat.id)}
              className={`relative w-full text-left px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300
                ${
                  isActive
                    ? "bg-red-50 text-red-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
            >
              {isActive && (
                <span className="absolute left-0 top-0 h-full w-1 bg-red-600 rounded-r-full"></span>
              )}
              {cat.name}
            </button>
          );
        })}
      </nav>
    </>
  );
}