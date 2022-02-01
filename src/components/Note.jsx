import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '@style/note.css';
import { useNotes } from '@providers/Notes'; 
import { COLORS } from '@utils/constants';
import IconButton from '@components/IconButton';

function Note({ className='', note={} }) {
  var [isColorsBarOpen, setIsColorBarOpen] = useState(false);
  var { updateNote, removeNote } = useNotes();

  return (
    <div
      data-testid='note'
      className={`note ${className}`}
      style={note.color ? { backgroundColor: `var(--${note.color})`} : null}
    >
      <div className='note__header'>
        <IconButton
          type='button'
          className='icon-button--secondary'
          aria-label={note.archived ? 'restore note' : 'archive note'}
          onClick={() => updateNote({...note, archived: !note.archived})}
        >
          <FontAwesomeIcon icon={['fas', note.archived ? 'arrow-up' : 'archive']} size='1x' />
        </IconButton>
        <IconButton
          type='button'
          className='icon-button--secondary'
          aria-label='remove note'
          onClick={() => removeNote(note)}
        >
          <FontAwesomeIcon icon={['fas', 'trash']} size='1x' />
        </IconButton>
      </div>

      <p className='note__text'>
        {note.text}
      </p>

      <div className='note__footer'>
        <div className={`note__colors ${isColorsBarOpen ? 'note__colors--open' : ''}`}>
          {
            COLORS.map((color) => (
              <button 
                key={color}
                type='button' 
                className='note__color'
                aria-label={color}
                onClick={() => {
                  setIsColorBarOpen(false);
                  updateNote({...note, color});
                }}
                style={{backgroundColor: `var(--${color})`}}
              />
            ))
          }

          <FontAwesomeIcon icon={['fas', 'angle-left']} />
        </div>
        <IconButton 
          onClick={() => setIsColorBarOpen((prevState) => !prevState)}
          className='icon-button--secondary'
          aria-label='Show colors'
        >
          <FontAwesomeIcon icon={['fas', 'palette']} />
        </IconButton>
      </div>
    </div>
  );
};

export default Note;