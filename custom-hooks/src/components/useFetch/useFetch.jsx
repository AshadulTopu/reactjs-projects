// when ever you make custom hook you need to understand what is the requirement, what is the parameters are pass and what is the return value.

import { useEffect, useState } from "react";

const useFetch = (url, options = {}) => {
  // state
  const [pending, setPending] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // function
  const fetchData = async () => {
    setPending(true);
    try {
      const response = await fetch(url, { ...options });
      const json = await response.json();
      setData(json);
    } catch (error) {
      setError(error);
    } finally {
      setPending(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);
  return { pending, data, error };
};

export default useFetch;
