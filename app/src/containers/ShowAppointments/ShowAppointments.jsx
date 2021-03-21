import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import { NavbarAdmin } from '../../components/Navbar/Navbar';
import './ShowAppointments.css'


const ShowAppointments = () => {

    const [appointments,setAppointment] = useState({
        record: []
    })
   
    const history = useHistory();

    useEffect(() => {
        getAppointments();
    },[]);

    
    const getAppointments = async () =>{

        const allAppointments = await axios.get('http://localhost:3000/appointment/all')
   
        console.log(allAppointments.data);
        setAppointment({
            ...appointments, record : allAppointments.data
        })
    };

    const clickMe = async (argument) => {
        console.log(argument)
        
        const selectAppointment = window.confirm('You are about to delete your appointment, are you sure?');

        if(selectAppointment == true){
            const deleteAppointment = await axios.delete('http://localhost:3000/appointment/' + `${argument.id}`)
            console.log(deleteAppointment);

            return setTimeout(() => {
                history.push('/admin')
            }, 1000);
        }
    }

    console.log(appointments,'ESTOY SETEANDO<=========')

    if(!appointments.record?.result){
        return (
            <div>
                <p>There is no appointments</p>
            </div>
        )
    }else{
        return (
            <div>
                <NavbarAdmin/>
                {/* <button className='loginBtn' onClick={()=> allData()} onChange={stateHandler} >Show</button> */}
                <div className='mapContainer'>
                    {appointments.record?.result.map(consultation => {
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

export default ShowAppointments
