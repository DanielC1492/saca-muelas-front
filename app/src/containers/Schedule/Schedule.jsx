import React, { useState } from 'react'
import './Schedule.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { NavbarProfile } from '../../components/Navbar/Navbar';

const Schedule = (props) => {
    const URL = 'http://localhost:3000/appointment/'
    const history = useHistory();
    
    const [schedule,setSchedule] = useState({
        covid: '',
        date: '',
        ProfessionalId: ''
    });


    const stateHandler = (event) => {
        setSchedule({...schedule, 
            [event.target.name]: event.target.type === 'number' ? +event.target.value : event.target.value});

    };

    const handleOnKeyDown = ( event ) => {
        if(event.keyCode === 13) sendData()
    }

    const sendData = async () => {
        console.log('se ha enviado');

        const body = {
            covid: schedule.covid,
            date: schedule.date,
            ProfessionalId: schedule.ProfessionalId
        };

        const checkClient = JSON.parse(localStorage.getItem('client'));
        const token = checkClient.jwt

        const config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }


        const data = await axios.post(URL, body, config);

        console.log(data,'<==============================>')

        return setTimeout(() => {
            history.push('/appointment')
        }, 1000);
          
  
    };
    
    return (
        <div className="viewSchedule">
            <NavbarProfile/>

            <pre>{JSON.stringify(schedule, null,2)}</pre>

            <div className="formCard">
                <p>Covid</p>
                <select name="covid" onChange={stateHandler}>
                    <option value="-----"></option>   
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
                <p>Date</p>
                <input type="date" name="date" onChange={stateHandler}/>
                <p>Professional:</p>
                <input type="text" maxLength="30" placeholder="" name="ProfessionalId" onChange={stateHandler} onKeyDown={handleOnKeyDown}/>
            </div>
            <button className='loginBtn' onClick={()=> sendData()}>Send</button>
        </div>
    )
};

export default Schedule;
