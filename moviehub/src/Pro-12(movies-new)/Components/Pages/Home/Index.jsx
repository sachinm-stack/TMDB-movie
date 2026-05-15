import React from 'react'
import {Card, CardTitle, CardImage, CardDescription, CardRating,CardReleaseDate} from '../../Layout/Card';
import { Link } from 'react-router-dom';
import './index.css'


const index = ({popularMovies}) => {
  return (
	<div className='movie-container'>
			{popularMovies.map(movie=>(
				<Card key={movie.id}>
					<Link to={`/movie/${movie.id}`}><CardImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} /></Link>
					<CardTitle title={movie.title} />
					<CardDescription description={movie.overview} />
					<CardRating rating={movie.vote_average} />
					<CardReleaseDate releaseDate={movie.release_date} />
				</Card>
			))}
		</div>
  )
}

export default index