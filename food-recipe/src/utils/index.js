export const fetchRecipes = async (filter) => {
  const {query, from = 0, limit = 20} = filter;

  const APP_ID = import.meta.env.VITE_REACT_APP_ID;
  const API_KEY = import.meta.env.VITE_REACT_API_KEY;

  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${API_KEY}&from=${from}&to=${from + limit}`;

  const response = await fetch(url, {
    headers: {
      "Edamam-Account-User": "ChukwuemekaJOHN",
    },
  });

  const data = await response.json();

  console.log(data);

    return data.hits
}

export const fetchRecipe = async (id) => {
    const APP_ID = import.meta.env.VITE_REACT_APP_ID;
    const API_KEY = import.meta.env.VITE_REACT_API_KEY;

    const url = `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${APP_ID}&app_key=${API_KEY}`;

    const response = await fetch(url, {
        headers: {
            "Edamam-Account-User": "ChukwuemekaJOHN"
        }
    })

    if (!response.ok) {
    throw new Error("Failed to fetch recipe");
  }

  const data = await response.json();

  console.log("FULL RESPONSE:", data);

  return data; // ✅ NOT data[0]
}