export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': 'ea34ebfb9emshff886196d8a0b21p1afc54jsn33fa9ede6240',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
    { headers: headers },
  );

  const result = await response.json();
  return result;
}
