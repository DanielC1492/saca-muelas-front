import React, { useState, useEffect } from 'react'
import { NavbarProfile } from '../../components/Navbar/Navbar'
import { useHistory } from 'react-router-dom';

import axios from 'axios';
import moment from 'moment';
import './Appointment.css';

const Appointment = () => {

    const [appointment,setAppointment] = useState({
        future: []
    })

    const history = useHistory();


    const URL = 'http://localhost:3000/appointment/'
    
    useEffect(() => {
        allData();
    },[]);
    
    
    const allData = async () => {
        const checkClient = JSON.parse(localStorage.getItem('token'));
        console.log(checkClient)
        const token = checkClient.data.token
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
    
    const clickMe = async (argument) => {
        console.log(argument)
        const checkClient = JSON.parse(localStorage.getItem('token'));
        const token = checkClient.data.token

        const config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        const doAppointment = window.confirm('You are about to delete your appointment, are you sure?')
        if(doAppointment == true){
            const appointmentData = await axios.delete(URL + `${argument.id}`, config)
            console.log(appointmentData);

            return setTimeout(() => {
                history.push('/profile')
            }, 1000);
        }
        /*`http://localhost:3000/appointment/${argument.id}`*/
    }

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
                            <div className='dataCollection' key={consultation.id} onClick={()=> clickMe(consultation)}>
                                <div className='professional'>
                                    Professional: {consultation.ProfessionalId}
                                </div>
                                <div className='id'>
                                    Appointment: {consultation.id}
                                </div>
                                <div className='covid'>
                                    Covid: {JSON.stringify(consultation.covid)}
                                </div>
                                <div className='date'>
                                    Date: {moment(consultation.date).format('DD MM YYYY hh:mm:ss')}
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
