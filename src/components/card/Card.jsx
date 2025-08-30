import React from 'react'
import './Card.css'

const Card = ({className}) => {
  return (
    <div className="card-container">
        <div className={`card-box ${className}`}></div>
    </div>
  )
}

export default Card