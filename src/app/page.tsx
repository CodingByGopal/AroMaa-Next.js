import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { RecipesService } from "@/services/recipes.service";

export default async function Home() {
  const data = await RecipesService.getAllRecipes();
  console.log(data);
  return (
    <div>
      Test
      <ThemeToggle />
      <Button>Button</Button>

      {data?.recipes?.map((recipe: {
        id: string;
        name: string;
      }) => {
        return (
          <div className=" text-white" key={recipe.id}>
            <h2>{recipe.name}</h2>
          </div>
        );
      })}
    </div>
  );
}
