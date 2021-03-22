import React, { Component } from 'react';
import PropTypes from 'prop-types';

import s from './Cast.module.css';
import Api from '../../services/Api';
import defaultImage from '../DetailsMovie/poster.png';

class Cast extends Component {
  getImage(bd) {
    return bd ? Api.fetchImage(bd) : defaultImage;
  }
  render() {
    const { cast } = this.props.actors;
    console.log(this.props.actors.cast);
    return cast.map(({ id, name, character, profile_path }) => {
      return (
        <li key={id}>
          <img
            src={this.getImage(profile_path)}
            alt={name}
            className={s.Actor__img}
          />
          <h3>Name: {name}</h3>
          <p>{character}</p>
        </li>
      );
    });
  }
}
Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string,
      profile_path: PropTypes.string,
    }),
  ),
};
export default Cast;
