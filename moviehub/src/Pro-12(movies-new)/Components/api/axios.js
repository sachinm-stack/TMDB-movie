import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const api_key = "edc626046f13bd097c35df7adf111672";

async function fetchPopularMovies(page = 1) {
  const response = await axios.get(`${baseUrl}/movie/popular`, {
    params: {
      api_key,
      page,
    },
  });

  return response.data.results;
}

async function fetchTvshows(page = 1) {
  const response = await axios.get(`${baseUrl}/tv/popular`, {
    params: {
      api_key,
      page,
    },
  });

  return response.data.results;
}

async function fetchSearchMovies(page = 1, query = "") {
  if (!query) return [];

  const response = await axios.get(`${baseUrl}/search/movie`, {
    params: {
      api_key,
      page,
      query,
    },
  });

  return response.data.results;
}

async function fetchMovieDetails(movieId) {
  if (!movieId) return {};

  const response = await axios.get(`${baseUrl}/movie/${movieId}`, {
    params: {
      api_key,
    },
  });

  return response.data;
}

async function fetchMovieTrailer(movieId) {
  if (!movieId) return { results: [] };

  const response = await axios.get(`${baseUrl}/movie/${movieId}/videos`, {
    params: {
      api_key,
    },
  });

  return response.data;
}

async function fetchMovieCast(movieId) {
  if (!movieId) return { cast: [] };

  const response = await axios.get(`${baseUrl}/movie/${movieId}/credits`, {
    params: {
      api_key,
    },
  });

  return response.data;
}

async function fetchMovieCredits(movieId) {
  return fetchMovieCast(movieId);
}

async function fetchTrending(page = 1) {
  const response = await axios.get(`${baseUrl}/trending/movie/week`, {
    params: {
      api_key,
      page,
    },
  });

  return response.data.results;
}

export {
  fetchPopularMovies,
  fetchTvshows,
  fetchSearchMovies,
  fetchMovieDetails,
  fetchMovieTrailer,
  fetchMovieCast,
  fetchMovieCredits,
  fetchTrending,
};