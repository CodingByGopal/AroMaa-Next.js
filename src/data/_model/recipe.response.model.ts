import { RecipeModel } from "./recipe.model";

export interface RecipeResponseModel {
    recipes: RecipeModel[];
    total: number;
    skip: number;
    limit: number;
}