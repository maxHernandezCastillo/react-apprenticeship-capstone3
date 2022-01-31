import React, { useRef } from 'react';

import '@style/input.css';

function Input({ 
  className='', 
  label, 
  type, 
  value, 
  onChange 
}) {
  let inputRef = useRef(null);

  return (
    <div
      data-testid='input'
      className={`input ${className}`}
    >
      <label htmlFor={inputRef}>{label}</label>
      <input
        ref={inputRef}
        type={type}
        value={value}
        onChange={onChange}
        className='input__input'
      />
    </div>
  );
};

export default Input;