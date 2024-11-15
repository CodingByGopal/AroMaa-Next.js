'use client'
import Error from "next/error";

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function GlobalError({
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {

    return (
        <html>
            <body>
                <section className='lg:pt-14 pt-8'>
                    <div className="container">
                        <div className=' flex justify-center items-center flex-col'>
                            <figure className=' mb-5'>
                                <Image

                                    src="/404.svg"
                                    height={32}
                                    width={32}
                                    className=' w-full lg:h-96 h-auto'
                                    alt="404"

                                />
                            </figure>

                            <h1 className=' text-lg font-semibold'>Something went wrong</h1>

                            <p className=' text-sm text-foreground/80 mb-4'>Please try again</p>
                            <Button onClick={() => reset()} >
                                Try again
                            </Button>
                        </div>
                    </div>

                </section>

            </body>
        </html>
    )
}