import React, { useState, useEffect } from 'react'
import { NavbarProfile } from '../../components/Navbar/Navbar'
import axios from 'axios';

const Appointment = () => {

    const [appointment,setAppointment] = useState({
        covid: '',
        date: '',
        clientId: '',
        
    })

    useEffect( async () => {
        const checkClient = JSON.parse(localStorage.getItem('client'));
        console.log(checkClient,'CHECKCLIENT<================')
        const allClientAppointment = await allData(checkClient.jwt)
        console.log(allClientAppointment.data.result);
    }, []);
        
    const allData = async (token) => {
        console.log( 'estoy en ALLDATA')
        return axios.get('http://localhost:3000/appointment/', {
            headers: {
              'Authorization': `token ${token}`
            }
        })
    };

    const stateHandler = (event) => {
        setAppointment({...appointment, [event.target.name]: event.target.type === "number" ? +event.target.value : event.target.value});
    }


    return (
        <div>
            <NavbarProfile/>
            <button className='loginBtn' onClick={()=> allData()} onChange={stateHandler} >Show</button>


        </div>
    )
}

export default Appointment
