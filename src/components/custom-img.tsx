"use client"
import Image from 'next/image'
import React, { useState } from 'react'



const CustomImg = (props: { src: string; alt: string }) => {
    const [hasError, setHasError] = useState<boolean>(false)

    return (
        <Image
            quality={20}
            src={hasError ? '/image-placeholder.svg' : props?.src}
            alt={props?.alt}
            fill
            className=' object-cover object-center bg-secondary'
            onError={() => setHasError(true)}
        />
    )
}

export default CustomImg;
