"use client"
import { RecipeModel } from '@/data/_model/recipe.model'
import React, { useEffect } from 'react'
import { Button } from './ui/button'
import { Minus, Plus } from 'lucide-react'

const RecipeInsights = (props: {
    data: RecipeModel
}) => {
    const [recipe, setRecipe] = React.useState<RecipeModel | null>(null);

    useEffect(() => {
        setRecipe(props?.data)
    }, [props?.data])

    return (
        <div >




            <div>
                <h2 className=' left-line pl-4  mb-4 text-xl font-medium'>Other Info </h2>
                <ul className=' pl-4 list-disc sm:space-y-1 space-y-2 '>

                    <li><span className=' font-semibold'>Prepration Time : </span> {recipe?.prepTimeMinutes ? `${recipe?.prepTimeMinutes} Mins` : '--'}</li>
                    <li><span className=' font-semibold'>Cooking Time : </span> {recipe?.cookTimeMinutes ? `${recipe?.cookTimeMinutes} Mins` : '--'}</li>
                    <li><span className=' font-semibold'>Calories Per Servings : </span> {recipe?.caloriesPerServing ?? "--"}</li>

                    <li><span className=' font-semibold'>Difficulty : </span> {recipe?.difficulty ?? "--"}</li>
                    <li className=' mb-4'><span className=' font-semibold'>Cuisine : </span> {recipe?.cuisine ?? "--"}</li>
                    <li className=' mb-4'><span className=' font-semibold'>Meal Type : </span> {recipe?.mealType ? recipe?.mealType?.join(", ") : "--"}</li>


                </ul>
                <div className='  border-t border-border   w-full  pt-4  mt-4 inline-flex  gap-3 items-center'><span className=' font-semibold'>Servings : </span>
                    <Button size='icon' variant='outline' className='bg-secondary'>
                        <Minus />
                        <span className='sr-only'>Decrease Servings</span>
                    </Button>
                    {recipe?.servings ?? "--"}
                    <Button size='icon' variant='outline' className='bg-secondary'>
                        <Plus />
                        <span className='sr-only'>Increase Servings</span>
                    </Button>
                </div>
            </div>



        </div>

    )
}

export default RecipeInsights