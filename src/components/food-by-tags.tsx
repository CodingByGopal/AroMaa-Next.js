import { RecipesService } from '@/services/recipes.service';
import { RecipeResponseModel } from '@/data/_model/recipe.response.model';
import SectionUi from './section-ui';

const FoodByTags = async (props: {
    tag: string,

}) => {
    const params = {
        limit: 8,
        select: 'name,image,rating',
        sortBy: 'rating',
        order: 'desc'
    }
    const data: RecipeResponseModel = await RecipesService.getRecipesByTag(props?.tag, params);
    const recipes = data?.recipes;
    if (!recipes || recipes?.length === 0) return null;
    return (
        <SectionUi recipes={recipes} title={props?.tag} />
    )
}

export default FoodByTags