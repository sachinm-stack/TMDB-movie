import React from 'react'
import {Card, CardTitle, CardImage, CardDescription, CardRating} from '../../Layout/Card';
import './index.css'

const index = ({popularMovies}) => {
  return (
	<div className='movie-container'>
			{popularMovies.map(movie=>(
				<Card key={movie.id}>
					<CardImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
					<CardTitle title={movie.title} />
					<CardDescription description={movie.overview} />
					<CardRating rating={movie.vote_average} />
				</Card>
			))}
		</div>
  )
}

export default index