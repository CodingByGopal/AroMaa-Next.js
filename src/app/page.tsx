import FoodByTags from "@/components/food-by-tags";
import Hero from "@/components/hero";
import TrendingRecipes from "@/components/trending-recipes";


export default async function Home() {
  return (
    <>
      <Hero />
      <TrendingRecipes />
      <FoodByTags tag='Indian' title='Indian Recipes' />
      <FoodByTags tag='Italian' title='Italian Recipes' />
      <FoodByTags tag='Main course' title='Main course' />

    </>
  );
}
