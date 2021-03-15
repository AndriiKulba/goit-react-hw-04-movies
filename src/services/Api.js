import axios from 'axios';
const KEY = '6660d5f7e20d8791cca6091c12d1e803';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie/popular';

const FetchImages = () => {
  let url = `?key=${KEY}`;
  return axios
    .get(
      'https://api.themoviedb.org/3/movie/popular?api_key=6660d5f7e20d8791cca6091c12d1e803',
    )
    .then(response => response);
};

export default { FetchImages };
