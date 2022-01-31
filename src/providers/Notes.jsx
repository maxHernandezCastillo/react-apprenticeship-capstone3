import React, { createContext, useContext, useEffect } from 'react';

import debounce from '@utils/debounce';
import { NotesStorage } from '@utils/storages';
import useSafeReducer from '@hooks/useSafeReducer';

const NotesContext = createContext();

function useNotes() {
  const context = useContext(NotesContext);
  if (!context)
    throw new Error('Provider is not correctly setted');
  return context;
}

export default function NotesContextProvider({ children, value=null }) {
  var [state, dispatch] = useSafeReducer((state, action) => {
    let note = action.payload;

    switch(action.type) {
      case 'ADD_NOTE':
        if (state.notes.findIndex((item) => item.id === note.id) !== -1)
          return state;
        else
          return {
            ...state,
            notes: state.notes.concat([note])
          };
      case 'REMOVE_NOTE':
        return {
          ...state,
          notes: state.notes.filter((item) => item.id !== note.id)
        };
      case 'UPDATE_NOTE':
        let noteIndex = state.notes.findIndex((item) => item.id === note.id);
        let notes = state.notes.slice();
        notes[noteIndex] = note;
        return {
          ...state,
          notes: notes
        }
      default:
        return state;
    }
  }, NotesStorage.get());

  useEffect(() => {
    let value = NotesStorage.get();
    NotesStorage.set({
      ...value,
      notes: state.notes
    });
  });

  var reducers = {
    addNote: debounce((note) => dispatch({ type: 'ADD_NOTE', payload: note })),
    removeNote: (note) => dispatch({ type: 'REMOVE_NOTE', payload: note }),
    updateNote: (note) => dispatch({ type: 'UPDATE_NOTE', payload: note })
  };

  var activeNotes = state.notes.filter((item) => !item.archived);
  var filterActiveNotesBy = (term) => activeNotes.filter((item) => item.text.search(new RegExp(term, 'i')) !== -1);
  var archivedNotes = state.notes.filter((item) => item.archived);
  return (
    <NotesContext.Provider value={value || {
      ...state,
      ...reducers,
      activeNotes,
      archivedNotes,
      filterActiveNotesBy
    }}>
      {children}
    </NotesContext.Provider>
  );
};

export { useNotes };