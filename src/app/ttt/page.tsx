import RecipesService from '@/services/recipes.service'
import Link from 'next/link'
import React from 'react'

const TttPage = async () => {
    const data = await RecipesService.revalidateTetsing()
    return (
        <div className=' flex justify-between items-center gap-3 flex-wrap'>
            <span className=' text-primary'>{data?.length}</span>
            {data?.map((item: {
                id: string
            }) => (
                <Link className=' p-4 bg-red-500' href={`/ttt/${item?.id}`} key={item.id}>{item.id}</Link>
            ))}
        </div>
    )
}

export default TttPage