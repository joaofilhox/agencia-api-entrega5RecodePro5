import React from 'react';
import './style.css';

const Button = ({ onClick, children, type }) => {
  return (
    <button type={type} className="custom-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
