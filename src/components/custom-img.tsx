"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const CustomImg = (props: { src: string; alt: string }) => {
    const [hasError, setHasError] = useState<boolean>(false)

    return (
        <Image
            src={hasError ? '/image-placeholder.svg' : props?.src}
            alt={props?.alt}
            fill
            className=' object-cover object-center'
            onError={() => setHasError(true)}
        />
    )
}

export default CustomImg;
