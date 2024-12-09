import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
    return (
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

                    <h1 className=' text-lg font-semibold'>Not Found</h1>

                    <p className=' text-sm text-foreground/80  mb-4'>Could not find requested resource</p>
                    <Link
                        prefetch={false}
                        className={buttonVariants({ variant: "default" })}
                        href="/">
                        Return Home
                    </Link>
                </div>

            </div>

        </section>

    )
}