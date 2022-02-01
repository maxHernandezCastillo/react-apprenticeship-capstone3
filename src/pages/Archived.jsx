import React from 'react';

import '@style/archived-notes.css';
import Note from '@components/Note';
import { useNotes } from '@providers/Notes'; 

function Archived() {
  var { archivedNotes } = useNotes();

  if (archivedNotes.length > 0) {
    return (
      <div
        data-testid='archived-notes'
        className='archived-notes'
      >
        <div className='archived-notes__notes'>
          {
            archivedNotes.map((item) => (
              <Note key={item.id} note={item} />
            ))
          }
        </div>
      </div>
    );
  }

  return (
    <div
      data-testid='archived-notes'
      className='archived-notes'
    >
      <h2 className='archived-notes__empty'>You don't have archived notes.</h2>
    </div>
  );
}

export default Archived;