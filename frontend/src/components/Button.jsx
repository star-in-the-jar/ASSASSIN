import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ variant, label, onClick }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    localStorage.setItem('buttonClicked', 'true');
    //localStorage.clear();
    if (onClick) {
      onClick();
    }
  };

  useEffect(() => {
    const isButtonClicked = localStorage.getItem('buttonClicked');
    if (isButtonClicked === 'true') {
      setClicked(true);
    }
  }, []); 

  return (
    <button className={`button ${variant} ${clicked ? 'true purple' : ''}`} onClick={handleClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['blue', 'darkblue', 'purple']).isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;