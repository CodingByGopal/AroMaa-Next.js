import React from 'react'
import CustomImg from './custom-img'
import { RecipeModel } from '@/data/_model/recipe.model'
import Link from 'next/link'

const RecipeCard = (props: {
    recipe: RecipeModel
}) => {
    const recipe = props?.recipe;
    const name = recipe?.name?.length > 30 ? `${recipe?.name?.slice(0, 30)}...` : recipe?.name;
    return (
        <Link href={`/recipes/${recipe?.id}`} className="relative  cursor-pointer">
            <div className="w-full h-48 relative [&>img]:hover:scale-110 [&>img]:transition-all [&>img]:duration-500  overflow-hidden rounded-lg ">
                <CustomImg src={recipe?.image} alt={recipe?.name} />
            </div>
            <div className="absolute bottom-0 left-0 bg-background p-2 rounded-tr-lg ">
                <h3 className="text-sm font-semibold">{name}</h3>
            </div>
        </Link>
    )
}

export default RecipeCard