import React, { Component } from 'react';
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
    return cast.map(actor => {
      return (
        <li key={actor.id}>
          <img
            src={this.getImage(actor.profile_path)}
            alt={actor.name}
            className={s.Actor__img}
          />
          <h3>Name: {actor.name}</h3>
          <p>{actor.character}</p>
        </li>
      );
    });
  }
}

export default Cast;
