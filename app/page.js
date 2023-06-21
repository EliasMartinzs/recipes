import Main from "@/components/Main";
import Recipes from "@/components/Recipes";
import { useSelector } from "react-redux";
import { selectQuery } from "@/store/recipes/recipeSelector";

export default function Home() {
  return (
    <div className="w-full bg-slate-50 ">
      <Main />
      <Recipes />
    </div>
  );
}
