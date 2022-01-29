import React from 'react';

export default function Searchbar({ className='' }) {
  return (
    <div
      data-testid='searchbar'
      className={`searchbar ${className}`}
    >
    </div>
  );
};