import React, { Suspense, lazy, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import Loader from './Components/Ui/Loader';
import MoviePage from './Components/Pages/MovieDetails';
import MovieDetailsProvider from './Components/Context/MovieDetailsContext';
import Pagination from './Components/Layout/Pagination';
import { MovieContext } from './Components/Context/movieContext';

import './App.css';

const Home = lazy(() => import('./Components/Pages/Home'));
const Tvshow = lazy(() => import('./Components/Pages/Tvshows'));
const Trending = lazy(() => import('./Components/Pages/Trending'));

const App = () => {
  const {
    search,
    setSearch,
    popularMovies,
    tvshow,
    trendingMovies,
    loading,
    page,
    handleNext,
    handlePrev
  } = useContext(MovieContext);

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar search={search} setSearch={setSearch} />

        <Routes>
          <Route
            path='/'
            element={
              <Suspense fallback={<Loader />}>
                {loading ? <Loader /> : <Home popularMovies={popularMovies} />}
                <Pagination page={page} handleNext={handleNext} handlePrev={handlePrev} />
              </Suspense>
            }
          />

          <Route
            path='/tvshow'
            element={
              <Suspense fallback={<Loader />}>
                {loading ? <Loader /> : <Tvshow popularMovies={tvshow} />}
                <Pagination page={page} handleNext={handleNext} handlePrev={handlePrev} />
              </Suspense>
            }
          />

          <Route
            path='/trending'
            element={
              <Suspense fallback={<Loader />}>
                {loading ? <Loader /> : <Trending trendingMovies={trendingMovies} />}
                <Pagination page={page} handleNext={handleNext} handlePrev={handlePrev} />
              </Suspense>
            }
          />

          <Route
            path='/movie/:id'
            element={
              <MovieDetailsProvider>
                <MoviePage />
              </MovieDetailsProvider>
            }
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;