export async function getMovies() {
  const response = await fetch("https://plankton-app-xhkom.ondigitalocean.app/api/movies");
  const data = await response.json();

  return data.data;
}
