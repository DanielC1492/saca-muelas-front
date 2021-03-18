import React, { useState, useEffect } from 'react'
import { NavbarProfile } from '../../components/Navbar/Navbar'
import axios from 'axios';
import './Appointment.css';

const Appointment = () => {

    const [appointment,setAppointment] = useState({
        future: []
    })

    const URL = 'http://localhost:3000/appointment/'
    
    useEffect(() => {
        allData();
    },[]);
    
    
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
        setAppointment({...appointment, future: appointmentData.data})
    };

    // const clickMe = (argument) => {
    //     console.log(argument,'ARGUMENT')
    // }

    console.log(appointment.future,'<===================SET==========>')
    if(!appointment.future?.result){
        return (
            <div>
                <p>LOADING...</p>
            </div>
        )
    }else{
        return (
            <div>
                <NavbarProfile/>
                {/* <button className='loginBtn' onClick={()=> allData()} onChange={stateHandler} >Show</button> */}
                <div className='mapContainer'>
                    {appointment.future?.result.map(consultation => {
                        return (
                            <div className='dataCollection' key={consultation.id} /*onClick={()=> clickMe(consultation)}*/>
                                <div className='professional'>
                                    Professional: {consultation.ProfessionalId}
                                    {/* moment.format('Do-MMMM-YYYY')} */}
                                </div>
                                <div className='id'>
                                    Appointment: {consultation.id}
                                </div>
                                <div className='covid'>
                                    Covid: {JSON.stringify(consultation.covid)}
                                </div>
                                <div className='date'>
                                    Date: {consultation.date}
                                </div>
                            </div>
                        )
                    
                    })}
                </div>
    
            </div>
        )
    }
}

export default Appointment
