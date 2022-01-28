import React from 'react';

function Input({ label, type, value, onChange }) {
  return (
    <div
      data-testid='input'
      className='input'
    >
      <input 
        {...{label, type, value, onChange }}
      />
    </div>
  );
};

export default Input;