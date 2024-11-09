import React from 'react'
import RecipeCard from './recipe-card'
import { RecipeModel } from '@/data/_model/recipe.model'

const SectionUi = (props: {
    recipes: RecipeModel[],
    title: string
}) => {
    return (
        <section className='sm:pt-14 pt-8 relative '>
            <div className="container">
                <h2 className='left-line pl-4 text-2xl leading-none font-semibold  mb-8'>{props?.title}</h2>

                <div className="columns-2xs">
                    {props?.recipes?.map((recipe) => (
                        <div className=' mb-5' key={recipe.id} >
                            <RecipeCard recipe={recipe} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SectionUi