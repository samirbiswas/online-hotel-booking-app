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

        <div className=' col-sm-6 col-md-3'>
                
            <form className='form-design'>
            
                    <div class="form-group">
                    
                    <input type="email" class="form-control"  placeholder="Origin"></input>
                    </div>
                    <div class="form-group">
                  
                    <input type="password" class="form-control" placeholder="Distination"></input>
                    </div>
                    <label for="exampleInputEmail1">From</label>
                    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                    <label for="exampleInputEmail1">To</label>
                        
                    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                        <br/>
                    <button onClick={() => handleBook(id)}  variant="contained" color="primary" >Booking</button>
               
            </form>
        </div>
             
             
        </div>
       
    );
};

export default DetailsInfo;