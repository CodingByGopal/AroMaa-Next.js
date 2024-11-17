
import RecipeCard from './recipe-card'
import { RecipeModel } from '@/data/_model/recipe.model'
import SectionTitle from './section-title'


const SectionUi = (props: {
    recipes: RecipeModel[],
    title: string
}) => {
    return (
        <section className='md:pt-14 pt-8  '>
            <div className="container">
                <div className=' mb-8'>
                    <SectionTitle title={props?.title} />
                </div>

                <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
                    {props?.recipes?.map((recipe) => (
                        <div key={recipe.id} >
                            <RecipeCard recipe={recipe} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SectionUi