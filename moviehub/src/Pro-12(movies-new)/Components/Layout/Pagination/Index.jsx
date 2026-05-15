import React from 'react'
import { Button } from '../../Ui/Button'
import './index.css'

const index = ({handlePrev,handleNext,page}) => {
  return (
	<div className='pagination'>
	<Button title='Prev' onClick={handlePrev} dissabled={page===1} />
		<span>{page}</span>
		<Button title='Next' onClick={handleNext} />
	</div>
  )
}

export default index