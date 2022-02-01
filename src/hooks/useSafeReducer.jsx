import { useReducer, useEffect, useRef, useCallback } from 'react';

function useSafeReducer() {
  // setting up
  const [state, dispatcher] = useReducer(...arguments);
  var flag = useRef(true);

  // When unmount
  useEffect(() => {
    return () => flag.current = false;
  }, []);

  // return safe setter
  return [
    state,
    useCallback((data) => {
      if (flag.current) dispatcher(data);
    }, []),
  ];
}

export default useSafeReducer;