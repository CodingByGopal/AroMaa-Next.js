"use client"
import { UtensilsCrossed } from 'lucide-react'
import React from 'react'
import { Button, } from './ui/button'
import { useRouter } from 'next/navigation'

const NoData = (props: {
    message: string
}) => {
    const router = useRouter()
    const onClickBack = () => {
        router.back()
    }
    return (
        <div className='no-data'>
            <div className=' mb-3 md:w-40 md:h-40 w-32 h-32 bg-inherit  border-2 border-foreground flex-none rounded-full overflow-hidden flex items-center justify-center '>

                <UtensilsCrossed strokeWidth={1} className=' md:w-24 md:h-24 w-16 h-16' />
            </div>
            <p className=' text-lg mb-8 '>{props?.message}</p>
            <Button onClick={onClickBack}> Retrun</Button>


        </div>
    )
}

export default NoData