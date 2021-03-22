import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

export default class Load extends Component {
  render() {
    return (
      <Loader
        type="BallTriangle"
        color="#21319c"
        secondaryColor="#5d75fd"
        height={80}
        width={80}
        className={s.loader}
      />
    );
  }
}
