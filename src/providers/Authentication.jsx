import React, { createContext, useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthStorage } from '@utils/storages';
import useSafeReducer from '@hooks/useSafeReducer';

const AuthenticationContext = createContext();

function useAuthentication() {
  const context = useContext(AuthenticationContext);
  if (!context)
    throw new Error('Provider is not correctly setted');
  return context;
}

function RequireAuth({ children }) {
  const { authenticated } = useAuthentication();
  return authenticated === true ? children : <Navigate to="/login" replace />;
}

function RestrictedAuth({ children }) {
  const { authenticated } = useAuthentication();
  return authenticated === false ? children : <Navigate to="/" replace />;
}

export default function AuthenticationProvider({ children, value=null }) {
  var [state, dispatch] = useSafeReducer((state, action) => {
    switch(action.type) {
      case 'LOGIN':
        let { username, password } = action.payload;
        if (!state.authenticated && username.toLowerCase() === 'wizeline' && password === 'Rocks!')
          return { authenticated: true };
        return state;
      case 'LOGOUT':
        return { authenticated: false };
      default:
        return state;
    }
  },  AuthStorage.get());

  useEffect(() => {
    AuthStorage.set(state);
  }, [state.authenticated]);

  var reducers = {
    login: (username, password) => dispatch({ type: 'LOGIN', payload: { username, password }}),
    logout: () => dispatch({ type: 'LOGOUT' })
  };

  return (
    <AuthenticationContext.Provider value={value || {
      ...state,
      ...reducers
    }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export { useAuthentication, RequireAuth, RestrictedAuth };