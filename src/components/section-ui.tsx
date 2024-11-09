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

                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
                    {props?.recipes?.map((recipe) => (
                        <React.Fragment key={recipe.id} >
                            <RecipeCard recipe={recipe} />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SectionUi