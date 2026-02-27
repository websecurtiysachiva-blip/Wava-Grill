import LocationsMap from "@/src/components/LocationsMap";

export default function LocationsPage() {
  return (
    <div className="w-full overflow-x-hidden bg-[#591A13]">

      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen flex items-center justify-center pt-[100px]">

        {/* Background Image */}
        <img
          src="/images/location.png"
          alt="Wava Grill Locations"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Brand Maroon Overlay */}
        <div className="absolute inset-0 bg-[#591A13]/80" />

        {/* Center Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold tracking-[8px]">
            LOCATIONS
          </h1>

          <p className="mt-6 text-[#FFC700] text-lg md:text-xl tracking-wider">
            FIND YOUR NEAREST WAVA GRILL
          </p>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="w-full h-[700px] md:h-[750px]">
        <LocationsMap />
      </section>

    </div>
  );
}