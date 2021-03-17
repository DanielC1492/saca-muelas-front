import React, { useEffect } from 'react';
import axios from 'axios';
import './Admin.css';


const Admin = (props) => {
    

    useEffect(() =>{
        const fetchData = async () => {

        }
        fetchData();
    }, []);


    const getAppointments = async () =>{

        const appointments = await axios.get('http://localhost:3000/appointment/all')
   
        console.log(appointments.result);
    };

    const getClients = async () =>{
        const clients = await axios.get('http://localhost:3000/clients/')
       
        console.log(clients.data);
    }


    


    return (
        <div>
          
            WELCOME BACK GEEK
           
            <div>
            <div className='promo p1'>
               <div className='text t1'> Carillas 25%</div>
            </div>
            <div className='promo p2'><div className='text t'> Implantes 50%</div></div>
            </div>
            
            <div className='buttons'>
            <button className='buttonAdmin appointment' name='Appointments' onClick={() => getAppointments()}>Appointments</button>
            <button className='buttonAdmin client' name='Clients' onClick={() => getClients()}>Clients</button>
            </div>
            
          
        </div>
    )



}






export default Admin;