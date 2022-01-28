import React from 'react';

import Routes from '@components/Routes';
import GlobalProvider from '@providers/Global';
import Layout from '@components/Layout';

export default function App() {
  return (
    <GlobalProvider>
      <Layout>
        <Routes />
      </Layout>
    </GlobalProvider>
  );
}