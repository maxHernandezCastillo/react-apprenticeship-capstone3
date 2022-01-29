import React from 'react';

import '@style/icon-button.css';

function IconButton({ 
  children,
  className='',
  type='button',
  onClick=null,
  disabled=false,
}) {
  return (
    <button
      data-testid='icon-button'
      className={`icon-button ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default IconButton;