"use client"
import Image from 'next/image'
import React, { useState } from 'react'



const CustomImg = (props: { src: string; alt: string }) => {
    const [hasError, setHasError] = useState<boolean>(false)

    return (
        <Image
            sizes='(max-width: 640px) 100vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw'
            src={hasError ? '/image-placeholder.svg' : props?.src}
            alt={props?.alt}
            fill
            className=' object-cover object-center bg-secondary'
            onError={() => setHasError(true)}
        />
    )
}

export default CustomImg;
