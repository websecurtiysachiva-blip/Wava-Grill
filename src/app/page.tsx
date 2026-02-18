import Hero from "../components/Hero";
import WabaPromise from "../components/WabaPromise";
import FoodCategories from "../components/FoodCategories";
import MenuCategories from "../components/MenuCategories";
import TopAnnouncement from "../components/TopAnnouncement";

export default function Home() {
  return (
    <>
      <Hero />
      <WabaPromise />
       <FoodCategories />
         <TopAnnouncement />
         <MenuCategories />
    </>
  );
}
