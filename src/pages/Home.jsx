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

  let notes = filterActiveNotesBy(searchTerm);

  if (notes.length > 0) {
    return (
      <div
        data-testid='home'
        className='home'
      >
        <Searchbar className='home__searchbar' />
        <CreateNote />
        <div className='home-notes'>
          {
            notes.map((item) => (
              <Note key={item.id} note={item} />
            ))
          }
        </div>
      </div>
    );  
  }

  return (
    <div
      data-testid='home'
      className='home'
    >
      <Searchbar className='home__searchbar'/>
      <CreateNote />
      {
        searchTerm ? 
        <h2 className='home__empty'>There are no match results. Try another search.</h2> :
        <h2 className='home__empty'>There are no notes, please create a new one using the creation note input.</h2>
      }
    </div>
  );  
}

export default Home;