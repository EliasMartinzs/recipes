"use client";

import Link from "next/link";
import { useDispatch } from "react-redux";
import {
  favoritesAdd,
  recipeAdd,
  favoritesRemove,
} from "@/store/recipes/recipeSlice";
import { AiOutlineHeart, AiOutlineMinus } from "react-icons/ai";

export default function RecipeCard({ recipe }) {
  const src = "https://www.youtube.com/embed/7mfKaXOHp5g";

  const dispatch = useDispatch();

  const recipePage = () => dispatch(recipeAdd(recipe));
  const addFavorites = () => dispatch(favoritesAdd(recipe));
  const removeFavorites = () => dispatch(favoritesRemove(recipe));

  return (
    <div
      className="flex flex-col items-center justify-center border-b p-10"
      key={recipe.title}
    >
      <iframe
        src={src}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        className="rounded-xl mb-5 w-96 h-64"
      />
      <h2 className="text-xl font-extralight border-b">{recipe.title}</h2>
      <div className="w-1/2 flex items-center justify-between">
        <Link
          href="/recipe"
          onClick={recipePage}
          className="bg-slate-600 p-3 rounded-full text-white mt-3 transition-colors hover:bg-slate-300 hover:text-black shadow-xl"
        >
          More Details
        </Link>
        <button className="flex items-center" onClick={addFavorites}>
          <AiOutlineHeart className="text-3xl hover:text-red-600" />
        </button>
        <button className="flex items-center" onClick={removeFavorites}>
          <AiOutlineMinus className="text-3xl hover:text-red-600" />
        </button>
      </div>
    </div>
  );
}
