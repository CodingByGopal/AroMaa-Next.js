import { getUrl } from "@/data/_helpers/_utils";
import { QueryParamsType } from "@/data/_model/query.params.type";


class RecipesService {
    static async getAllRecipes(params: QueryParamsType = {}) {
        const url = getUrl(`${process.env.NEXT_PUBLIC_BASE_URL}`, params)
        const res = await fetch(url)
        return res.json();
    }

    static async getRecipeById(id: number) {
        const url = `${process.env.NEXT_PUBLIC_BASE_URL}/${id}`
        const res = await fetch(url)
        return res.json();
    }

    static async searchRecipes(params: QueryParamsType = {}) {
        const url = getUrl(`${process.env.NEXT_PUBLIC_BASE_URL}/search`, params)
        const res = await fetch(url)
        return res.json();
    }

    static async getRecipesByTag(tag: string, params: QueryParamsType = {}) {
        const url = getUrl(`${process.env.NEXT_PUBLIC_BASE_URL}/tag/${tag}`, params);
        const res = await fetch(url)
        return res.json();
    }

    static async getTags() {
        const url = `${process.env.NEXT_PUBLIC_BASE_URL}/tags`
        const res = await fetch(url)
        return res.json();
    }

}


export default RecipesService;
