import React from 'react'
import { SkeletonCard } from './skeleton-card'

const SkeletonRecipes = (props: {
    numberOfCards: number
}) => {
    return (
        <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
            {[...Array(props?.numberOfCards)]?.map((_, index) => <SkeletonCard key={index} />)}

        </div>
    )
}

export default SkeletonRecipes