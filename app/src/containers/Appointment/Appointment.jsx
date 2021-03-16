import React, { useState, useEffect } from 'react'
import { NavbarProfile } from '../../components/Navbar/Navbar'
import axios from 'axios';

const Appointment = (props) => {

    const [appointment,setAppointment] = useState({
        covid: [],
        date: [],
        professionalId: ''

    })
    const checkClient = JSON.parse(localStorage.getItem('Client'));

    useEffect(() => {
        const fetchData = async () => {
        }
        fetchData();
    }, []);
    
    // useEffect(() => {
    //     console.log(appointment)
    // })
    
    const sendData = async () => {
        const data = await axios.get('http://localhost:3000/appointment/', checkClient)
        console.log(data);
        console.log(checkClient);
    };

    const stateHandler = (event) => {
        setAppointment({...appointment, [event.target.name]: event.target.type === "number" ? +event.target.value : event.target.value});
    }


    return (
        <div>
            <NavbarProfile/>
            <button className='loginBtn' onClick={()=> sendData()} onChange={stateHandler} >Show</button>


        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addAppointmentsToRedux : () =>
        dispatch({
            type : 'ADD_APPOINTMENTS',
            payload : ''//lo que venga de los hooks
        })
})

export default Appointment;
