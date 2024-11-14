import { RecipesService } from '@/services/recipes.service'
import React from 'react'
import { RecipeModel } from '@/data/_model/recipe.model'
import CustomImg from '@/components/custom-img'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
type Params = Promise<{ id: string }>
const breakLinesAt = 7;
const RecipeDetails = async (props: {
    params: Params
}) => {
    const params = await props?.params;
    const data: RecipeModel = await RecipesService.getRecipeById(params?.id);
    const cols = [...Array(Math.ceil(data?.ingredients?.length / breakLinesAt))?.keys()]
    return (
        <section className=' pt-8'>
            <div className=' container '>

                <div className=' recipe-card mb-6 '>
                    <h1 className='md:hidden left-line text-2xl mb-4  pl-4 font-medium leading-none '>{data?.name}</h1>
                    <div className="grid md:grid-cols-12 gap-6 ">
                        <div className="md:col-span-4">
                            <div className='relative md:rounded-3xl sm:rounded-2xl rounded-xl     overflow-hidden  md:aspect-square aspect-video '>
                                <CustomImg src={data?.image} alt={`Image of ${data?.name}`} />

                            </div>
                        </div>

                        <div className=' md:col-span-8'>

                            <>
                                <h1 className='md:block hidden left-line text-3xl   pl-4 font-medium leading-none '>{data?.name}</h1>
                                {(data?.tags && data?.tags?.length > 0) ?
                                    <div className=' flex flex-wrap gap-2  md:mt-6 mt-0  items-center'>
                                        {data?.tags?.map(tag => <Link
                                            className={buttonVariants({ variant: "outline", size: "sm", className: " text-foreground/80 bg-secondary" })}
                                            href={`/categories/${tag}`} key={tag}>
                                            {tag}
                                        </Link>)}

                                    </div> :
                                    null}

                                {(data?.instructions && data?.instructions?.length > 0) ?
                                    <div className='  mt-6'>
                                        <h2 className=' mb-4 text-xl font-medium '>Instructions</h2>

                                        <ul className=' text-balance pl-4  list-disc sm:space-y-1 space-y-2  text-foreground/80 '>
                                            {data?.instructions?.map(instruction => <li key={instruction}>{instruction}</li>)}
                                        </ul>

                                    </div> :
                                    null}
                            </>




                        </div>
                    </div>
                </div>

                <div className=' grid md:grid-cols-2 gap-6'>

                    <div className='recipe-card'>
                        <h2 className=' left-line pl-4  mb-4 text-xl font-medium'>Overview</h2>
                        <ul className=' [&>li>span]:font-semibold [&>li>span]:text-foreground [&>li]:text-foreground/80  pl-4 list-disc sm:space-y-1 space-y-2 '>

                            <li><span >Prepration Time : </span> {data?.prepTimeMinutes ? `${data?.prepTimeMinutes} Mins` : '--'}</li>
                            <li><span >Cooking Time : </span> {data?.cookTimeMinutes ? `${data?.cookTimeMinutes} Mins` : '--'}</li>

                            <li ><span >Cuisine : </span> {data?.cuisine ?? "--"}</li>
                            <li ><span >Meal Type : </span> {data?.mealType ? data?.mealType?.join(", ") : "--"}</li>
                            <li><span >Difficulty : </span> {data?.difficulty ?? "--"}</li>
                            <li><span >Servings : </span> {data?.servings ?? "--"}</li>
                            <li><span >Calories Per Servings : </span> {data?.caloriesPerServing ?? "--"}</li>


                        </ul>

                    </div>

                    <div className='recipe-card'>
                        <h2 className=' left-line pl-4  mb-4 text-xl font-medium'>Ingredients</h2>

                        <div className=' flex  flex-wrap lg:gap-6 md:gap-2 sm:gap-6 gap-2 items-start'>
                            {cols?.map(col => (
                                <ul
                                    key={col}
                                    className=' pl-3 list-disc sm:space-y-1 space-y-2 text-foreground/80'
                                >
                                    {data?.ingredients?.slice(col * breakLinesAt, col * breakLinesAt + breakLinesAt)?.map(ingredient => (
                                        <li key={ingredient}>{ingredient}</li>
                                    ))}
                                </ul>
                            ))}
                        </div>
                    </div>


                </div>

            </div>

        </section >
    )
}

export default RecipeDetails