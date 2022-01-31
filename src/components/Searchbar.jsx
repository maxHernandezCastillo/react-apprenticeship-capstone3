import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '@style/searchbar.css';
import { useGlobalContext } from '@providers/GlobalContext';

export default function Searchbar({
  className='', 
  type,
}) {
  var { searchTerm, setSearchTerm } = useGlobalContext();
  return (
    <div
      data-testid='searchbar'
      className={`searchbar ${className}`}
    >
      <input
        type={type}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='searchbar__input'
        placeholder='Search a note...'
      />
      <FontAwesomeIcon icon={['fas', 'search']} size='2x' />
    </div>
  );
};