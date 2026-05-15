import React from 'react';
import { Link } from 'react-router-dom';

import {
  Card,
  CardTitle,
  CardImage,
  CardDescription,
  CardRating
} from '../../Layout/Card';

import './index.css';

const Trending = ({ trendingMovies = [] }) => {
  return (
    <div className='movie-container'>
      {trendingMovies.map(movie => (
        <Link
          to={`/movie/${movie.id}`}
          key={movie.id}
          style={{ textDecoration: 'none' }}
        >
          <Card>
            <CardImage
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />

            <CardTitle title={movie.title} />

            <CardDescription description={movie.overview} />

            <CardRating rating={movie.vote_average} />
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Trending;