import React from 'react';

function Note({ className='', note={} }) {
  return (
    <div
      data-testid='note'
      className={`note ${className}`}
    >
    </div>
  );
};

export default Note;