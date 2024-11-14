import { RecipesService } from '@/services/recipes.service'
import React from 'react'
import { RecipeModel } from '@/data/_model/recipe.model'
import CustomImg from '@/components/custom-img'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
type Params = Promise<{ id: string }>
const RecipeDetails = async (props: {
    params: Params
}) => {
    const params = await props?.params;
    const data: RecipeModel = await RecipesService.getRecipeById(params?.id);
    console.log(data)
    return (
        <section className=' md:pt-14  pt-8'>
            <div className=' container '>
                <div className="grid md:grid-cols-12 gap-8">
                    <div className="col-span-4 h-full">
                        <div className='sticky top-28 w-full   rounded-lg  overflow-hidden  aspect-square '>
                            <CustomImg src={data?.image} alt={`Image of ${data?.name}`} />

                        </div>
                    </div>

                    <div className=' col-span-8'>
                        <h1 className=' left-line text-4xl pl-4 leading-none '>{data?.name}</h1>
                        {(data?.tags && data?.tags?.length > 0) ?
                            <div className=' flex flex-wrap gap-2  mt-6 items-center'>
                                {data?.tags?.map(tag => <Link
                                    className={`${buttonVariants({ variant: "secondary", size: "sm" })} `}
                                    href={`/categories/${tag}`} key={tag}>
                                    {tag}
                                </Link>)}

                            </div> :
                            null}

                    </div>
                </div>
            </div>

        </section>
    )
}

export default RecipeDetails