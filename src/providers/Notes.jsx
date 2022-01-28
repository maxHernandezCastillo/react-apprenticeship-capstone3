import React, { createContext, useContext } from 'react';

const NotesContext = createContext();

function useNotes() {
  const context = useContext(NotesContext);
  if (!context)
    throw new Error('Provider is not correctly setted');
  return context;
}

export default function NotesContextProvider({ children, value=null }) {
  return ( // if a default value provided return that value, if not return the object bellow
    <NotesContext.Provider value={
      value || {
        notes: []
      }
    }>
      {children}
    </NotesContext.Provider>
  );
};

export { useNotes };