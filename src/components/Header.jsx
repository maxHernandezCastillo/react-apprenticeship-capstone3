import React from 'react';
import { useNavigate } from 'react-router-dom';

import '@style/header.css';
function Header({ className='' }) {
  var navigate = useNavigate();

  return (
    <ul
      data-testid='header'
      className={`header ${className}`}
    >
      <li 
        className='header__item'
        onClick={() => navigate('/')}
      >
        Notes
      </li>
      <li
        className='header__item'
        onClick={() => navigate('/archived')}
      >
        Archived
      </li>
      <li className='header__item'>
        Logout
      </li>
    </ul>
  );
};

export default Header;