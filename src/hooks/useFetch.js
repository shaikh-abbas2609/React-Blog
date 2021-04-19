import { useEffect, useState } from "react";

const useFetch = (url, method) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal, method })
      .then((res) => {
        if (!res.ok) {
          throw Error("Coudn't fetch the resource");
        }
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => abortCont.abort();
  }, [url, method]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
