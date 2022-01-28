import React, { createContext, useContext } from 'react';

const AuthenticationContext = createContext();

function useAuthentication() {
  const context = useContext(AuthenticationContext);
  if (!context)
    throw new Error('Provider is not correctly setted');
  return context;
}

export default function AuthenticationProvider({ children, value=null }) {
  return ( // if a default value provided return that value, if not return the object bellow
    <AuthenticationContext.Provider value={
      value || {
        user: null,
        login: (username, password) => false,
        logout: () => false
      }
    }>
      {children}
    </AuthenticationContext.Provider>
  );
};

export { useAuthentication };