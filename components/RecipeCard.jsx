"use client";

import Link from "next/link";
import { useDispatch } from "react-redux";
import { recipeAdd } from "@/store/recipes/recipeSlice";

export default function RecipeCard({ recipe }) {
  const src = "https://www.youtube.com/embed/7mfKaXOHp5g";

  const dispatch = useDispatch();

  const recipePage = () => dispatch(recipeAdd(recipe));

  return (
    <div
      className=" p-5 flex flex-col items-center justify-center "
      key={recipe.title}
    >
      <iframe
        width="360"
        height="215"
        src={src}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        className="rounded-xl mb-5"
      />
      <h2>{recipe.title}</h2>
      <Link href="/recipe" onClick={recipePage}>
        More Details
      </Link>
    </div>
  );
}
