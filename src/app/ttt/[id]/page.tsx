import RecipesService from '@/services/recipes.service'
import { Metadata } from 'next';
import React from 'react'
type Params = Promise<{ id: string }>


export async function generateMetadata(
    props: {
        params: Params,

    },
): Promise<Metadata> {
    const params = await props?.params;
    const data: { id: string } = await RecipesService.revalidateTetsin2(params?.id)
    return {
        title: data?.id,
        alternates: {
            canonical: `/recipes/${params?.id}`
        }
    }


}

const Tttdeatils = async (props: {
    params: Params
}) => {
    const params = await props?.params;
    const data: { id: string } = await RecipesService.revalidateTetsin2(params?.id)
    return (
        <div>Tttdeatils {data?.id}</div>
    )
}

export default Tttdeatils