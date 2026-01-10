import { useState, useEffect } from "react";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          import.meta.env.VITE_GOOGLE_API_KEY
        }&cx=${import.meta.env.VITE_GOOGLE_CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };

    if (term) {
      fetchData();
    }
  }, [term]);

  return { data };
};

export default useGoogleSearch;
