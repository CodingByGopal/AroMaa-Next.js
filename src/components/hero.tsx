import { Button } from "./ui/button"

const Hero = () => {
    return (
        <section className=" py-10">
            <div className="container">

                <div className=" border border-border  rounded-[3.5rem] p-10 ">
                    <div className="grid grid-cols-12 gap-8">
                        <div className=" col-span-5">
                            <h1 className=" font-bold text-5xl mb-4 ">Discover Delicious Recipes to Savor Every Bite</h1>
                            <p className=" text-base text-foreground/70 mb-8 text-balance">Find inspiration for every meal with recipes that bring flavors to life.

                            </p>

                            <Button>Get Cooking</Button>
                        </div>
                        <div className=" col-span-7 ">
                            right
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero