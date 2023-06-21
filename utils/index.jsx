const header = {
  headers: { "X-Api-Key": "EwwX3+F4fKVEZKZVZ5diuQ==mId5bGOub49VhnJI" },
};

// export async function fetchQuery(query) {
//   const response = await fetch(
//     `https://api.api-ninjas.com/v1/recipe?query=${query}`,
//     header
//   );

//   const resultsQuery = await response.json();

//   return resultsQuery;
// }

export default async function fetchRecipes(query) {
  const response = await fetch(
    `https://api.api-ninjas.com/v1/recipe?query=pizza`,
    header
  );

  const results = await response.json();

  return results;
}
