import React from 'react';

import Header from '@components/Header';

import '@style/layout.css';

function Layout({ children }) {
  return (
    <div
      data-testid='layout'
      className='layout'
    >
      <Header className='layout__header' />
      <div className='layout__content'>
        { children }
      </div>
    </div>
  );
};

export default Layout;