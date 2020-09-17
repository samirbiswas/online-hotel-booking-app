import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from 'react-router-dom';
import './DetailsInfo.css'

const DetailsInfo = (props) => {
    const {title,description,id } = props.data;
    const history = useHistory()
    const handleBook = (bedType) => {
        history.push(`/book/${bedType}`);
    }

    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="d-flex ">

            <div className='col-8 descripyion-area'>
             <h1>{title}</h1>
             <p>{description}</p>

             </div>

             <div className='col-4 form-design'>
                
            <form action="" >
                <div > 
                <input type="text" placeholder='From' required/>
                <br/>
                <input type="text" placeholder='To' required/>
                <br/>
                
                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                <br/>
                
                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                <br/>
                <button onClick={() => handleBook(id)}  variant="contained" color="primary" >Booking</button>
                </div>
                </form>
             </div>
             
             
        </div>
       
    );
};

export default DetailsInfo;