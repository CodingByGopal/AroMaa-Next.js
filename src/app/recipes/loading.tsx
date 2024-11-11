import { SkeletonCard } from '@/components/skeleton-card'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const Loading = () => {
    return (
        <section className='pt-8'>

            <div className=' container'>
                <Skeleton className="h-6 w-[150px] mb-4" />

                <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
                    {[...Array(12)]?.map((_, index) => <SkeletonCard key={index} />)}

                </div>
            </div>
        </section>
    )
}

export default Loading