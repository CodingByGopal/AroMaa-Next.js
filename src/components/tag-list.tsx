import { RecipesService } from "@/services/recipes.service"
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import SectionTitle from "./section-title";
import { MoveRight } from "lucide-react";
const TagList = async () => {
    const tagsArray: string[] = await RecipesService.getTags();
    const data = tagsArray.slice(0, 20);
    return (
        <section className="md:pt-14 pt-8">
            <div className="container">
                <div className=' mb-8'>
                    <SectionTitle title='Want More?' />
                </div>
                <div className=" flex flex-wrap gap-2">
                    {data.map(tag => <Link
                        className={`${buttonVariants({ variant: "secondary", })} hover:!bg-primary hover:text-white hover:border-primary `}
                        href={`/categories/${tag}`} key={tag}>
                        {tag}
                    </Link>)}

                    <Link
                        className={`${buttonVariants({ variant: "default", })} `}
                        href={`/categories`} >
                        View All <MoveRight size={16} />
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default TagList