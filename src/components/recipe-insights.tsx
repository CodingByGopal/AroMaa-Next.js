"use client"
import { RecipeModel } from '@/data/_model/recipe.model'
import React from 'react'

const RecipeInsights = (props: {
    data: RecipeModel
}) => {
    return (
        <ul className=' pl-4 list-disc sm:space-y-1 space-y-3 text-foreground/80'>
            <li><span className=' font-semibold'>Prepration Time : </span> {props?.data?.prepTimeMinutes ? `${props?.data?.prepTimeMinutes} Mins` : '--'}</li>
            <li><span className=' font-semibold'>Cooking Time : </span> {props?.data?.cookTimeMinutes ? `${props?.data?.cookTimeMinutes} Mins` : '--'}</li>
            <li><span className=' font-semibold'>Difficulty : </span> {props?.data?.difficulty ?? "--"}</li>
            <li><span className=' font-semibold'>Cuisine : </span> {props?.data?.cuisine ?? "--"}</li>
            <li><span className=' font-semibold'>Servings : </span> {props?.data?.servings ?? "--"}</li>
            <li><span className=' font-semibold'>Calories Per Servings : </span> {props?.data?.caloriesPerServing ?? "--"}</li>

        </ul>
    )
}

export default RecipeInsights