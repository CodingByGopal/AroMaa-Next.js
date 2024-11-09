import Hero from "@/components/hero";
import IndianRecipes from "@/components/indian-recipes";
import TrendingRecipes from "@/components/trending-recipes";


export default async function Home() {
  return (
    <>
      <Hero />
      <TrendingRecipes />
      <IndianRecipes />
    </>
  );
}
