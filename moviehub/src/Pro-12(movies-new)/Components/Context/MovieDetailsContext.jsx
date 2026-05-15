import React, { createContext, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  fetchMovieDetails,
  fetchMovieTrailer,
  fetchMovieCredits,
} from "../api/axios";

export const MovieDetailsContext = createContext();

const MovieDetailsProvider = ({ children }) => {
  const { id } = useParams();

  const [movie, setMovie] = useState({});
  const [trailer, setTrailer] = useState(null);
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      setLoading(true);

      try {
        const [movieRes, trailerRes, creditsRes] = await Promise.all([
          fetchMovieDetails(id),
          fetchMovieTrailer(id),
          fetchMovieCredits(id),
        ]);

        setMovie(movieRes || {});
        setTrailer(trailerRes?.results?.[0] || null);
        setCredits(creditsRes?.cast || []);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <MovieDetailsContext.Provider
      value={{
        movie,
        trailer,
        credits,
        loading,
      }}
    >
      {children}
    </MovieDetailsContext.Provider>
  );
};

export const useMovieDetails = () => {
  return useContext(MovieDetailsContext);
};

export default MovieDetailsProvider;