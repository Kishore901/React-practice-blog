import { useState, useEffect } from 'react';
const useFetch = (url) => {
  // blogs
  const [data, setData] = useState(null);

  // Loading condition
  const [isPending, setisPending] = useState(true);

  //state for error handling
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error('Coud not fetch the data for the resource');
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setisPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          setisPending(false);
          setError(err.message);
        }
      });

    return () => {
      abortCont.abort();
    };
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
