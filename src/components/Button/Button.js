import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ clickLoad }) => {
  return (
    <button type="button" className={s.Button} onClick={clickLoad}>
      Load more
    </button>
  );
};
Button.propTypes = {
  clickLoad: PropTypes.func.isRequired,
};
export default Button;
