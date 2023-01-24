export async function getMovies() {
  const response = await fetch("/static/movies.json");
  const data = await response.json();
  const allMovies = data.movies;
  return allMovies;
}
