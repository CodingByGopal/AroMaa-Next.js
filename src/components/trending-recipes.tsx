import React from 'react'
import { RecipesService } from '@/services/recipes.service';
import { RecipeResponseModel } from '@/data/_model/recipe.response.model';
import SectionUi from './section-ui';

const TrendingRecipes = async () => {
    const params = {
        limit: 8,
        skip: 25,
        sortBy: 'rating',
        order: 'desc',
        select: 'name,image,rating',

    }
    const data: RecipeResponseModel = await RecipesService.getAllRecipes(params);
    const recipes = data?.recipes;
    if (!recipes || recipes?.length === 0) return null;
    return (
        <SectionUi recipes={recipes} title='Trending' />
    )
}

export default TrendingRecipes