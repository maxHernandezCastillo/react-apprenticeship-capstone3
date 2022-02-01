import React from 'react';

import AuthenticationProvider from '@providers/Authentication';
import NotesContextProvider from '@providers/Notes';
import GlobalContextProvider from '@providers/GlobalContext';

export default function GlobalProvider({ 
  children, 
  globalcontextValue={},
  notesValue={},
  authenticationValue={}
}) {
  return (
    <>
      <GlobalContextProvider value={globalcontextValue}>
        <NotesContextProvider value={notesValue}>
          <AuthenticationProvider value={authenticationValue}>
            { children }
          </AuthenticationProvider>
        </NotesContextProvider>
      </GlobalContextProvider>
    </>
  );
}