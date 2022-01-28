import React from 'react';

function Searchbar(props) {
  return (
    <div
      data-testid={ props['data-testid'] }
      className='searchbar'
    >
    </div>
  );
};

Searchbar.defaultProps = {
  'data-testid': '',
};

export default Searchbar;