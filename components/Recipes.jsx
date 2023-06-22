import { FetchYoutubeSearch } from "@/utils";
import RecipeCard from "./RecipeCard";

export default async function Recipes({ recipes, query }) {
  return (
    <div className="w-full">
      <h3 className="my-5 text-2xl lg:text-4xl flex justify-center font-extralight border-b pb-2">
        Your Recipes About: {query}
      </h3>
      <div className="w-full flex flex-col lg:grid grid-cols-3 px-10 mx-auto gap-2 ">
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
