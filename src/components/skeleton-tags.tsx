import React from 'react'
import { Skeleton } from './ui/skeleton'

const SkeletonTags = (props: {
    numberOfTags: number
}) => {
    return (

        <section className='md:pt-14 pt-8'>

            <div className=' container'>
                <Skeleton className="h-6 w-[150px] mb-8" />

                <div className=" flex flex-wrap gap-2">
                    {[...Array(props?.numberOfTags)]?.map((_, index) => <Skeleton key={index} className="h-10 rounded-[999px]  w-24 " />)}

                </div>
            </div>
        </section>

    )
}

export default SkeletonTags