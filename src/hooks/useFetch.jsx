import { useEffect } from 'react';
import axios from 'axios';

import useSafeState from '@src/hooks/useSafeState';

const DEFAULT_OPTIONS = {
  method: 'POST',
  mode: 'cors',
  cache: 'default',
  credentials: 'omit',
  headers: { 'Content-Type': 'application/json' },
  redirect: 'manual',
  referrerPolicy: 'no-referrer',
};

const DEFAULT_RESPONSE = {};

export default function useFetch(
    url, 
    options, 
    dependencies = [],
    delay=500, 
    useDebounce=false
  ) {
  const [timeoutId, setTimeoutId] = useSafeState(null);
  const [response, setResponse] = useSafeState(DEFAULT_RESPONSE);
  const {loading, setLoading} = useGlobalContext();

  // To transform async requests to sync
  const send = async function () {
    setLoading(true);
    setResponse(DEFAULT_RESPONSE);
    try {
      const response = await fetch(
        url,
        Object.assign(DEFAULT_OPTIONS, options)
      );
      const json = await response.json();
      if (response.ok) setResponse(json);
      else setError(json.error.message);
    } catch (error) {
      setResponse(DEFAULT_RESPONSE);
      setError({ error: { message: error } });
    }
    setLoading(false);
  };

  const debounce = () => {
    let func = () => {
      setTimeoutId(null);
      send();
    };
    setTimeoutId(null);
    clearTimeout(timeoutId);
    setTimeoutId(setTimeout(func, delay));
    return () => clearTimeout(timeoutId);
  };

  useEffect(() => {
    if (useDebounce)
      return debounce();
    else
      return send;    
  }, [...dependencies]);

  return { response, loading };
}