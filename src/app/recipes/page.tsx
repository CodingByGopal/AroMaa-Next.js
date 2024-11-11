import { CustomSelect } from '@/components/custom-select';
import RecipeUi from '@/components/recipe-ui';
import SearchInput from '@/components/search-input';
import SectionTitle from '@/components/section-title';
import SkeletonRecipes from '@/components/skeleton-recipes';
import { buttonVariants } from '@/components/ui/button';
import { SearchParamsType } from '@/data/_model/searchparams.type';
import recipeFilters from '@/data/_static/recipe.filters';
import Link from 'next/link';
import React, { Suspense } from 'react'


const Recipes = async (props: {
    searchParams: SearchParamsType
}) => {

    const searchParams = await props?.searchParams;
    const selectedOption = recipeFilters.filter(option => option?.id === searchParams?.sortBy)[0];
    const defaultValue = searchParams?.q ? searchParams?.q.toString() : undefined;
    return (
        <section className='pt-8  '>
            <div className="container">
                <div className=' mb-8 flex gap-4 sm:flex-row flex-col justify-between sm:items-center'>
                    <SectionTitle title='Recipes' />

                    <div className=' flex gap-4 items-center'>
                        <SearchInput defaultValue={defaultValue} />
                        <div className=' sm:min-w-36'>
                            <CustomSelect
                                defaultValue={selectedOption?.id}
                                placeholder='Sort By'
                                options={recipeFilters} />
                        </div>
                        <Link className={`  !p-0 ${buttonVariants({ variant: "link", })}`} href='/recipes'>Reset</Link>
                    </div>


                </div>

                <Suspense key={JSON.stringify(searchParams)} fallback={<SkeletonRecipes numberOfCards={12} />}>
                    <RecipeUi searchParams={searchParams} />
                </Suspense>


            </div>
        </section>
    )
}



export default Recipes;


