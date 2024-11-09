import Pagination from '@/components/pagination';
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
    const itemsPerPage = 12;
    console.log(searchParams)
    const obj = {
        limit: itemsPerPage,
        skip: (searchParams.p && Number(searchParams.p) > 0 ? (Number(searchParams.p) - 1) * itemsPerPage : 0),
        select: "name,image",

    }
    const data: RecipeResponseModel = await RecipesService.getAllRecipes(obj);

    const recipes = data?.recipes;
    const totalPages = Math.ceil(data?.total / obj?.limit);

    const currentPage = searchParams.p && Number(searchParams.p) > 0 ? Math.min(Number(searchParams.p), totalPages) : 1;


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

                        <Pagination totalSize={data?.total} currentPage={currentPage} totalPages={totalPages} />

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Recipes