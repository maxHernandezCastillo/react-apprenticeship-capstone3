import React from 'react';

import Header from '@components/Header';

function Layout(props) {
let { children } = props;

  return (
    <div
      data-testid='layout'
      className='layout'
    >
      <Header />
      <div className='layout__content'>
        { children }
      </div>
    </div>
  );
};

export default Layout;