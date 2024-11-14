import { RecipesService } from '@/services/recipes.service'
import React from 'react'
import { RecipeModel } from '@/data/_model/recipe.model'
import CustomImg from '@/components/custom-img'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { ScrollText } from 'lucide-react'
type Params = Promise<{ id: string }>
const RecipeDetails = async (props: {
    params: Params
}) => {
    const params = await props?.params;
    const data: RecipeModel = await RecipesService.getRecipeById(params?.id);
    console.log(data)
    return (
        <section className=' py-8'>
            <div className=' container '>
                <div className=' dark:bg-secondary/40 bg-secondary border border-secondary p-8 rounded-[3.5rem]  '>
                    <div className="grid md:grid-cols-12 gap-6">
                        <div className="col-span-4">
                            <div className='relative rounded-3xl     overflow-hidden  aspect-square '>
                                <CustomImg src={data?.image} alt={`Image of ${data?.name}`} />

                            </div>
                        </div>

                        <div className=' col-span-8'>

                            <>
                                <h1 className=' left-line text-3xl pl-4 leading-none '>{data?.name}</h1>
                                {(data?.tags && data?.tags?.length > 0) ?
                                    <div className=' flex flex-wrap gap-2  mt-6  items-center'>
                                        {data?.tags?.map(tag => <Link
                                            className={`${buttonVariants({ variant: "default", size: "sm" })} `}
                                            href={`/categories/${tag}`} key={tag}>
                                            {tag}
                                        </Link>)}

                                    </div> :
                                    null}

                                {(data?.instructions && data?.instructions?.length > 0) ?
                                    <div className=' mt-8'>
                                        <div className=' mb-4  flex items-center gap-2'>
                                            <ScrollText />
                                            <h2 className=' text-xl font-medium '>Instructions</h2>
                                        </div>

                                        <ul className='  text-balance pl-6  list-disc space-y-2  text-foreground/70  items-center gap-2'>
                                            {data?.instructions?.map(instruction => <li key={instruction}>{instruction}</li>)}
                                        </ul>

                                    </div> :
                                    null}
                            </>




                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default RecipeDetails