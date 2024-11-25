import { baseUrl } from "@/data/_helpers/_constants";
import { getUrl } from "@/data/_helpers/_utils";
import { QueryParamsType } from "@/data/_model/query.params.type";


class RecipesService {
    static async getAllRecipes(params: QueryParamsType = {}) {
        const url = getUrl(`${baseUrl}`, params)
        const res = await fetch(url)
        return res.json();
    }

    static async getRecipeById(id: number) {
        const url = `${baseUrl}/${id}`
        const res = await fetch(url)
        return res.json();
    }

    static async searchRecipes(params: QueryParamsType = {}) {
        const url = getUrl(`${baseUrl}/search`, params)
        const res = await fetch(url)
        return res.json();
    }

    static async getRecipesByTag(tag: string, params: QueryParamsType = {}) {
        const url = getUrl(`${baseUrl}/tag/${tag}`, params);
        const res = await fetch(url)
        return res.json();
    }

    static async getTags() {
        const url = `${baseUrl}/tags`
        const res = await fetch(url)
        return res.json();
    }

}


export default RecipesService;
