import { BaseService } from "./base.service";

export class RecipesService extends BaseService {


    static async getAllRecipes() {
        try {
            const response = await fetch(this.baseUrl, this.revalidateConfig);
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData?.message || 'Failed to fetch recipes');
            }
            return response.json();
        } catch (error) {
            console.error('Error fetching all recipes:', error);
            throw error;
        }
    }

    static async getRecipeById(id: number) {
        try {
            const response = await fetch(`${this.baseUrl}/${id}`);
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData?.message || 'Failed to fetch recipe');
            }
            return response.json();
        } catch (error) {
            console.error(`Error fetching recipe with ID ${id}:`, error);
            throw error;
        }
    }

    static async searchRecipes(query: string) {
        try {
            const response = await fetch(`${this.baseUrl}/search?q=${query}`);
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData?.message || 'Failed to search recipes');
            }
            return response.json();
        } catch (error) {
            console.error('Error searching recipes:', error);
            throw error;
        }
    }

    static async getRecipesByTag(tag: string) {
        try {
            const response = await fetch(`${this.baseUrl}/tag/${tag}`);
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData?.message || 'Failed to fetch recipes by tag');
            }
            return response.json();
        } catch (error) {
            console.error(`Error fetching recipes by tag ${tag}:`, error);
            throw error;
        }
    }

    static async getRecipesByMealType(mealType: string) {
        try {
            const response = await fetch(`${this.baseUrl}/meal-type/${mealType}`);
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData?.message || 'Failed to fetch recipes by meal type');
            }
            return response.json();
        } catch (error) {
            console.error(`Error fetching recipes for meal type ${mealType}:`, error);
            throw error;
        }
    }
}
