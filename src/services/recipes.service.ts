import { QueryParamsType } from "@/data/_model/query.params.type";
import { BaseService } from "./base.service";

export class RecipesService extends BaseService {


    static getAllRecipes(params?: QueryParamsType) {
        return this.fetchData(this.baseUrl, params);
    }

    static getRecipeById(id: string) {
        return this.fetchData(`${this.baseUrl}/${id}`);
    }

    static searchRecipes(params?: QueryParamsType) {
        return this.fetchData(`${this.baseUrl}/search`, params);
    }

    static getRecipesByTag(tag: string, params?: QueryParamsType) {
        return this.fetchData(`${this.baseUrl}/tag/${tag}`, params);
    }
    static getTags(params?: QueryParamsType) {
        return this.fetchData(`${this.baseUrl}/tags`, params);
    }

    static getRecipesByMealType(mealType: string, params?: QueryParamsType) {
        return this.fetchData(`${this.baseUrl}/meal-type/${mealType}`, params);
    }


}
