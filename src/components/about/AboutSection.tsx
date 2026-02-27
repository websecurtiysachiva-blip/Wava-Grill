// "use client";

// import { useState } from "react";

// export default function AboutSection() {



//   const reviews = [
//     {
//       name: "John Smith",
//       text: "Best halal Mediterranean food in town! Delivery was fast and food was fresh."
//     },
//     {
//       name: "Sara Khan",
//       text: "Loved the chicken platter and white sauce. Highly recommend!"
//     // },
//     {
//       name: "Michael Lee",
//       text: "Amazing service and authentic taste. Will order again!"
//     }
//   ];

//   const [index, setIndex] = useState(0);

//   const nextReview = () => {
//     setIndex((prev) => (prev + 1) % reviews.length);
//   };

//   const prevReview = () => {
//     setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
//   };

//   return (
//     <div className="w-full">

//       {/* ===== MISSION & VISION ===== */}
   
// {/* ================= MISSION & VISION ================= */}
// {/* ================= MISSION SECTION ================= */}
// <section id="mission" className="scroll-mt-32 py-24 px-6 bg-[#7a1e12]">


//   <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

//     {/* LEFT TEXT BOX */}
//     <div className="bg-white p-12 rounded-[40px] shadow-2xl relative">

//       <h2 className="text-4xl font-bold mb-4 text-gray-900">
//         Our Mission
//       </h2>

//       <h4 className="text-lg text-red-600 mb-4 font-medium">
//         Quality • Freshness • Authenticity
//       </h4>

//       <p className="text-gray-600 leading-relaxed">
//         At Wava Grill, our mission is to serve fresh, high-quality halal 
//         Mediterranean meals inspired by authentic New York street food.
//         We focus on responsibly sourced ingredients, trained chefs, and
//         consistent preparation methods to deliver delicious meals every time.
//       </p>

//     </div>


//     {/* RIGHT IMAGE */}
//     <div className="bg-yellow-400 p-6 rounded-[40px] shadow-2xl">

//       <div className="bg-[#6e1b10] p-6 rounded-[30px]">

//         <img
//           src="/images/mission.jpg"
//           className="rounded-2xl w-full h-[350px] object-cover"
//         />

//       </div>

//     </div>

//   </div>

// </section>

// {/* ================= VISION SECTION ================= */}
// <section id="vision" className="py-24 px-6 bg-[#fff7ed]">


//   <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

//     {/* LEFT IMAGE */}
//     <div className="bg-yellow-400 p-6 rounded-[40px] shadow-2xl">

//       <div className="bg-[#6e1b10] p-6 rounded-[30px]">

//         <img
//           src="/images/vision.jpg"
//           className="rounded-2xl w-full h-[350px] object-cover"
//         />

//       </div>

//     </div>


//     {/* RIGHT TEXT */}
//     <div className="bg-white p-12 rounded-[40px] shadow-2xl">

//       <h2 className="text-4xl font-bold mb-4 text-gray-900">
//         Our Vision
//       </h2>

//       <h4 className="text-lg text-red-600 mb-4 font-medium">
//         Growth • Innovation • Customer Trust
//       </h4>

//       <p className="text-gray-600 leading-relaxed">
//         Our vision is to become a leading halal Mediterranean restaurant 
//         in Texas by consistently delivering flavorful meals, maintaining 
//         exceptional service, and expanding our presence while staying 
//         committed to our traditional recipes and customer satisfaction.
//       </p>

//     </div>

//   </div>

// </section>





//       {/* ===== TEAM SECTION ===== */}
//     <section id="team" className="scroll-mt-32 py-24 px-6 bg-white text-center">

//         <h2 className="text-4xl font-bold mb-12">
//           Meet Our Team
//         </h2>

//         <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-10">

//           <div className="p-6 shadow rounded-2xl hover:shadow-xl transition">
//             <img
//               src="/team1.jpg"
//               className="w-full h-[250px] object-cover rounded-xl mb-4"
//             />
//             <h3 className="font-semibold text-lg">Head Chef</h3>
//             <p className="text-gray-500 text-sm">Mediterranean Specialist</p>
//           </div>

//           <div className="p-6 shadow rounded-2xl hover:shadow-xl transition">
//             <img
//               src="/team2.jpg"
//               className="w-full h-[250px] object-cover rounded-xl mb-4"
//             />
//             <h3 className="font-semibold text-lg">Kitchen Manager</h3>
//             <p className="text-gray-500 text-sm">Quality Control Expert</p>
//           </div>

//           <div className="p-6 shadow rounded-2xl hover:shadow-xl transition">
//             <img
//               src="/team3.jpg"
//               className="w-full h-[250px] object-cover rounded-xl mb-4"
//             />
//             <h3 className="font-semibold text-lg">Service Lead</h3>
//             <p className="text-gray-500 text-sm">Customer Support</p>
//           </div>

//         </div>
//       </section>


//       {/* ===== CUSTOMER REVIEW SLIDER ===== */}
//    <section id="contact" className="scroll-mt-32 py-24 px-6 bg-gray-50 text-center">

//         <h2 className="text-4xl font-bold mb-10">
//           What Our Customers Say
//         </h2>

//         <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow">

//           <p className="text-gray-700 mb-4">
//             "{reviews[index].text}"
//           </p>

//           <h4 className="font-semibold">
//             - {reviews[index].name}
//           </h4>

//           <div className="flex justify-center gap-6 mt-6">
//             <button
//               onClick={prevReview}
//               className="bg-red-600 text-white px-4 py-2 rounded-full"
//             >
//               Prev
//             </button>
//             <button
//               onClick={nextReview}
//               className="bg-red-600 text-white px-4 py-2 rounded-full"
//             >
//               Next
//             </button>
//           </div>

//         </div>
//       </section>

//     </div>
//   );
// }
