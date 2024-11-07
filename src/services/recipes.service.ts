import { BaseService } from "./base.service";

export class RecipesService extends BaseService {

    static getAllRecipes() {
        return this.fetchData(this.baseUrl);
    }

    static getRecipeById(id: number) {
        return this.fetchData(`${this.baseUrl}/${id}`);
    }

    static searchRecipes(query: string) {
        return this.fetchData(`${this.baseUrl}/search?q=${query}`);
    }

    static getRecipesByTag(tag: string) {
        return this.fetchData(`${this.baseUrl}/tag/${tag}`);
    }

    static getRecipesByMealType(mealType: string) {
        return this.fetchData(`${this.baseUrl}/meal-type/${mealType}`);
    }


}
