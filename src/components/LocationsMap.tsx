"use client";

import dynamic from "next/dynamic";

// Disable SSR for Leaflet
const Map = dynamic(() => import("./MapComponent"), {
  ssr: false,
});

export default function LocationsMap() {
  return <Map />;
}