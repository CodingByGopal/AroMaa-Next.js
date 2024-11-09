import { RecipesService } from "@/services/recipes.service"
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import SectionTitle from "./section-title";
const TagList = async () => {
    const data: string[] = await RecipesService.getTags();
    return (
        <section className="md:pt-14 pt-8">
            <div className="container">
                <div className=' mb-8'>
                    <SectionTitle title='Want More?' />
                </div>
                <div className=" flex flex-wrap gap-2">
                    {data.map(tag => <Link
                        className={`${buttonVariants({ variant: "secondary", })} hover:bg-primary hover:text-white hover:border-primary `}
                        href={`/tags/${tag}`} key={tag}>
                        {tag}
                    </Link>)}
                </div>

            </div>
        </section>
    )
}

export default TagList