import React from 'react'
import './rooms.css';
import {Room} from '../../components';
import { room_one, room_two, room_three } from './import'
const Rooms = () => {
  return (
    <div className="tanners__rooms">
      <div className="tanners__rooms-heading">
        <ul>
          <li>POPULAR ROOMS</li>
        </ul>
      </div>
      <div className="tanners__rooms-container">
      <Room image={room_one} room_number="Room 306"/>
      <Room image={room_two}/>
      <Room image={room_three} />
      </div>
    </div>
  )
}

export default Rooms