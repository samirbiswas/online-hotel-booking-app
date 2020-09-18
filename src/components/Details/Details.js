import React from 'react';
import { useParams } from 'react-router-dom';
import FakeData from '../../FakeData'
import DetailsInfo from '../DetailsInfo/DetailsInfo';



const Details = () => {
    const {roomId} = useParams();
    console.log(FakeData);
    const data = FakeData.find(dt => dt.id == roomId);
    
    
    return (
       
            <div className='container'>
                <div className='background'>
            <div className='row '>
                
                <DetailsInfo data={data}></DetailsInfo>
                </div>
    
           </div>
           </div>
       
    );
};

export default Details;