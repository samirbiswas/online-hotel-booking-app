import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../FakeData'
const Room = () => {
    const {bedType} = useParams();
    const room =Data.find(gg=> gg.id == bedType)
   
    return (
        <div className="container ">
            <h1>Stay in {room.title}</h1>
            <h2>Bed: {room.bed}</h2>
            <div className="d-flex">
            
          
            <img src={room.roomPic} alt=""/>
            <div>
                <p>{room.bedDes}</p>
            </div>
            </div>
        </div>
    );
};

export default Room;