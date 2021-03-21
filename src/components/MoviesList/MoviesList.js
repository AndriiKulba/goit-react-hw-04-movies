import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Api from '../../services/Api';
import MoviePreview from '../MoviePreview';
import defaultImage from './poster2.jpg';
import s from './MoviesList.module.css';

class MoviesList extends Component {
  getImage(bd) {
    return bd ? Api.fetchImage(bd) : defaultImage;
  }
  render() {
    const { Movies, location } = this.props;
    return (
      <ul className={s.ImageGallery}>
        {Movies.map(({ id, title, backdrop_path }) => {
          return (
            <li key={id} className={s.MovieItem}>
              <Link
                // to={`/movies/${id}`}
                to={{ pathname: `/movies/${id}`, state: { from: location } }}
              >
                {/* <img
                  src={this.getImage(backdrop_path)}
                  alt={title}
                  className={s.MovieItem__image}
                />

                <p>{title}</p> */}
                <MoviePreview title={title} image={backdrop_path} />
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default withRouter(MoviesList);
