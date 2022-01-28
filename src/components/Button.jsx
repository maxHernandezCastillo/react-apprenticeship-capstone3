import React from 'react';

function Button({ text, onClick }) {
  return (
    <button
      data-testid='button'
      className='button'
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;