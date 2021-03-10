import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'


const Login = (props) =>{


    const [user, setUser] = useState({
        email : '',
        password : ''
        
    });

    const [message, setMessage] = useState('');


    // useEffect (()=> {

    // },[]);

    // useEffect(()=> {

    // });


    const stateHandler = (event) => {
        setUser({...user, [event.target.name]: event.target.type === "number" ? +event.target.value : event.target.value});
    }

    const sendData = async () => {
        console.log('se ha enviado');

        const body = {
            email: user.email,
            password: user.password
        };


        const data = await axios.post('http://localhost:3000/clients/login', body);

        console.log(data);
    };

    return(
        <div className='viewLogin'>
            {/* <pre>{JSON.stringify(user, null,2)}</pre> */}
            <div className='cardLogin'>

                <p>Email :</p>
                <input type='text' className='emailInput' maxLength='50' placeholder="" name="email" onChange={stateHandler}></input>
                <p>Password :</p>
                <input type='password' className='passInput' maxLength='50' placeholder="" name="password" onChange={stateHandler}></input>
                <button className='loginBtn' onClick={()=> sendData()}>Login!</button>
                <div>{message}</div>
            </div> 
        </div>
    )
}

export default Login;