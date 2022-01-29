import React from 'react';

function Input({ 
  className='', 
  label, 
  type, 
  value, 
  onChange 
}) {
  return (
    <div
      data-testid='input'
      className={`input ${className}`}
    >
      <input 
        {...{label, type, value, onChange }}
      />
    </div>
  );
};

export default Input;