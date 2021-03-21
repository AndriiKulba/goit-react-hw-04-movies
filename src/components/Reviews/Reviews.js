import React, { Component } from 'react';
import s from './Reviews.module.css';
import Api from '../../services/Api';

class Reviews extends Component {
  render() {
    const { reviews } = this.props;
    return reviews.length > 0 ? (
      reviews.results.map(review => {
        return (
          <li key={review.id} className={s.Reviews}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
          </li>
        );
      })
    ) : (
      <p>We don't have any reviews for this movie</p>
    );
  }
}

export default Reviews;
