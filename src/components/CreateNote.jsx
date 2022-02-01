import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { v4 as uuidv4 } from 'uuid';

import '@style/create-note.css';
import { useNotes } from '@providers/Notes'; 
import { COLORS } from '@utils/constants';
import IconButton from '@components/IconButton';

function CreateNote({ className='' }) {
  var [color, setColor] = useState(null);
  var [isColorsBarOpen, setIsColorBarOpen] = useState(false);
  var textareaRef = useRef(null);
  var { addNote } = useNotes();

  var onSave = (e) => {
    e.preventDefault();
    if (textareaRef.current.value) {
      addNote({ 
        id: uuidv4(),
        color: color,
        archived: false,
        text: textareaRef.current.value
      });
      textareaRef.current.value = '';
    }
  };

  return (
    <form
      data-testid='create-note'
      className={`create-note ${className}`}
      style={color ? { backgroundColor: `var(--${color})`} : null}
      onSubmit={(e) => onSave(e)}
    >
      <div className='create-note__header'>
        <IconButton 
          type='submit' 
          className='icon-button--secondary'
          aria-label='add note'
        >
          <FontAwesomeIcon icon={['fas', 'plus']} size='1x' />
        </IconButton>
      </div>
      <textarea 
        rows="4" cols="50" 
        className='create-note__textarea'
        placeholder='Write a new note...'
        ref={textareaRef}
        onBlur={(e) => onSave(e)}
      />
      <div className='create-note__footer'>
        <div className={`create-note__colors ${isColorsBarOpen ? '' : 'create-note__colors--hidden'}`}>
          {
            COLORS.map((color) => (
              <button 
                key={color}
                type='button' 
                className='create-note__color'
                aria-label={color}
                onClick={() => {
                  setColor(color);
                  setIsColorBarOpen(false);
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
        >
          <FontAwesomeIcon icon={['fas', 'palette']} />
        </IconButton>
      </div>
    </form>
  );
};

export default CreateNote;