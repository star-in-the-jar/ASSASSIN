import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'; 

const Button = ({ variant, label, onClick }) => {
  const buttonClass = `button ${variant}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['blue', 'darkblue']).isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;