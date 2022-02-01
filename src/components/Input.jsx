import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

import '@style/input.css';

function Input({ 
  className='', 
  label, 
  type, 
  value, 
  onChange 
}) {
  let inputRef = useRef(uuidv4());

  return (
    <div
      data-testid='input'
      className={`input ${className}`}
    >
      <label htmlFor={inputRef.current}>{label}</label>
      <input
        id={inputRef.current}
        type={type}
        value={value}
        onChange={onChange}
        className='input__input'
      />
    </div>
  );
};

export default Input;