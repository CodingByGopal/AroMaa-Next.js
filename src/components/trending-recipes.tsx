import React from 'react'
import SectionTitle from './section-title';
import { RecipesService } from '@/services/recipes.service';
import { RecipeResponseModel } from '@/data/_model/recipe.response.model';
import RecipeCard from './recipe-card';

const TrendingRecipes = async () => {
    const data: RecipeResponseModel = await RecipesService.getAllRecipes();
    const recipes = data?.recipes.slice(0, 8);
    return (
        <section className='sm:py-14 py-8 relative '>
            <div className="container">
                <SectionTitle title='Trending Recipes' />

                <div className="grid grid-cols-4 gap-4">
                    {recipes.map((recipe) => (
                        <React.Fragment key={recipe.id} >
                            <RecipeCard recipe={recipe} />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TrendingRecipes