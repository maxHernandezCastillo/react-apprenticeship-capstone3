import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '@style/create-note.css';
import { COLORS } from '@utils/constants';
import IconButton from '@components/IconButton';

function CreateNote({ className='' }) {
  var [color, setColor] = useState(null);
  var [isColorsBarOpen, setIsColorBarOpen] = useState(false);
  var formRef = useRef(null);

  const onSave = (e) => {
    e.preventDefault();
  };

  return (
    <form
      data-testid='create-note'
      className={`create-note ${className}`}
      style={color ? { border: `3px solid var(--${color})`} : null}
      ref={formRef}
      onSubmit={(e) => onSave()}
    >
      <div className='create-note__header'>
        <IconButton type='submit'>
          <FontAwesomeIcon icon={['fas', 'plus']} size='1x' />
        </IconButton>
      </div>
      <textarea rows="4" cols="50" className='create-note__textarea' />
      <div className='create-note__footer'>
        <div className={`create-note__colors ${isColorsBarOpen ? '' : 'create-note__colors--hidden'}`}>
          {
            COLORS.map((item) => (
              <button 
                key={item}
                type='button' 
                className='create-note__color'
                onClick={() => {
                  setColor(item);
                  setIsColorBarOpen(false);
                }}
                style={{backgroundColor: `var(--${item})`}}
              />
            ))
          }

          <FontAwesomeIcon icon={['fas', 'angle-left']} />
        </div>
        <IconButton 
          onClick={() => setIsColorBarOpen((prevState) => !prevState)}
        >
          <FontAwesomeIcon icon={['fas', 'palette']} />
        </IconButton>
      </div>
    </form>
  );
};

export default CreateNote;