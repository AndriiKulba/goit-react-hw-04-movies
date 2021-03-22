import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Reviews.module.css';

class Reviews extends Component {
  render() {
    const { reviews } = this.props;
    return reviews.results.length > 0 ? (
      reviews.results.map(({ id, author, content }) => {
        return (
          <li key={id} className={s.Reviews}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        );
      })
    ) : (
      <p>We don't have any reviews for this movie</p>
    );
  }
}
Reviews.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      author: PropTypes.string,
      content: PropTypes.string,
    }),
  ),
};
export default Reviews;
