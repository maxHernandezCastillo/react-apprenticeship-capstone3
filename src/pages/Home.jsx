import React from 'react';

import '@style/home.css';
import { useNotes } from '@providers/Notes';
import { useGlobalContext } from '@providers/GlobalContext';
import CreateNote from '@components/CreateNote';
import Note from '@components/Note';
import Searchbar from '@components/Searchbar';

function Home() {
  var { filterActiveNotesBy } = useNotes();
  var { searchTerm } = useGlobalContext();

  return (
    <div
      data-testid='home'
      className='home'
    >
      <Searchbar className='home__searchbar' />
      <CreateNote />
      <div className='home-notes'>
        {
          filterActiveNotesBy(searchTerm).map((item) => (
            <Note key={item.id} note={item} />
          ))
        }
      </div>
    </div>
  );
}

export default Home;