import React from 'react';

function IconButton(props) {
  return (
    <div
      data-testid={ props['data-testid'] }
      className='icon-button'
    >
    </div>
  );
};

IconButton.defaultProps = {
  'data-testid': '',
};

export default IconButton;