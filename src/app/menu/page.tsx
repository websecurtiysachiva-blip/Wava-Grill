"use client";

import { useEffect, useState, useRef } from "react";
import { fetchCategories, fetchMenuByCategory } from "@/src/services/api";
import MenuCard from "@/src/components/MenuCard";
import SidebarMenu from "@/src/components/SidebarMenu";
import { MenuItem } from "@/src/types/menu";

type Category = {
  id: number;
  name: string;
};

export default function MenuPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [items, setItems] = useState<Record<number, MenuItem[]>>({});
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const sectionRefs = useRef<Record<number, HTMLDivElement | null>>({});

  // Fetch Data
  useEffect(() => {
    const loadData = async () => {
      try {
        const catData = await fetchCategories();
        setCategories(catData);

        const allItems: Record<number, MenuItem[]> = {};

        for (let cat of catData) {
          const data = await fetchMenuByCategory(cat.id);
          allItems[cat.id] = data;
        }

        setItems(allItems);

        if (catData.length > 0) {
          setActiveCategory(catData[0].id);
        }
      } catch (err) {
        console.error(err);
      }
    };

    loadData();
  }, []);

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      let current: number | null = null;

      for (let cat of categories) {
        const section = sectionRefs.current[cat.id];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = cat.id;
          }
        }
      }

      if (current !== null) {
        setActiveCategory(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [categories]);

  // Smooth Scroll
  const scrollToCategory = (id: number) => {
    const section = sectionRefs.current[id];
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
<div className="flex bg-gray-50 min-h-screen pt-24">
      {/* SIDEBAR COMPONENT */}
      <SidebarMenu
        categories={categories}
        activeCategory={activeCategory}
        onCategoryClick={scrollToCategory}
      />

      {/* MAIN CONTENT */}
<main className="flex-1 ml-72 px-10 pt-24 pb-8">
        {categories.map((cat) => (
      <section
  key={cat.id}
  ref={(el: HTMLDivElement | null) => {
    sectionRefs.current[cat.id] = el;
  }}
  className="mb-8 scroll-mt-24"
>
 <h2 className="text-3xl font-bold text-gray-900 mb-3">
  {cat.name}
</h2>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {items[cat.id]?.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}