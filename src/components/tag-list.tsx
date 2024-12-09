import RecipesService from "@/services/recipes.service"
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import SectionTitle from "./section-title";

const TagList = async () => {
    const data: string[] = await RecipesService.getTags();

    if (!data || data?.length === 0) return null;

    return (
        <section className="md:pt-14 pt-8">
            <div className="container">
                <div className=' mb-8'>
                    <SectionTitle title='Want More?' />
                </div>
                <div className=" flex flex-wrap items-center gap-2">
                    {data?.map(tag => <Link
                        prefetch={false}
                        className={buttonVariants({ variant: "secondary", size: "sm", className: "text-foreground/80" })}
                        href={`/tag/${tag}`} key={tag}>
                        {tag}
                    </Link>)}


                </div>

            </div>
        </section>
    )
}

export default TagList