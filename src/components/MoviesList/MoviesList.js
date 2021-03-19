import React from 'react';
import PropTypes from 'prop-types';
import Api from '../../services/Api';
import defaultImage from './poster.jpg';
import s from './MoviesList.module.css';
import { v4 as uuidv4 } from 'uuid';

const MoviesList = ({ Movies }) => {
  function getImage(bd) {
    return bd ? Api.fetchImage(bd) : defaultImage;
  }
  console.log(Movies);
  return (
    <ul className={s.ImageGallery}>
      {Movies.map(movie => {
        return (
          <li key={movie.id} className={s.MovieItem}>
            <img
              src={getImage(movie.backdrop_path)}
              alt={movie.title}
              className={s.MovieItem__image}
            />
            <p>{movie.title}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default MoviesList;
