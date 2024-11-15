import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const RecipeLoading = () => {
    return (
        <section className=' pt-8'>
            <div className='container'>
                <div className='mb-6'>
                    <Skeleton className=" dark:bg-secondary bg-background h-6 w-[200px] mb-4 md:hidden" />
                    <div className="grid md:grid-cols-12 gap-6">
                        <div className="md:col-span-4">
                            <div className='relative md:rounded-3xl lg:h-full sm:rounded-2xl rounded-xl lg:aspect-auto md:aspect-square aspect-video     overflow-hidden'>
                                <Skeleton className=" bg-secondary  h-full w-full" />
                            </div>
                        </div>

                        <div className='md:col-span-8 recipe-card'>
                            <Skeleton className=" dark:bg-secondary bg-background h-8 md:w-[250px] w-full mb-4" />
                            <Skeleton className=" dark:bg-secondary bg-background h-4 w-[200px] mb-4" />
                            <div className='mt-6'>
                                <Skeleton className=" dark:bg-secondary bg-background h-4 w-full mb-2" />
                                <Skeleton className=" dark:bg-secondary bg-background h-4 w-full mb-2" />
                                <Skeleton className=" dark:bg-secondary bg-background h-4 w-full mb-2" />
                                <Skeleton className=" dark:bg-secondary bg-background h-4 w-full mb-2" />
                                <Skeleton className=" dark:bg-secondary bg-background h-4 w-full mb-2" />
                                <Skeleton className=" dark:bg-secondary bg-background h-4 w-full mb-2" />
                                <Skeleton className=" dark:bg-secondary bg-background h-4 w-full mb-2" />
                                <Skeleton className=" dark:bg-secondary bg-background h-4 w-full mb-2" />
                                <Skeleton className=" dark:bg-secondary bg-background h-4 w-full mb-2" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='grid md:grid-cols-2 gap-6'>
                    <div className='recipe-card'>
                        <Skeleton className=" dark:bg-secondary bg-background h-8 md:w-[250px] w-full mb-4" />
                        <Skeleton className=" dark:bg-secondary bg-background h-4 w-[200px] mb-4" />
                        <div className='mt-6'>
                            <Skeleton className=" dark:bg-secondary bg-background h-4 w-full mb-2" />
                            <Skeleton className=" dark:bg-secondary bg-background h-4 w-full mb-2" />
                            <Skeleton className=" dark:bg-secondary bg-background h-4 w-full mb-2" />
                            <Skeleton className=" dark:bg-secondary bg-background h-4 w-full mb-2" />
                            <Skeleton className=" dark:bg-secondary bg-background h-4 w-full mb-2" />
                            <Skeleton className=" dark:bg-secondary bg-background h-4 w-full mb-2" />
                            <Skeleton className=" dark:bg-secondary bg-background h-4 w-full mb-2" />
                            <Skeleton className=" dark:bg-secondary bg-background h-4 w-full mb-2" />
                            <Skeleton className=" dark:bg-secondary bg-background h-4 w-full mb-2" />
                        </div>
                    </div>

                    <div className='recipe-card'>

                        <Skeleton className=" dark:bg-secondary bg-background h-8 md:w-[250px] w-full mb-4" />
                        <Skeleton className=" dark:bg-secondary bg-background h-4 w-[200px] mb-4" />
                        <div className='mt-6'>
                            <Skeleton className=" dark:bg-secondary bg-background h-4 w-full mb-2" />
                            <Skeleton className=" dark:bg-secondary bg-background h-4 w-full mb-2" />
                            <Skeleton className=" dark:bg-secondary bg-background h-4 w-full mb-2" />
                            <Skeleton className=" dark:bg-secondary bg-background h-4 w-full mb-2" />
                            <Skeleton className=" dark:bg-secondary bg-background h-4 w-full mb-2" />
                            <Skeleton className=" dark:bg-secondary bg-background h-4 w-full mb-2" />
                            <Skeleton className=" dark:bg-secondary bg-background h-4 w-full mb-2" />
                            <Skeleton className=" dark:bg-secondary bg-background h-4 w-full mb-2" />
                            <Skeleton className=" dark:bg-secondary bg-background h-4 w-full mb-2" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RecipeLoading