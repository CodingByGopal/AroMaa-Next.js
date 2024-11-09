import Hero from "@/components/hero";
import TrendingRecipes from "@/components/trending-recipes";


export default async function Home() {
  return (
    <>
      <Hero />
      <TrendingRecipes />
    </>
  );
}
