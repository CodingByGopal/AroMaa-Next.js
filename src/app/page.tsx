import FoodByTags from "@/components/food-by-tags";
import Hero from "@/components/hero";
import TrendingRecipes from "@/components/trending-recipes";

const foodTags = ['Italian', 'Indian']

export default async function Home() {
  return (
    <>
      <Hero />
      <TrendingRecipes />
      {foodTags?.map((tag) => <FoodByTags key={tag} tag={tag} />)}
    </>
  );
}
