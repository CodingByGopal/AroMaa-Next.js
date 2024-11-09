"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const CustomImg = (props: { src: string; alt: string }) => {
    const [hasError, setHasError] = useState<boolean>(false)

    return (
        <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={hasError ? '/image-placeholder.svg' : props?.src}
            alt={props?.alt}
            fill
            className=' object-cover object-center'
            onError={() => setHasError(true)}
        />
    )
}

export default CustomImg;
