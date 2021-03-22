import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import MoviePreview from '../MoviePreview';
import s from './MoviesList.module.css';

class MoviesList extends Component {
  render() {
    const { Movies, location } = this.props;
    return (
      <ul className={s.MovieGallery}>
        {Movies.map(({ id, title, backdrop_path }) => {
          return (
            <li key={id} className={s.MovieItem}>
              <NavLink
                className={s.link}
                to={{ pathname: `/movies/${id}`, state: { from: location } }}
              >
                <MoviePreview title={title} image={backdrop_path} />
              </NavLink>
            </li>
          );
        })}
      </ul>
    );
  }
}

MoviesList.propTypes = {
  Movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      backdrop_path: PropTypes.string,
    }),
  ),
};
export default withRouter(MoviesList);
