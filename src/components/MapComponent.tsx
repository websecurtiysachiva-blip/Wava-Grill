"use client";

import { useRef, useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// ================================
// REAL OFFICIAL LOCATIONS
// ================================
const locations = [
  {
    id: 1,
    name: "Dallas – Greenville Ave",
    address: "3611 Greenville Ave A, Dallas, TX 75206",
    lat: 32.8460,
    lng: -96.7703,
  },
  {
    id: 2,
    address: "804 W Shore Dr, Richardson, TX 75080",
    lat: 32.9526,
    lng: -96.7097,
    central: true,
  },
  {
    id: 3,
    name: "Denton Branch",
    address: "101 Ave A, Denton, TX 76201",
    lat: 33.2148,
    lng: -97.1331,
  },
];

// ================================
// BRAND LOGO MARKER
// ================================
const customIcon = new L.Icon({
  iconUrl: "/images/ooo.png",
  iconSize: [45, 45],
  iconAnchor: [22, 45],
});

// ================================
// ENABLE ZOOM ONLY WHEN CLICKED
// ================================
function ControlledZoom() {
  const map = useMap();

  useEffect(() => {
    map.scrollWheelZoom.disable();

    const enableZoom = () => map.scrollWheelZoom.enable();
    const disableZoom = () => map.scrollWheelZoom.disable();

    map.on("click", enableZoom);
    map.on("mouseout", disableZoom);

    return () => {
      map.off("click", enableZoom);
      map.off("mouseout", disableZoom);
    };
  }, [map]);

  return null;
}

// ================================
// AUTO FIT ALL LOCATIONS
// ================================
function FitAllLocations() {
  const map = useMap();

  useEffect(() => {
    const bounds = L.latLngBounds(
      locations.map((loc) => [loc.lat, loc.lng])
    );
    map.fitBounds(bounds, { padding: [80, 80] });
  }, [map]);

  return null;
}

export default function LocationsMap() {
  const mapRef = useRef<L.Map | null>(null);
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleLocationClick = (loc: any) => {
    if (!mapRef.current) return;

    setActiveId(loc.id);

    mapRef.current.flyTo([loc.lat, loc.lng], 16, {
      duration: 1.8,
    });
  };

  return (
    <div className="flex flex-col lg:flex-row w-full h-full">

      {/* ================= SIDEBAR ================= */}
      <div className="lg:w-[380px] w-full bg-[#591A13] text-white p-6 space-y-5 overflow-y-auto">

        <h2 className="text-2xl font-bold tracking-wide">
          OUR LOCATIONS
        </h2>

        {locations.map((loc) => (
          <div
            key={loc.id}
            onClick={() => handleLocationClick(loc)}
            className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border
              ${
                activeId === loc.id
                  ? "bg-[#FFC700] text-black border-[#FFC700]"
                  : "bg-white/10 border-white/20 hover:bg-white/20"
              }`}
          >
            <h3 className="font-semibold text-lg">
              {loc.name}
            </h3>

    
          

            <p className="text-sm mt-2 opacity-90">
              {loc.address}
            </p>

            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFC700] underline text-sm mt-2 inline-block"
            >
              Get Directions
            </a>
          </div>
        ))}
      </div>

      {/* ================= MAP ================= */}
      <div className="flex-1 h-[500px] lg:h-full">
        <MapContainer
          zoom={9}
          zoomControl={false}
          className="w-full h-full"
          whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
        >
          <ZoomControl position="bottomright" />
          <ControlledZoom />
          <FitAllLocations />

          {/* Clean Realistic Map Tiles */}
          <TileLayer
            attribution="© OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {locations.map((loc) => (
            <Marker
              key={loc.id}
              position={[loc.lat, loc.lng]}
              icon={customIcon}
            >
              <Popup>
                <div className="bg-[#591A13] text-white p-4 rounded-lg text-center min-w-[200px]">
                  <h3 className="font-bold text-lg text-[#FFC700]">
                    {loc.name}
                  </h3>
                  <p className="text-sm mt-2">
                    {loc.address}
                  </p>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block bg-[#FFC700] text-black px-3 py-1 rounded-md text-sm font-semibold"
                  >
                    GET DIRECTIONS
                  </a>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}