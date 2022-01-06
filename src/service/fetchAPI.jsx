export async function fetchIngredient(ingrediente) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`,
  );
  const data = await response.json();
  return data;
}

export async function fetchNames(nome) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${nome}`,
  );
  const data = await response.json();
  return data;
}

export async function fetchFirstName(primeiraletra) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${primeiraletra}`,
  );
  const data = await response.json();
  return data;
}
