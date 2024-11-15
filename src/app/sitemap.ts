
import { slugify } from '@/data/_helpers/_utils';
import { RecipeModel } from '@/data/_model/recipe.model';
import { RecipeResponseModel } from '@/data/_model/recipe.response.model';
import RecipesService from '@/services/recipes.service';

import { MetadataRoute } from 'next'


type Sitemap = Array<{
    url: string;
    lastModified?: string | Date;
    changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority?: number;

}>



export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_DOMAIN ?? "";
    const urls = [
        `${baseUrl}`,
        `${baseUrl}/recipes`,

    ]

    const arr: Sitemap = urls?.map(item => {
        return {
            url: item,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        }
    });


    const recipesResponse: RecipeResponseModel = await RecipesService.getAllRecipes({ limit: 0, select: "name" });
    const recipes = recipesResponse.recipes;

    const recipePages = recipes?.map((val: RecipeModel) => {
        const item = {
            url: `${baseUrl}/recipes/${slugify(val?.name)}-${val?.id}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        }
        return item
    })

    const tags: string[] = await RecipesService.getTags();
    const tagPages = tags?.map((val: string) => {
        const item = {
            url: `${baseUrl}/tag/${encodeURIComponent(val)}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        }
        return item
    })



    const sitemapArray: Sitemap = [
        ...arr,
        ...recipePages,
        ...tagPages
    ] as Sitemap;

    return sitemapArray;
}



