import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AuthenticationProvider from '@providers/Authentication';
import NotesContextProvider from '@providers/Notes';
import GlobalContextProvider from '@providers/GlobalContext';

export default function GlobalProvider({ 
  children, 
  globalcontextvalue=null,
  notesValue=null,
  authenticationValue=null
}) {
  return (
    <>
      <BrowserRouter>
        <GlobalContextProvider value={globalcontextvalue || null}>
          <NotesContextProvider value={notesValue || null}>
            <AuthenticationProvider value={authenticationValue || null}>
              { children }
            </AuthenticationProvider>
          </NotesContextProvider>
        </GlobalContextProvider>
      </BrowserRouter>
    </>
  );
}