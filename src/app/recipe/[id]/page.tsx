import Testbtn from "@/components/testbtn";
import { RecipesService } from "@/services/recipes.service";

type Params = Promise<{ id: string }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>


const Recipe = async (props: {
    params: Params,
    searchParams: SearchParams
}) => {
    const params = await props.params;
    // const searchParams = await props.searchParams;
    const data = await RecipesService.getRecipeById(params.id);


    return (
        <div>Recipe

            {data?.name}

            <Testbtn />

        </div>
    )
}

export default Recipe