import React, { useEffect,  } from 'react';

import {useHistory} from 'react-router-dom';
import { NavbarAdmin } from '../../components/Navbar/Navbar';
import './Admin.css';



const Admin = (props) => {
    
    const history = useHistory();

    // useEffect(() =>{
    //     const fetchData = async () => {

    //     }
    //     fetchData();
    // }, []);

    const redirect = async () => {
        return setTimeout(() => {
            history.push('/allAppointments')
        }, 1000)
    } 
    

    

    return (
        <div>
          
            WELCOME BACK GEEK 
            <NavbarAdmin>
                
            </NavbarAdmin>
           
            
            <div className='buttons'>
            <button className='buttonAdmin appointment' name='Appointments' onClick={() => redirect()}>Appointments</button>
            {/* <button className='buttonAdmin client' name='Clients' onClick={() => getClients()}>Clients</button> */}
            </div>
            
          
        </div>
    )



}






export default Admin;