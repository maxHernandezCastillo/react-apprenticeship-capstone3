import React from 'react';

import '@style/icon-button.css';

function IconButton({ 
  children,
  className='',
  type='button',
  onClick=null,
  disabled=false,
  ...props
}) {
  return (
    <button
      data-testid='icon-button'
      className={`icon-button ${className}`}
      aria-label={props['aria-label']}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default IconButton;