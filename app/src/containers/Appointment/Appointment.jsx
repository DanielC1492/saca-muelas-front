import React, { useState, useEffect } from 'react'
import { NavbarProfile } from '../../components/Navbar/Navbar'
import axios from 'axios';

const Appointment = () => {

    const [appointment,setAppointment] = useState([])
    const URL = 'http://localhost:3000/appointment/'
    
    useEffect(() => {
        allData();
    },[setAppointment]);
    
    
    const allData = async () => {
        const checkClient = JSON.parse(localStorage.getItem('client'));
        const token = checkClient.jwt
        // console.log(token)
    
        const config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        const appointmentData = await axios.get(URL, config)
        console.log(appointmentData.data);
        return appointmentData
    };

    const stateHandler = (event) => {
        setAppointment({...appointment, [event.target.name]: event.target.type === "number" ? +event.target.value : event.target.value});
        console.log(setAppointment())
    }


    return (
        <div>
            <NavbarProfile/>
            <button className='loginBtn' onClick={()=> allData()} onChange={stateHandler} >Show</button>
            <div>
                {JSON.stringify(appointment, null,2)}
            </div>

        </div>
    )
}

export default Appointment
