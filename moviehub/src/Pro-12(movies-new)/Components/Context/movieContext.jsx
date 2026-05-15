import React, { createContext, useState, useEffect } from "react";
import {
  fetchPopularMovies,
  fetchSearchMovies,
  fetchTvshows,
  fetchTrending
} from "../api/axios";

import useDebounce from "../hooks/useDebounce";

export const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [tvshow, setTvshow] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);

  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { debounceValue } = useDebounce({ search, delay: 1500 });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        if (!debounceValue) {
          const [moviesRes, tvRes, trendingRes] = await Promise.all([
            fetchPopularMovies(page),
            fetchTvshows(page),
            fetchTrending(page)
          ]);

          setPopularMovies(moviesRes);
          setTvshow(tvRes);
          setTrendingMovies(trendingRes);
        } else {
          const moviesRes = await fetchSearchMovies(page, debounceValue);

          setPopularMovies(moviesRes);
          setTvshow([]);
          setTrendingMovies([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, debounceValue]);

  const handleNext = () => setPage(prev => prev + 1);

  const handlePrev = () =>
    setPage(prev => (prev > 1 ? prev - 1 : prev));

  return (
    <MovieContext.Provider
      value={{
        popularMovies,
        tvshow,
        trendingMovies,
        loading,
        search,
        setSearch,
        page,
        handleNext,
        handlePrev
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;