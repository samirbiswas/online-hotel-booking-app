import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../FakeData';
import SimpleMap from '../SimpleMap/SimpleMap';

import './Room.css'
const Room = () => {
    const {bedType} = useParams();
    const room =Data.find(gg=> gg.id == bedType)
   
    return (
        <div className="container d-flex">
            
            
            <div className="image-section col-6">
            <h3>Stay in {room.title}</h3>
            <div className="d-flex">
            <img src={room.roomPic1} alt=""/>
            <div>
                <p>{room.bedDes}  </p>
                <p> Price:{room.price}</p>
            </div>
            </div>
            <div className="d-flex">
            <img src={room.roomPic2} alt=""/>
            <div>
            <p>{room.bedDes} </p>
            <p> Price: {room.price}</p>
            </div>
            </div>
            <div className="d-flex" >
            <img src={room.roomPic3} alt=""/>
            <div>
            <p>{room.bedDes}</p>
            <p> Price: {room.price}</p>
            </div>
            
                
            </div>
            
            
            </div>
            <SimpleMap></SimpleMap>
        </div>
    );
};

export default Room;