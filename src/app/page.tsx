import FoodByTags from "@/components/food-by-tags";
import Hero from "@/components/hero";
import SkeletonGrid from "@/components/skeleton-grid";
import SkeletonTags from "@/components/skeleton-tags";
import TagList from "@/components/tag-list";
import TrendingRecipes from "@/components/trending-recipes";
import { Suspense } from "react";

const foodTags = ['Italian', 'Indian']

export default async function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<SkeletonGrid numberOfCards={8} />}>
        <TrendingRecipes />
      </Suspense>


      {foodTags?.map((tag) =>

        <Suspense key={tag} fallback={<SkeletonGrid numberOfCards={8} />}>
          <FoodByTags tag={tag} />
        </Suspense>

      )}
      <Suspense fallback={<SkeletonTags numberOfTags={87} />}>
        <TagList />
      </Suspense>


    </>
  );
}
