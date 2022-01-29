import React from 'react';

import '@style/home.css';
import CreateNote from '@components/CreateNote';

function Home() {
  return (
    <div
      data-testid='home'
      className='home'
    >
      <CreateNote />
    </div>
  );
}

export default Home;