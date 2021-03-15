import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';
import { v4 as uuidv4 } from 'uuid';

const ImageGalleryItem = ({ Images, getLargeImg }) => {
  return (
    <>
      {Images.map(Image => {
        return (
          <li key={Image.id} className={s.ImageGalleryItem}>
            <img
              src={Image.webformatURL}
              alt={Image.tags}
              className={s.ImageGalleryItem__image}
              onClick={() => getLargeImg(Image.largeImageURL, Image.tags)}
            />
          </li>
        );
      })}
    </>
  );
};
ImageGalleryItem.propTypes = {
  Images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tag: PropTypes.string,
    }),
  ),
  getLargeImg: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
