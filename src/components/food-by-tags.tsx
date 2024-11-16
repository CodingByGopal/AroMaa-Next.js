
import { RecipeResponseModel } from '@/data/_model/recipe.response.model';
import SectionUi from './section-ui';
import RecipesService from '@/services/recipes.service';
import { RenderedTimeAgo } from './rendered-time-ago';

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
        <div>
            <RenderedTimeAgo timestamp={Date.now()} />
            <SectionUi recipes={recipes} title={props?.tag} />
        </div>

    )
}

export default FoodByTags