import React from 'react'
import { SkeletonCard } from './skeleton-card'
import { Skeleton } from './ui/skeleton'

const SkeletonGrid = (props: {
    numberOfCards: number
}) => {
    return (

        <section className='md:pt-14 pt-8'>

            <div className=' container'>
                <Skeleton className="h-6 w-[250px] mb-8" />

                <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
                    {[...Array(props?.numberOfCards)]?.map((_, index) => <SkeletonCard key={index} />)}

                </div>
            </div>
        </section>

    )
}

export default SkeletonGrid