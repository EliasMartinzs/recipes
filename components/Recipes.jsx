import fetchRecipes from "@/utils";
import RecipeCard from "./RecipeCard";

export default async function Recipes() {
  const recipes = await fetchRecipes();

  return (
    <div className="w-full">
      <div className="w-full flex flex-col lg:grid grid-cols-3 px-20 mx-auto gap-5">
        {recipes &&
          recipes.map((recipe) => (
            <RecipeCard
              key={recipe.title || recipe.ingredients}
              recipe={recipe}
            />
          ))}
      </div>
    </div>
  );
}
