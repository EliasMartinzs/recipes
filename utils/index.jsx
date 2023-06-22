const header = {
  headers: { "X-Api-Key": "EwwX3+F4fKVEZKZVZ5diuQ==mId5bGOub49VhnJI" },
};

export default async function fetchRecipes(query) {
  const response = await fetch(
    `https://api.api-ninjas.com/v1/recipe?query=${query || "pancakes"}`,
    header
  );

  const results = await response.json();

  return results;
}
