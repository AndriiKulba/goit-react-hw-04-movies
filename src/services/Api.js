import axios from 'axios';
const KEY = '6660d5f7e20d8791cca6091c12d1e803';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const FetchTrandMovies = () => {
  let url = `trending/all/day?api_key=${KEY}&page=1`;
  return axios.get(url).then(response => response.data);
};

const FetchSearchMovies = query => {
  let url = `search/movie?api_key=${KEY}&query=${query}&page=1`;
  return axios.get(url).then(response => response.data);
};

const FetchDetailMovies = id => {
  let url = `movie/${id}?api_key=${KEY}`;
  return axios.get(url).then(response => response.data);
};

const FetchCreditslMovies = id => {
  let url = `movie/${id}/credits?api_key=${KEY}`;
  return axios.get(url).then(response => response.data);
};

const FetchReviewsMovies = id => {
  let url = `movie/${id}/reviews?api_key=${KEY}`;
  return axios.get(url).then(response => response.data);
};

export default {
  FetchTrandMovies,
  FetchSearchMovies,
  FetchDetailMovies,
  FetchCreditslMovies,
  FetchReviewsMovies,
};
// /trending/all / day;
