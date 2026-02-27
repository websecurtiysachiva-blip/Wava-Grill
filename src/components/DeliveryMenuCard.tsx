"use client";

import { useCart } from "@/src/context/CartContext";

type MenuItem = {
  id: number;
  name: string;
  price: string;
  image: string;
};

type Props = {
  item: MenuItem;
};

export default function DeliveryMenuCard({ item }: Props) {
  const { items, addItem, updateItem } = useCart();

  // Find item in cart
  const cartItem = items.find(
    (i) => Number(i.menu_item_id) === Number(item.id)
  );

  const quantity = cartItem?.quantity || 0;

  return (
    <div className="flex justify-between bg-[#f8f4f1] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">

      {/* LEFT CONTENT */}
      <div className="flex flex-col justify-between flex-1 pr-6">
        <div>
          <h3 className="text-lg font-semibold text-[#3b1d12]">
            {item.name}
          </h3>

          <p className="text-[#8b4513] font-bold mt-2">
            ₹ {item.price}
          </p>
        </div>

        {/* ADD OR QUANTITY */}
        {quantity === 0 ? (
          <button
            onClick={() => addItem(item.id)}
            className="mt-4 w-28 border border-[#8b4513] text-[#8b4513] font-semibold py-2 rounded-lg hover:bg-[#8b4513] hover:text-white transition"
          >
            ADD
          </button>
        ) : (
          <div className="mt-4 flex items-center gap-4 border border-[#8b4513] w-fit px-3 py-1 rounded-lg">

            <button
              onClick={() => updateItem(cartItem!.id, -1)}
              className="w-8 h-8 flex items-center justify-center text-[#8b4513] font-bold hover:bg-[#8b4513] hover:text-white rounded-md transition"
            >
              -
            </button>

            <span className="font-semibold text-[#3b1d12] w-6 text-center">
              {quantity}
            </span>

            <button
              onClick={() => updateItem(cartItem!.id, 1)}
              className="w-8 h-8 flex items-center justify-center text-[#8b4513] font-bold hover:bg-[#8b4513] hover:text-white rounded-md transition"
            >
              +
            </button>

          </div>
        )}
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative w-32 h-24 rounded-xl overflow-hidden">
        <img
          src={`http://localhost:5000${item.image}`}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
}