import React from 'react';

import '@style/button.css';

function Button({ 
  className='',
  type='default', 
  text='',
  onClick=null
}) {
  return (
    <button
      data-testid='button'
      className={`button ${className}`}
      onClick={onClick}
    >
      <h4>{text}</h4>
    </button>
  );
};

export default Button;