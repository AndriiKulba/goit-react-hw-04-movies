import React from 'react';
import Api from '../../services/Api';
import s from './MoviePreview.module.css';
import defaultImage from './poster2.jpg';

const MoviePreview = ({ title, image }) => {
  function getImage(bd) {
    return bd ? Api.fetchImage(bd) : defaultImage;
  }
  return (
    <>
      <img src={getImage(image)} alt={title} className={s.MovieItem__image} />

      <h3 className={s.title}>{title}</h3>
    </>
  );
};

export default MoviePreview;
