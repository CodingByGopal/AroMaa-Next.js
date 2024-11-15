import { buttonVariants } from "./ui/button";
import Image from "next/image";
import hero from "../../public/images/hero.jpg";
import { MoveRight } from "lucide-react";
import Link from "next/link";


const Hero = () => {
    return (
        <section className=" sm:py-14 py-8 relative  bg-black  bg-opacity-10">
            <Image priority placeholder="blur" fill src={hero} alt="hero" className=" object-cover   object-center -z-10" />
            <div className="container">

                <div className="  bg-background rounded-[3.5rem]  sm:px-10 sm:py-20 py-10 px-8 ">
                    <div className=" sm:text-center text-balance  sm:max-w-[700px] mx-auto">
                        <h1 className=" font-bold text-foreground sm:text-5xl text-3xl mb-4  ">Discover Delicious <span className="text-primary">Recipes</span> to Savor Every Bite</h1>
                        <p className=" text-base text-foreground/70 mb-8 ">Find inspiration for every meal with recipes that bring flavors to life.

                        </p>
                        <div className=" flex sm:flex-row flex-col sm:items-center gap-3 justify-center">
                            <Link href="/recipes" className={buttonVariants({ variant: 'default' })}>
                                Get Cooking

                                <MoveRight />
                            </Link>

                            <Link href="/#trending" className={buttonVariants({ variant: 'secondary' })}>
                                View More

                                <MoveRight />
                            </Link>


                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero