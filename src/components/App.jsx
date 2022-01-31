import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import Routes from '@components/Routes';
import GlobalProvider from '@providers/Global';

library.add(fas, far);

export default function App() {
  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  );
}