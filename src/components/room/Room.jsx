import React from 'react'
import './room.css';

const Room = ({image,room_number,room_type,check_in_btn,room_description,room_price,time}) => {
  return (
    <div className='tanners__room'>
<div className="tanners__room-image_container">
  <div className="tanners__room-image_content">
    <div style={{backgroundImage: `url(${image})`}} className="tanners__room-image">
  <div className="tanners__room-image-text">
    <div className='tanners__room-numtype'>
      <h1>{room_number}</h1>
    <h2>{room_type}</h2>
    </div>
    <div className='tanners__room-button'>
      <button>{check_in_btn}</button>
    </div>
  </div>
  </div>
  </div>
</div>
<div className="tanners__room-description">
  <p>{room_description}</p>
  <h3>N{room_price}<span>/{time}</span></h3>
</div>
    </div>
  )
}

export default Room