import fetch from "node-fetch";

const API = 'https://plankton-app-xhkom.ondigitalocean.app/api';

export async function loadMovies() {
  const res = await fetch(`${API}/movies`);
  const data = await res.json();
  return data.data;
}

export async function loadMovie(id) {
  const res = await fetch(`${API}/movies/${id}`);
  const data = await res.json();
  return data.data;
}