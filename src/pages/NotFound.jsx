import React from 'react';

import '@style/not-found.css';

function NotFound() {
  return (
    <div
      data-testid='not-found'
      className='not-found'
    >
      <h1 className='not-found__title'>404</h1>
      <h4 className='not-found__quote'>Please, don’t worry so much. Because in the end, none of us have very long on this Earth. Life is fleeting.</h4>
      <h4 className='not-found__author'>Robin Williams</h4>
    </div>
  );
}

export default NotFound;