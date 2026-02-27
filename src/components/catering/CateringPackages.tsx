"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
const packages = [

  
  {
    title: "Tri Combo Buffet",
    price: "$139.00",
    desc: "Cubes of lamb & beef gyro, chicken gyro, and falafel grilled to perfection with authentic Mediterranean spices.",
    img: "/catering/c1.png",
  },
  {
    title: "Gyro Combo Buffet",
    price: "$129.00",
    desc: "Cubes of lamb, beef gyro & chicken gyro served with specially seasoned rice cooked to perfection.",
    img: "/catering/c2.png",
  },
  {
    title: "Chicken Gyro Buffet",
    price: "$129.00",
    desc: "Marinated chicken gyro cubes grilled to perfection with signature Mediterranean seasoning.",
    img: "/catering/c3.png",
  },
  {
    title: "Lamb & Beef Gyro Buffet",
    price: "$129.00",
    desc: "Lamb & beef gyro cubes grilled to perfection and served with seasoned rice.",
    img: "/catering/c4.png",
  },
];
export default function CateringBrandPremium() {
  const router = useRouter();
  return (
    <section className="w-full">

      {packages.map((item, index) => {
        const isDark = index % 2 === 1;

        return (
          <div
            key={index}
            className={`py-28 px-6 md:px-20 ${
              isDark ? "bg-[#591A13]" : "bg-[#F3ECE7]"
            }`}
          >
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16"
            >
              {/* Image */}
              <div className="relative w-full md:w-1/2 h-[380px] rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                />

                {/* Price Badge */}
                <div className="absolute bottom-6 left-6 bg-[#FFC700] text-black font-bold px-6 py-2 rounded-full shadow-lg">
                  {item.price}
                </div>
              </div>

              {/* Content */}
              <div className="md:w-1/2">

                <h3
                  className={`text-4xl font-bold mb-4 ${
                    isDark ? "text-white" : "text-[#591A13]"
                  }`}
                >
                  {item.title}
                </h3>

                {/* Yellow Divider */}
                <div className="w-16 h-1 bg-[#FFC700] mb-6"></div>

                <p
                  className={`mb-4 ${
                    isDark ? "text-gray-200" : "text-gray-600"
                  }`}
                >
                  Serves 10
                </p>

                <p
                  className={`leading-relaxed mb-8 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {item.desc}
                </p>

              <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => router.push("/menu")}
  className={`px-8 py-3 rounded-full font-semibold transition ${
    isDark
      ? "bg-[#FFC700] text-black hover:bg-yellow-400"
      : "bg-[#591A13] text-white hover:bg-[#7a1f18]"
  }`}
>
  Order Now
</motion.button>

              </div>
            </motion.div>
          </div>
        );
      })}
    </section>
  );
}