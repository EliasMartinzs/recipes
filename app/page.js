import Main from "@/components/Main";
import Recipes from "@/components/Recipes";
import fetchRecipes from "@/utils";


export default async function Home({ searchParams }) {
  const query = searchParams.query;
  const recipes = await fetchRecipes(query);
  

  return (
    <div className="w-full bg-slate-50 ">
      <Main />
      <Recipes recipes={recipes} query={query} />
    </div>
  );
}
