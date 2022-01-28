import React from 'react';

function Button({ text, onClick }) {
  return (
    <Button
      data-testid='button'
      className='button'
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default Button;