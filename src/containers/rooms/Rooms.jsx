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
      <div className="tanners__rooms-overall_container">
      <div className="tanners__rooms-container">
      <Room image={room_one} room_number="Room 306" room_type="Couples Goals" check_in_btn="Check-in" room_description="Need a comfortable space, for cuddling and snugglish activities with your partner?
This room is totally perfect for romance, with it close knit bed fitted perfectly for couples." room_price="25,000" time="night"/>
      <Room image={room_two} room_number="Room 440" room_type="City Boys TB4L" check_in_btn="Check-in" room_description="A real life room for the gents and city boys. 
It has spacious area for in-house parties, and if you’re the late night reading type, exquisite bed lamps for lighting to aid your reading. " room_price="30,000" time="night"/>
      <Room image={room_three} room_number="Room 250" room_type="The Adventurer" check_in_btn="Check-in" room_description="Do you have an adventurer’s spirit? 
This room with its open area offers great and breathtaking views to the outside from this particular side of the hotel." room_price="15,000" time="night"/>
      </div>
      </div>
    </div>
  )
}

export default Rooms