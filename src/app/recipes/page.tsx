import RecipeCard from '@/components/recipe-card';
import SectionTitle from '@/components/section-title';
import { RecipeResponseModel } from '@/data/_model/recipe.response.model';
import { RecipesService } from '@/services/recipes.service'
import React from 'react'
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

const Recipes = async (props: {
    searchParams: SearchParams
}) => {
    const searchParams = await props?.searchParams;
    console.log(searchParams)
    const obj = {
        limit: 12,
        select: "name,image",

    }
    const data: RecipeResponseModel = await RecipesService.getAllRecipes(obj);
    console.log(data)

    const recipes = data?.recipes;
    const totalPages = Math.ceil(data?.total / obj?.limit);
    const currentPage = 1;
    console.log(totalPages, currentPage)
    return (
        <section className='pt-8  '>
            <div className="container">
                <div className=' mb-4'>
                    <SectionTitle title='Recipes' />
                </div>

                <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
                    {recipes?.map((recipe) => (
                        <React.Fragment key={recipe.id} >
                            <RecipeCard recipe={recipe} />
                        </React.Fragment>
                    ))}
                </div>
                <div className=' mt-8 flex justify-end items-end'>
                    <div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Recipes