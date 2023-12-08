import React from 'react';
import './style.css'; 

const Input = ({ register, name, label, type, placeholder, value, onChange, }) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        {...register(name, {defaultValue: value})}
      />
    </div>
  );
};

export default Input;
