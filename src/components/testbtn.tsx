"use client"
import React from 'react'
import { Button } from './ui/button'
import { usePathname, useRouter } from 'next/navigation';

const Testbtn = () => {
    const router = useRouter();
    const pathName = usePathname()
    const handle = () => {
        console.log('clicked');
        router.replace(`${pathName}?test=1`)

    }
    return (
        <Button onClick={handle}>Click</Button>
    )
}

export default Testbtn