import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
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
export default withRouter(MoviesList);
