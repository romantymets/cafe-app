import { useEffect, useState } from "react";
import fetchPopularMovies from "../Api/api";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetchPopularMovies(url)
      .then((response) => {
        setIsLoading(false);
        const { drinks } = response;
        setData(drinks);
      })
      .catch(error => console.log(error));
  }, [url, setData, setIsLoading]);
  return [isLoading, data];
};

export default useFetch;
