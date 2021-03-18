import React, { useState, useEffect } from 'react'
import './ShowAppointments.css'
import axios from 'axios';


const ShowAppointments = () => {

    const [appointments,setAppointment] = useState({
        record: []
    })
   
    
    
    const getAppointments = async () =>{

        const allAppointments = await axios.get('http://localhost:3000/appointment/all')
   
        console.log(allAppointments.data);
        setAppointment({
            ...appointments, record : allAppointments.data
        })
    };

    useEffect(() => {
        getAppointments();
    },[]);

    console.log(getAppointments);

    // const getClients = async () =>{
    //     const clients = await axios.get('http://localhost:3000/clients/')
       
    //     console.log(clients.data);
    // }

    if(!appointments.record?.result){
        return (
            <div>
                <p>There is no appointments</p>
            </div>
        )
    }else{
        return (
            <div>
                {/* <NavbarProfile/> */}
                {/* <button className='loginBtn' onClick={()=> allData()} onChange={stateHandler} >Show</button> */}
                <div className='mapContainer'>
                    {appointments.record?.result.map(consultation => {
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

export default ShowAppointments
