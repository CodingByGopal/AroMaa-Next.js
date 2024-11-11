import { CustomSelect } from '@/components/custom-select';
import NoData from '@/components/no-data';
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
    const pageInUrl = searchParams?.page;
    const pageNumber = pageInUrl ? Number(pageInUrl) : 0;
    const isGreaterThanZero = pageNumber > 0;
    const itemsPerPage = 12;


    const obj: {
        limit: number;
        skip: number;
        select: string;
        sortBy?: string;
        order?: string;
    } = {
        limit: itemsPerPage,
        skip: (isGreaterThanZero ? (pageNumber - 1) * itemsPerPage : 0),
        select: "name,image",
        sortBy: searchParams?.sortBy as string,
        order: searchParams?.order as string
    }

    if (!obj.sortBy || !obj.order) {
        delete obj.sortBy;
        delete obj.order;

    }
    const data: RecipeResponseModel = await RecipesService.getAllRecipes(obj);

    const recipes = data?.recipes ?? [];

    const totalPages = Math.ceil(data?.total / itemsPerPage);

    const currentPage = isGreaterThanZero ? Math.min(pageNumber, totalPages) : 1;

    const recipeFilters = [
        {
            id: "1",
            key: "name",
            label: "Name - A to Z",
            value: "asc"

        },
        {
            id: "2",
            key: "name",
            label: "Name - Z to A",
            value: "desc"

        },
        {
            id: "3",
            key: "caloriesPerServing",
            label: "Less Calories",
            value: "asc"

        },
        {
            id: "4",
            key: "caloriesPerServing",
            label: "More Calories",
            value: "desc"

        },
        {
            id: "5",
            key: "cookTimeMinutes",
            label: "Shorter Cooking Time",
            value: "asc"

        },
        {
            id: "6",
            key: "cookTimeMinutes",
            label: "Longer Cooking Time",
            value: "desc"

        },


    ]

    return (
        <section className='pt-8  '>
            <div className="container">
                <div className=' mb-4'>
                    <SectionTitle title='Recipes' />
                </div>
                <div className=' grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-4'>
                    <CustomSelect
                        placeholder='Sort By'
                        options={recipeFilters} />

                </div>
                {recipes?.length === 0 ?
                    <NoData message='No Recipes Found' /> :
                    <>
                        <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
                            {recipes?.map((recipe) => (
                                <React.Fragment key={recipe.id} >
                                    <RecipeCard recipe={recipe} />
                                </React.Fragment>
                            ))}
                        </div>
                        <div className=' mt-8'>
                            <Pagination currentPage={currentPage} totalPages={totalPages} />
                        </div>

                    </>
                }


            </div>
        </section>
    )
}

export default Recipes