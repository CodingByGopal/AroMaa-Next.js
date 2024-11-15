import { RecipeResponseModel } from "@/data/_model/recipe.response.model";

import NoData from "./no-data";
import Pagination from "./pagination";
import RecipeCard from "./recipe-card";
import React from "react";
import { QueryParamsType } from "@/data/_model/query.params.type";
import recipeFilters from "@/data/_static/recipe.filters";
import { itemsPerPage } from "@/data/_helpers/_utils";
import RecipesService from "@/services/recipes.service";

const RecipesByTagUi = async (props: {
    searchParams: QueryParamsType,
    tag: string,

}) => {
    const tag = props?.tag;
    const searchParams = props?.searchParams;
    const pageInUrl = searchParams?.page;
    const pageNumber = pageInUrl ? Number(pageInUrl) : 0;
    const isGreaterThanZero = pageNumber > 0;

    const selectedOption = recipeFilters.filter(option => option?.id === searchParams?.sortBy)[0];

    const obj: {
        limit: number;
        skip: number;
        select: string;
        sortBy?: string;
        order?: string;
        q?: string;
    } = {
        limit: itemsPerPage,
        skip: (isGreaterThanZero ? (pageNumber - 1) * itemsPerPage : 0),
        select: "name,image",
        sortBy: selectedOption?.key,
        order: selectedOption?.value,
    }

    if (!obj.sortBy || !obj.order) {
        delete obj.sortBy;
        delete obj.order;

    }

    if (!obj.q || obj.q?.trim()?.length === 0) {
        delete obj.q;
    }

    const data: RecipeResponseModel = await RecipesService.getRecipesByTag(tag, obj);
    const recipes = data?.recipes ?? [];
    const totalPages = Math.ceil(data?.total / itemsPerPage);
    const currentPage = isGreaterThanZero ? Math.min(pageNumber, totalPages) : 1;
    return (
        <>
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


        </>
    )
}

export default RecipesByTagUi;