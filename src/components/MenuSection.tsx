export default function MenuSection() {
  return (
    <section className="py-16 px-8 text-center">
      <h3 className="text-3xl font-bold mb-10">
        Popular Dishes
      </h3>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-6 rounded-xl">
          Grilled Chicken Bowl
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          Steak Plate
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          Salmon Veggie Bowl
        </div>
      </div>
    </section>
  );
}
