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
                <div className=' dark:bg-secondary/40 bg-secondary border border-secondary md:p-8 p-6  md:rounded-[3.5rem] sm:rounded-[2.5rem] rounded-[2.75rem]  '>
                    <h1 className='md:hidden left-line text-2xl mb-6  pl-4 font-medium leading-none '>{data?.name}</h1>
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
                                    <div className=' md:mt-8 mt-6'>
                                        <div className=' mb-4  flex items-center gap-2'>
                                            <ScrollText />
                                            <h2 className=' text-xl font-medium '>Instructions</h2>
                                        </div>

                                        <ul className=' sm:text-justify pl-4  list-disc sm:space-y-1 space-y-3  text-foreground/80 '>
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