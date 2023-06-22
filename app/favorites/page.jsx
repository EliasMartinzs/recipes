"use client";

import { useSelector } from "react-redux";
import { selectFavorites } from "@/store/recipes/recipeSelector";
import RecipeCard from "@/components/RecipeCard";

export default function Favorites() {
  const favorites = useSelector(selectFavorites);

  console.log(favorites);

  return (
    <div className="w-full flex flex-col lg:grid grid-cols-3 px-10 mx-auto gap-2 ">
      {favorites &&
        favorites?.map((fav) => (
          <div key={fav.title} className="flex">
            <RecipeCard recipe={fav} />
          </div>
        ))}
    </div>
  );
}
