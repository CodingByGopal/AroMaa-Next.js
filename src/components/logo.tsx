import { Salad, Torus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <Link href='/' className=" flex items-center gap-2.5 cursor-pointer">

            <div className="flex-none md:w-14 md:h-14 w-10 h-10 bg-primary  rounded-full overflow-hidden flex justify-center items-center">
                <Salad className=" text-white md:w-9 md:h-9 h-6 w-6 " />
            </div>

            <p className=" md:text-3xl text-xl font-bold 
         flex items-center">
                Ar<Torus className=" text-primary mt-1 mx-0.5 font-bold" />Maa
            </p>

            <span className=' sr-only'>Aromaa Logo</span>


        </Link>

    )
}

export default Logo