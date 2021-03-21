import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { NavbarAdmin } from '../../components/Navbar/Navbar';
import './ShowClients.css'


const ShowClients = () => {

    const [clients,setClient] = useState({
        record: []
    })
   
    const history = useHistory();

    useEffect(() => {
        getClients();
    },[]);

    
    const getClients = async () =>{

        const allClients = await axios.get('http://localhost:3000/clients')
   
        console.log(allClients.data);
        setClient({
            ...clients, record : allClients.data
        })
    };

    const clickMe = async (argument) => {
        console.log(argument)
        
        const selectClient = window.confirm('You are about to delete this user, are you sure?');

        if(selectClient == true){
            const deleteClient = await axios.delete('http://localhost:3000/clients/' + `${argument.id}`)
            console.log(deleteClient);

            return setTimeout(() => {
                history.push('/admin')
            }, 1000);
        }
    }

    console.log(clients,'ESTOY SETEANDO<=========')

    if(!clients?.record){
        return (
            <div>
                <p>There is no clients</p>
            </div>
        )
    }else{
        return (
            <div>
                <NavbarAdmin/>
                {/* <button className='loginBtn' onClick={()=> allData()} onChange={stateHandler} >Show</button> */}
                <div className='mapContainer'>
                    {clients?.record.map(consultation => {
                        return (
                            <div className='dataCollection' key={consultation.id} onClick={()=> clickMe(consultation)}>
                                <div className='id'>
                                    ID: {consultation.id}
                                </div>
                                <div className='name'>
                                    Name: {consultation.name}
                                </div>
                                <div className='phone'>
                                    Phone: {JSON.stringify(consultation.phone)}
                                </div>
                                <div className='email'>
                                    Email: {JSON.stringify(consultation.email)}
                                </div>
                            </div>
                        )
                    
                    })}
                </div>
    
            </div>
        )
    }
}

export default ShowClients
