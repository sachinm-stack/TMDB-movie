import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from "../../Ui/Button";
import Modal from '../../Ui/Modal'
import useModal from '../../hooks/useModal'
import Youtube from 'react-youtube'
import { useMovieDetails } from '../../Context/MovieDetailsContext'
import { formatDateToDDMMYYYY } from '../../utils/formatDate'
import './index.css'
import { fetchMovieCast } from '../../api/axios'

const MovieDetailsContent = () => {
	const navigate = useNavigate()
	const { movie, trailer, loading } = useMovieDetails()
	const { isOpen, handleOpen, handleClose } = useModal()


	const id = movie.id
	const[cast,setCast] = React.useState([])

	useEffect(()=>{
		fetchMovieCast(id)
		.then(data => setCast(data.cast))
	})
	

	if (loading) return <p>Loading...</p>

	return (
		<div className='movie-details'>
			<h1 className='movie-title'>{movie.original_title}</h1>
			<img
				className='movie-image'
				src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
				alt={movie.original_title}
			/>
			<p className='movie-overview'>{movie.overview}</p>
			<p className='movie-release'>
				Release Date: {formatDateToDDMMYYYY(movie.release_date)}
			</p>
			<p className='movie-rating'>
				Rating: {movie.vote_average}
			</p>
			<Button onClick={() => navigate('/')} title={'Back'} />
			<Button title={'Watch Trailer'} onClick={handleOpen} />

			<Modal title={'Trailer'} isOpen={isOpen} onClose={handleClose}>
				{trailer && <Youtube videoId={trailer.key} />}
			</Modal>

			<div className='cast-list'>
			{
				cast.slice(0,8).map((item)=>{
					return(
						<div key={item.id} className='cast-item'>
							<img src={`https://image.tmdb.org/t/p/original${item.profile_path}`} alt={item.name} className='cast-image' />	
						</div>
					)
				})
			}
			</div>

		</div>
	)
}

export default MovieDetailsContent