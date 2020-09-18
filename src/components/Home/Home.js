import React, { useState } from 'react';
import Data from '../../FakeData'
import Banner from '../Banner/Banner';
import './Home.css'

const Home = () => {
    const [data] = useState(Data);
   
    return (
        
        <div className='container'>
            
        <div className="background">
           
            <div className ="row margin-a">
            {data.map(da=> <Banner key={da.id} data={da} ></Banner>)}
           
            </div>
        </div>
        
        </div>
    );
};

export default Home;