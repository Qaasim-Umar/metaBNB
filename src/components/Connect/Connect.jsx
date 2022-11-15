import React from 'react'
import './Connect.css'

const Connect = ({ id }) => {
  return (
    <div>
      <button className='connect-btn' id={id} >Connect wallet</button>
    </div>
  )
}
export default Connect