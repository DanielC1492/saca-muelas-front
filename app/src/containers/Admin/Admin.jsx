import React, { useEffect,  } from 'react';
import { connect } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { NavbarAdmin } from '../../components/Navbar/Navbar';
import './Admin.css';



const Admin = (props) => {
    
    const history = useHistory();

    // const redirect = async () => {
    //     return setTimeout(() => {
    //         history.push('/allAppointments')
    //     }, 1000)
    // } 
    console.log(props)
    return (
        <div className='adminContainer'>          
            <NavbarAdmin/>

            <div className="info">
                {
                    props.clinic
                    ?
                    <>
                        <div className="profileName">
                            <h3>Name : {`${props.clinic.name}`}</h3>
                        </div>
                        <div className="profilePhone">
                            <h3>Phone : {`${props.clinic.phone}`}</h3>
                        </div>
                        <div className="profileEmail">
                            <h3>Email : {`${props.clinic.email}`}</h3>
                        </div>
                    </>
                    :
                    <>
                        <div>
                            {/* {`Bye ${props.clinic.name}`} */}
                            adios pepe
                            
                        </div>
                    </>
                }
            </div>

            {/* <div className='buttons'>
            <button className='buttonAdmin appointment' name='Appointments' onClick={() => redirect()}>Appointments</button>
            </div> */}
            
          
        </div>
    )



}

const mapStateToProps = state => {
    return {
        clinic: state.adminReducer.admin
    }
}

export default connect(mapStateToProps)(Admin)

