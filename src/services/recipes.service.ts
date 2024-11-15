import { QueryParamsType } from "@/data/_model/query.params.type";
import BaseService from "./base.service";


class RecipesService extends BaseService {


    static getAllRecipes(params?: QueryParamsType) {
        return this.fetchData(this.baseUrl, params);
    }

    static getRecipeById(id: number) {
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



}


export default RecipesService;
