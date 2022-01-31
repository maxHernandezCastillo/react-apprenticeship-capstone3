import React from 'react';

import '@style/archived-notes.css';
import Note from '@components/Note';
import { useNotes } from '@providers/Notes'; 

function Archived() {
  var { archivedNotes } = useNotes();
  
  return (
    <div
      data-testid='archived-notes'
      className='archived-notes'
    >
      <div className='home-notes'>
        {
          archivedNotes.map((item) => (
            <Note key={item.id} note={item} />
          ))
        }
      </div>
    </div>
  );
}

export default Archived;