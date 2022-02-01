import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import '@style/header.css';
import { useAuthentication } from '@providers/Authentication';

function Header({ className='' }) {
  var navigate = useNavigate();
  var location = useLocation();
  var { logout } = useAuthentication();

  return (
    <ul
      data-testid='header'
      className={`header ${className}`}
    >
      <li 
        className={`header__item ${location.pathname === '/' ? 'header__item--selected' : ''}`}
        aria-label='notes'
        onClick={() => navigate('/')}
      >
        Notes
      </li>
      <li
        className={`header__item ${location.pathname === '/archived' ? 'header__item--selected' : ''}`}
        aria-label='archived'
        onClick={() => navigate('/archived')}
      >
        Archived
      </li>
      <li 
        className='header__item'
        onClick={() => logout()}
      >
        Logout
      </li>
    </ul>
  );
};

export default Header;