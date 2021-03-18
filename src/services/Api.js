import axios from 'axios';
const KEY = '6660d5f7e20d8791cca6091c12d1e803';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const BASE_URL = 'https://api.themoviedb.org/3';

// const FetchTrandMovies = () => {
//   let url = `trending/all/day?api_key=${KEY}&page=1`;
//   return axios.get(url).then(response => response.data);
// };

// const FetchSearchMovies = query => {
//   let url = `search/movie?api_key=${KEY}&query=${query}&page=1`;
//   return axios.get(url).then(response => response.data);
// };

// const FetchDetailMovies = id => {
//   let url = `movie/${id}?api_key=${KEY}`;
//   return axios.get(url).then(response => response.data);
// };

// const FetchCreditslMovies = id => {
//   let url = `movie/${id}/credits?api_key=${KEY}`;
//   return axios.get(url).then(response => response.data);
// };

// const FetchReviewsMovies = id => {
//   let url = `movie/${id}/reviews?api_key=${KEY}`;
//   return axios.get(url).then(response => response.data);
// };

// export default {
//   FetchTrandMovies,
//   FetchSearchMovies,
//   FetchDetailMovies,
//   FetchCreditslMovies,
//   FetchReviewsMovies,
// };
// /trending/all / day;
async function fetchWithErrorHandling(url = '') {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

function fetchAuthors(id) {
  let url = `${BASE_URL}/movie/${id}?api_key=${KEY}&append_to_response=reviews`;
  return fetchWithErrorHandling(url);
}

function fetchTrandMovies() {
  let url = `${BASE_URL}/trending/all/day?api_key=${KEY}`;
  return fetchWithErrorHandling(url);
}

function fetchSearchMovies(query) {
  let url = `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}&page=1`;
  return fetchWithErrorHandling(url);
}

function fetchDetailMovies(id) {
  let url = `${BASE_URL}/movie/${id}?api_key=${KEY}`;
  return fetchWithErrorHandling(url);
}

function fetchCreditslMovies(id) {
  let url = `${BASE_URL}/movie/${id}?api_key=${KEY}&append_to_response=credits`;
  return fetchWithErrorHandling(url);
}

function fetchReviewsMovies(id) {
  let url = `${BASE_URL}/movie/${id}?api_key=${KEY}&append_to_response=reviews`;
  return fetchWithErrorHandling(url);
}

// export function fetchBooks() {
//   return fetchWithErrorHandling(`${BASE_URL}/books`);
// }

// export function fetchBookById(bookId) {
//   return fetchWithErrorHandling(`${BASE_URL}/books/${bookId}?_expand=author`);
// }

export default {
  fetchTrandMovies,
  fetchSearchMovies,
  fetchDetailMovies,
  fetchCreditslMovies,
  fetchReviewsMovies,
};
