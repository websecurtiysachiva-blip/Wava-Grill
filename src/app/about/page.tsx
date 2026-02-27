import AboutHero from "@/src/components/about/AboutHero";
import OurStory from "@/src/components/about/OurStory";
import FounderSection from "@/src/components/about/FounderSection";
import RevolutionSection from "@/src/components/about/RevolutionSection";
import TestKitchen from "@/src/components/about/TestKitchen";
import EngineeringMindset from "@/src/components/about/EngineeringMindset";
import CrownJewels from "@/src/components/about/CrownJewels";
import TheUnyieldingMission from "@/src/components/about/TheUnyieldingMission";
import LaunchDay from "@/src/components/about/LaunchDay";
import CulturalFusion from "@/src/components/about/CulturalFusion";
import FutureVision from "@/src/components/about/FutureVision";
import WavaDifference from "@/src/components/about/WavaDifference";

import JoinRevolution from "@/src/components/about/JoinRevolution";
export default function AboutPage() {
  return (
    <div className="w-full bg-[#6b0f0f]">
      <AboutHero />
        <OurStory />
      <FounderSection />
      <RevolutionSection />
      <TestKitchen />
      <EngineeringMindset />
      <CrownJewels />
      <TheUnyieldingMission />
      <LaunchDay />
      <CulturalFusion />
      <FutureVision />
      <WavaDifference />
    
      <JoinRevolution/>
    </div>
  );
}