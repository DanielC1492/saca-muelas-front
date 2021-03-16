import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Boton from '../../components/Boton/Boton';
import './Login.css'


const Login = (props) =>{

    const history = useHistory();

    const [user, setUser] = useState({
        email : '',
        password : ''
        
    });

    // useEffect (()=> {

    // },[]);

    // useEffect(()=> {

    // });


    const stateHandler = (event) => {
        setUser({...user, [event.target.name]: event.target.type === "number" ? +event.target.value : event.target.value});
    }

    const handleOnKeyDown = ( event ) => {
        if(event.keyCode === 13) sendData()
    }

    const sendData = async () => {

        const body = {
            email: user.email,
            password: user.password
        };

        const data = await axios.post('http://localhost:3000/clients/login', body)
        .then(res => {
            console.log(res.data.token);
            localStorage.setItem("token", JSON.stringify(res.data.token))
            localStorage.setItem("Client", JSON.stringify(res.data))
        })    
        
        return setTimeout(() => {
            history.push('/profile')
        }, 1000);
        // console.log(data);
        
    };

    const redirect = () => {
        return setTimeout(() => {
          history.push('/register')
        }, 1000);

    }

    return(
        <div className='viewLogin'>
            {/* <pre>{JSON.stringify(dataLogin, null,2)}</pre> */}
            <div className='cardLogin'>
                <p>Email :</p>
                <input type='text' className='emailInput' maxLength='50' placeholder="" name="email" onChange={stateHandler}></input>
                <p>Password :</p>
                <input type='password' className='passInput' maxLength='50' placeholder="" name="password" onChange={stateHandler} onKeyDown={handleOnKeyDown} ></input>
                <div className='showPWDiv'>
                <input type='checkbox' className='showPW' name='showPS'></input>
                <p className='showPWText'>Show Password</p>
                </div>
                <button className='loginBtn' onClick={()=> sendData()}>Login</button>
                <div onClick={() => redirect()} className='createAccount'>
                Not a client? Sign up.
                </div>
                <div className="button">
                    <Boton name='Volver'  destination=''/>
                </div>
            </div>  
        </div>
    )
}

export default Login;