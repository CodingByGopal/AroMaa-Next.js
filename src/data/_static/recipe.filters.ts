import { OrderEnum } from "../_enums/order.enum";
import { RecipeIdEnum } from "../_enums/recipe.id.enums";
import { RecipeKeyEnum } from "../_enums/recipe.key.enum";

const recipeFilters = [
    {
        id: RecipeIdEnum.NAME_A_Z,
        label: "Name - A to Z",
        key: RecipeKeyEnum.NAME,
        value: OrderEnum.ASC

    },
    {
        id: RecipeIdEnum.NAME_Z_A,
        label: "Name - Z to A",
        key: RecipeKeyEnum.NAME,
        value: OrderEnum.DESC

    },
    {
        id: RecipeIdEnum.LESS_CALORIES,
        label: "Less Calories",
        key: RecipeKeyEnum.CALORIES_PER_SERVING,
        value: OrderEnum.ASC

    },
    {
        id: RecipeIdEnum.MORE_CALORIES,
        label: "More Calories",
        key: RecipeKeyEnum.CALORIES_PER_SERVING,
        value: OrderEnum.DESC

    },
    {
        id: RecipeIdEnum.SHORTER_COOK_TIME,
        label: "Shorter Cooking Time",
        key: RecipeKeyEnum.COOK_TIME_MINUTES,
        value: OrderEnum.ASC

    },
    {
        id: RecipeIdEnum.LONGER_COOK_TIME,
        label: "Longer Cooking Time",
        key: RecipeKeyEnum.COOK_TIME_MINUTES,
        value: OrderEnum.DESC

    },


]

export default recipeFilters;