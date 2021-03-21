import axios from 'axios';
const KEY = '6660d5f7e20d8791cca6091c12d1e803';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';



async function fetchWithErrorHandling(url = '') {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

async function fetcImagehWithErrorHandling(url = '') {
  const response = await fetch(url);
  return response.ok
    ? await response()
    : Promise.reject(new Error('Not found'));
}

function fetchImage(poster) {
  let url = `${IMAGE_BASE_URL}${poster}`;

  return url;
}

function fetchTrandMovies() {
  let url = `${BASE_URL}/trending/movie/week?api_key=${KEY}`;
  return fetchWithErrorHandling(url);
}

function fetchSearchMovies(query) {
  let url = `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}&page=1`;
  return fetchWithErrorHandling(url);
}

function fetchDetailMovies(id) {
  let url = `${BASE_URL}/movie/${id}?api_key=${KEY}&append_to_response=credits,reviews`;
  return fetchWithErrorHandling(url);
}

function fetchCreditslMovies(id) {
  let url = `${BASE_URL}/movie/${id}?api_key=${KEY}&append_to_response=credits,reviews`;
  return fetchWithErrorHandling(url);
}

function fetchReviewsMovies(id) {
  let url = `${BASE_URL}/movie/${id}?api_key=${KEY}&append_to_response=reviews`;
  return fetchWithErrorHandling(url);
}

export default {
  fetchTrandMovies,
  fetchSearchMovies,
  fetchDetailMovies,
  fetchCreditslMovies,
  fetchReviewsMovies,
  fetchImage,
};
