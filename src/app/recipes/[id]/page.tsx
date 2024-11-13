import { RecipesService } from '@/services/recipes.service'
import React from 'react'
type Params = Promise<{ id: string }>
const RecipeDetails = async (props: {
    params: Params
}) => {
    const params = await props?.params;
    const data = await RecipesService.getRecipeById(params?.id);
    console.log(data)
    return (
        <section>RecipeDetails</section>
    )
}

export default RecipeDetails