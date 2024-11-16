import { buttonVariants } from "./ui/button";
import Image from "next/image";
import hero from "../../public/images/hero.jpg";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


const Hero = () => {
    return (
        <section className=" sm:py-14 py-6 relative  bg-black  bg-opacity-10">
            <Image priority placeholder="blur" fill src={hero} alt="hero" className=" object-cover   object-center -z-10" />
            <div className="container">

                <div className="  bg-background sm:rounded-[3.5rem] rounded-[2rem]  sm:px-10 sm:py-20 p-6 ">
                    <div className=" sm:text-center text-balance  sm:max-w-[700px] mx-auto">
                        <h1 className=" font-bold text-foreground sm:text-5xl text-3xl mb-4  ">Discover Delicious <span className="text-primary">Recipes</span> to Savor Every Bite</h1>
                        <p className=" text-base text-foreground/70 mb-8 ">Find inspiration for every meal with recipes that bring flavors to life.

                        </p>
                        <div className=" flex sm:flex-row flex-col sm:items-center gap-4 justify-center">
                            <Link href="/recipes" className={buttonVariants({ variant: 'default', })}>
                                Get Cooking
                                <ArrowRight />
                            </Link>

                            <Link href="/#trending" className={buttonVariants({ variant: 'secondary' })}>
                                View More
                            </Link>


                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero