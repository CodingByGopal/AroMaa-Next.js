import { RecipesService } from '@/services/recipes.service';
import { RecipeResponseModel } from '@/data/_model/recipe.response.model';
import SectionUi from './section-ui';

const IndianRecipes = async () => {
    const params = {
        limit: 8,
        select: 'name,image,rating',
        sortBy: 'rating',
        order: 'desc'
    }
    const data: RecipeResponseModel = await RecipesService.getRecipesByTag('indian', params);
    const recipes = data?.recipes;
    console.log(recipes)
    if (!recipes || recipes?.length === 0) return null;
    return (
        <SectionUi recipes={recipes} title='Indian Recipes' />
    )
}

export default IndianRecipes