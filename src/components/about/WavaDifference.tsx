"use client";

export default function WavaDifference() {
  return (
    <section className="w-full bg-[#6b0f0f] py-20 px-6 md:px-16 lg:px-24">

      {/* BIG YELLOW HEADING BOX */}
      <div className="bg-yellow-500 rounded-[40px] py-10 px-8 md:px-16 mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-black">
          The Wava Difference
        </h2>
      </div>

      {/* CARDS GRID */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* CARD 1 */}
        <div className="bg-[#EAEAEA] rounded-[35px] p-10">
          <h3 className="text-2xl font-bold text-[#5a0d0d] mb-4">
            Premium Cuts of Meat, Sourced with Care
          </h3>
          <p className="text-gray-700 text-lg">
            Each cut is hand-selected for ultimate flavor.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-[#EAEAEA] rounded-[35px] p-10">
          <h3 className="text-2xl font-bold text-[#5a0d0d] mb-4">
            Perfectly Cooked Rice, Every Time
          </h3>
          <p className="text-gray-700 text-lg">
            Our rice is prepared to achieve ideal texture.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-[#EAEAEA] rounded-[35px] p-10">
          <h3 className="text-2xl font-bold text-[#5a0d0d] mb-4">
            Skillful Assembly, Personalized for Each Customer
          </h3>
          <p className="text-gray-700 text-lg">
            Every dish is crafted for a unique experience.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="bg-[#EAEAEA] rounded-[35px] p-10">
          <h3 className="text-2xl font-bold text-[#5a0d0d] mb-4">
            Memorable Dining Experience, Created with Passion
          </h3>
          <p className="text-gray-700 text-lg">
            We focus on quality to impress every guest.
          </p>
        </div>

      </div>
    </section>
  );
}