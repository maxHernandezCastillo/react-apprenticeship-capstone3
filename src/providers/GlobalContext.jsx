import React, { useContext } from 'react';

import useSafeReducer from '@hooks/useSafeReducer';

const initial_global_context = {
  searchTerm: ''
};

const GlobalContext = React.createContext(null);

const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context)
  throw new Error('Provider is not correctly setted');
  return context;
};

export default function GlobalContextProvider ({ children, value={} }) {
  const [state, dispatcher] = useSafeReducer((state, action) => {
    switch(action.type) {
      case 'SET_SEARCH_TERM':
        return {
          ...state,
          searchTerm: action.payload
        };
      default:
        return state;
    };
  }, initial_global_context);

  var reducers = {
    setSearchTerm: (searchTerm) => dispatcher({ type: 'SET_SEARCH_TERM', payload: searchTerm })
  };

  return (
    <GlobalContext.Provider value={Object.assign({
      ...state,
      ...reducers
    }, value)}>
      { children }
    </GlobalContext.Provider>
  );
}

export { useGlobalContext };