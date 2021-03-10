import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Login = () =>{


    const [user, setUser] = useState({
        email : '',
        password : ''
        
    });

    const [message, setMessage] = useState('');


    useEffect (()=> {

    },[]);

    useEffect(()=> {

    });


    const stateHandler = (ev) => {
        setUser({...user, [ev.target.name]: ev.target.type === "number" ? +ev.target.value : ev.target.value});
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
            <pre>{JSON.stringify(user, null,2)}</pre>
            <div className='cardLogin'>

                <p>Email :</p>
                <input type='text' maxLength='50' placeholder="" name="email" onChange={stateHandler}></input>
                <p>Password :</p>
                <input type='password' maxLength='50' placeholder="" name="password" onChange={stateHandler}></input>
                
            </div>
            <button onClick={()=> sendData()}>Login!</button>

        </div>

    )



}

export default Login;