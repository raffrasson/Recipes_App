export async function fetchFoodIngredient(ingrediente) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`,
  );
  const foods = await response.json();
  return foods;
}

export async function fetchFoodNames(nome) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${nome}`,
  );
  const foods = await response.json();
  return foods;
}

export async function fetchFoodFirstName(primeiraletra) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${primeiraletra}`,
  );
  const foods = await response.json();
  return foods;
}

export async function fetchDrinksIngredient(ingrediente) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}`,
  );
  const drinks = await response.json();
  return drinks;
}

export async function fetchDrinksNames(nome) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nome}`,
  );
  const drinks = await response.json();
  return drinks;
}

export async function fetchDrinksFirstName(primeiraletra) {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${primeiraletra}`,
  );
  const drinks = await response.json();
  return drinks;
}
