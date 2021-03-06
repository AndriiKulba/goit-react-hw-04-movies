import axios from 'axios';
const KEY = '6660d5f7e20d8791cca6091c12d1e803';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

function fetchImage(poster) {
  let url = `${IMAGE_BASE_URL}${poster}`;

  return url;
}

function fetchTrandMovies(currentPage = 1) {
  let url = `/trending/movie/week?api_key=${KEY}&page=${currentPage}`;
  return axios.get(url).then(response => response.data);
}

function fetchSearchMovies(searchQuery = '', currentPage = 1) {
  let url = `/search/movie?api_key=${KEY}&query=${searchQuery}&page=${currentPage}`;
  return axios.get(url).then(response => response.data);
}

function fetchDetailMovies(id) {
  let url = `/movie/${id}?api_key=${KEY}&append_to_response=credits,reviews`;
  return axios.get(url).then(response => response.data);
}

export default {
  fetchTrandMovies,
  fetchSearchMovies,
  fetchDetailMovies,
  fetchImage,
};
