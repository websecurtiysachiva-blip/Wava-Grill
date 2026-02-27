"use client";

import CateringHero from "@/src/components/catering/CateringHero";
import CateringContent from "@/src/components/catering/CateringContent";
import CateringPackages from "@/src/components/catering/CateringPackages";
import CateringFooterCombos from "@/src/components/catering/CateringFooterCombos";
export default function CateringPage() {
  return (
    <>
      <CateringHero />
      <CateringContent />
      <CateringPackages/>
      <CateringFooterCombos/>
    </>
  );
}
