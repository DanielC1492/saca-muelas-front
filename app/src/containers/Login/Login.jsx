import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Login.css'


const Login = () =>{


    const [dataLogin, setDataLogin] = useState({
        email : '',
        password : ''
        
    });

    const [message, setMessage] = useState('');


    useEffect (()=> {

    },[]);

    useEffect(()=> {

    });


    const stateHandler = (ev) => {
        setDataLogin({...dataLogin, [ev.target.name]: ev.target.type === "number" ? +ev.target.value : ev.target.value});
    }

    const sendData = async () => {
        console.log('se ha enviado');

        const body = {
            email: dataLogin.email,
            password: dataLogin.password
        };

        const data = await axios.post('http://localhost:3000/clients', dataLogin);
        console.log(data);
    };

    return(
        <div className='viewLogin'>
            <pre>{JSON.stringify(dataLogin, null,2)}</pre>
            <div className='cardLogin'>

                <p>Email :</p>
                <input type='text' className='emailInput' maxLength='50' placeholder="" name="email" onChange={stateHandler}></input>
                <p>Password :</p>
                <input type='password' className='passInput' maxLength='50' placeholder="" name="password" onChange={stateHandler}></input>
                <button className='loginBtn' onClick={()=> sendData()}>Login!</button>
            </div>
           

            
        </div>

    )



}

export default Login;