import React from 'react'
import './index.css'

export const Button = ({title,onClick,dissabled}) => {
  return (
	<button onClick={onClick} disabled={dissabled} className='btn'>{title}</button>
  )
}