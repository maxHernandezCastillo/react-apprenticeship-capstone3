import React from 'react';

function IconButton({ icon }) {
  return (
    <button
      data-testid='icon-button'
      className='icon-button'
    >
      {icon}
    </button>
  );
};

IconButton.defaultProps = {
  icon: null
};

export default IconButton;