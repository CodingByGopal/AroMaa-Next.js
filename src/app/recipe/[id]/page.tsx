import { RecipesService } from "@/services/recipes.service";

type Params = Promise<{ id: string }>

const Recipe = async (props: {
    params: Params
}) => {
    const params = await props.params;
    const data = await RecipesService.getRecipeById(params.id);


    return (
        <div>Recipe

            {data?.recipe?.name}

        </div>
    )
}

export default Recipe