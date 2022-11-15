import React from 'react'
import './Card.css'
import star from '../../assets/star.svg'

const Card = ({ image }) => {
  return (
    <div>
      <div className="card-container">
        <img src={image} id='card-image' alt="card-images" />
        <div className="name-details">
          <p className='name-p1'>Desert King</p>
          <p className='name-p2'>1MBT per night</p>
        </div>
        <div className="availability-details">
          <p className='availability-p1'>2345km away</p>
          <p className='availability-p2'> available for 2weeks stay</p>
        </div>
        <img src={star} alt="" />
      </div>
    </div>
  )
}
export default Card