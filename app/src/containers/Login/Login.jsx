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

        const body = {
            email: user.email,
            password: user.password
        };

        const data = await axios.post('http://localhost:3000/clients/login', body);

        console.log(data);
    };

    return(
        <div className='viewLogin'>
            {/* <pre>{JSON.stringify(dataLogin, null,2)}</pre> */}
            <div className='cardLogin'>
                <p>Email :</p>
                <input type='text' className='emailInput' maxLength='50' placeholder="" name="email" onChange={stateHandler}></input>
                <p>Password :</p>
                <input type='password' className='passInput' maxLength='50' placeholder="" name="password" onChange={stateHandler}></input>
                <div className='showPWDiv'>
                <input type='checkbox' className='showPW' name='showPS'></input>
                <p className='showPWText'>Show Password</p>
                </div>
                <button className='loginBtn' onClick={()=> sendData()}>Login!</button>
                <div className='createAccount'>
                Not a client?Sign up mothafocka
                </div>
            </div>
            
               
        </div>
    )
}

export default Login;