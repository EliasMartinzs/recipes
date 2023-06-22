"use client";

import { useSelector } from "react-redux";
import { Rating } from "@mui/material";

import { selectRecipeItems } from "@/store/recipes/recipeSelector";

export default function Recipe() {
  const items = useSelector(selectRecipeItems);
  const src = "https://www.youtube.com/embed/7mfKaXOHp5g";

  const recipe = [];
  recipe.push(items);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full mb-5">
        {recipe?.map((rec) => (
          <h1
            className="flex items-center justify-center text-3xl font-black text-gray-700"
            key={rec.title}
          >
            {rec.title}
          </h1>
        ))}
        <div className="flex items-center justify-evenly mt-5 bg-slate-100 py-2">
          <span className="flex">
            <Rating value={4.5} readOnly />{" "}
            <span className="ml-2">
              {" "}
              <span className="font-bold">5</span> /5
            </span>
          </span>
          <small className="font-semibold">1200 Avaliations</small>
        </div>
      </div>
      <div className="w-full px-10 lg:px-96">
        <iframe
          className="w-full h-64 lg:h-[35rem]"
          src={src}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
        <div className="flex flex-col items-start justify-start mt-10">
          <h3 className=" w-full bg-slate-100 py-2 text-2xl font-semibold text-gray-700">
            Ingredients
          </h3>
          <div className="mt-5">
            {recipe.map((rec) => (
              <>
                <p key={rec.title} className="font-extralight text-start">
                  {rec.ingredients.split("|").join(", ")}.
                </p>

                <p className="w-full bg-slate-100 py-2 text-2xl font-semibold text-gray-700 mt-5">
                  Servings
                </p>

                <p>{rec.servings}</p>

                <p className="w-full bg-slate-100 py-2 text-2xl font-semibold text-gray-700 mt-5">
                  Method of preparation
                </p>
                <p className="font-extralight text-start mt-5">
                  {rec.instructions}
                </p>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
