import { Salad, Torus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <Link href='/' className=" flex items-center gap-2.5 cursor-pointer">

            <div className=" w-14 h-14 bg-primary  rounded-full overflow-hidden flex justify-center items-center">
                <Salad className=" text-white " width={35} height={35} />
            </div>

            <p className=" text-3xl font-bold 
         flex items-center">
                Ar<Torus className=" mt-1 mx-0.5 font-bold" />Maa
            </p>

            <span className=' sr-only'>Aromaa Logo</span>


        </Link>

    )
}

export default Logo