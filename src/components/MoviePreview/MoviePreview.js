import React from 'react';
import PropTypes from 'prop-types';
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
MoviePreview.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};
export default MoviePreview;
