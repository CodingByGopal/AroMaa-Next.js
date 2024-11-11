import { CustomSelect } from '@/components/custom-select';
import NoData from '@/components/no-data';
import Pagination from '@/components/pagination';
import RecipeCard from '@/components/recipe-card';
import SectionTitle from '@/components/section-title';
import { OrderEnum } from '@/data/_enums/order.enum';
import { RecipeIdEnum } from '@/data/_enums/recipe.id.enums';
import { RecipeKeyEnum } from '@/data/_enums/recipe.key.enum';
import { RecipeResponseModel } from '@/data/_model/recipe.response.model';
import { RecipesService } from '@/services/recipes.service'
import React from 'react'


type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>
const recipeFilters = [
    {
        id: RecipeIdEnum.NAME_A_Z,
        label: "Name - A to Z",
        key: RecipeKeyEnum.NAME,
        value: OrderEnum.ASC

    },
    {
        id: RecipeIdEnum.NAME_Z_A,
        label: "Name - Z to A",
        key: RecipeKeyEnum.NAME,
        value: OrderEnum.DESC

    },
    {
        id: RecipeIdEnum.LESS_CALORIES,
        label: "Less Calories",
        key: RecipeKeyEnum.CALORIES_PER_SERVING,
        value: OrderEnum.ASC

    },
    {
        id: RecipeIdEnum.MORE_CALORIES,
        label: "More Calories",
        key: RecipeKeyEnum.CALORIES_PER_SERVING,
        value: OrderEnum.DESC

    },
    {
        id: RecipeIdEnum.SHORTER_COOK_TIME,
        label: "Shorter Cooking Time",
        key: RecipeKeyEnum.COOK_TIME_MINUTES,
        value: OrderEnum.ASC

    },
    {
        id: RecipeIdEnum.LONGER_COOK_TIME,
        label: "Longer Cooking Time",
        key: RecipeKeyEnum.COOK_TIME_MINUTES,
        value: OrderEnum.DESC

    },


]
const Recipes = async (props: {
    searchParams: SearchParams
}) => {

    const searchParams = await props?.searchParams;
    const pageInUrl = searchParams?.page;
    const pageNumber = pageInUrl ? Number(pageInUrl) : 0;
    const isGreaterThanZero = pageNumber > 0;
    const itemsPerPage = 12;
    const sortBy = recipeFilters?.find(filter => filter?.id === searchParams?.sortBy)?.key;
    const order = recipeFilters?.find(filter => filter?.id === searchParams?.sortBy)?.value;

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
        sortBy,
        order
    }

    if (!obj.sortBy || !obj.order) {
        delete obj.sortBy;
        delete obj.order;

    }
    const data: RecipeResponseModel = await RecipesService.getAllRecipes(obj);

    const recipes = data?.recipes ?? [];

    const totalPages = Math.ceil(data?.total / itemsPerPage);

    const currentPage = isGreaterThanZero ? Math.min(pageNumber, totalPages) : 1;



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