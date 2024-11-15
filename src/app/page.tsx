import FoodByTags from "@/components/food-by-tags";
import Hero from "@/components/hero";
import { RenderedTimeAgo } from "@/components/rendered-time-ago";
import SkeletonGrid from "@/components/skeleton-grid";
import SkeletonTags from "@/components/skeleton-tags";
import TagList from "@/components/tag-list";
import TrendingRecipes from "@/components/trending-recipes";
import { Suspense } from "react";

const foodTags = ['Italian', 'Indian', "Mexican"]

export default async function Home() {
  return (
    <>
      <Hero />
      <RenderedTimeAgo timestamp={Date.now()} />
      <div id="trending">
        <Suspense fallback={<SkeletonGrid numberOfCards={8} />}>
          <TrendingRecipes />
        </Suspense>

      </div>


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
