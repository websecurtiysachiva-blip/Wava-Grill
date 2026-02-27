const BASE_URL = "http://localhost:5000/api";

export const fetchCategories = async () => {
  const res = await fetch(`${BASE_URL}/categories`);
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
};

export const fetchMenuByCategory = async (categoryId: number) => {
  const res = await fetch(`${BASE_URL}/menu/category/${categoryId}`);
  if (!res.ok) throw new Error("Failed to fetch menu items");
  return res.json();
};
