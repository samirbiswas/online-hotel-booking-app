import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = (props) => {
    const {title,sliderImg,id} = props.data;
   

    return (
        <div className="">
                <div className= 'col-md-8 margin-right'>
                        <div className="image-text">
                            <Link to={`/room/${id}`}>
                        <img src={sliderImg} alt=""/>
                        <div className="text-block">
                             <h4>{title}</h4>
                             
                            
                        </div>
                        </Link>
                        </div>
                       

                    </div>
       
        </div>
    );
};

export default Banner;