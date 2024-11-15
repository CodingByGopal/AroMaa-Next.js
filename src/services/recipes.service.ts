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
    static revalidateTetsing() {
        return this.fetchData("https://672f137f229a881691f1c468.mockapi.io/Tetsing");
    }

    static revalidateTetsin2(id: string) {
        return this.fetchData("https://672f137f229a881691f1c468.mockapi.io/Tetsing/" + id);
    }



}


export default RecipesService;
