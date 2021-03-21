import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Boton from '../../components/Boton/Boton';
import './Login.css'
import { connect } from 'react-redux';
import { LOGIN } from "../../redux/types/userTypes";
import { ADMINLOGIN } from "../../redux/types/adminTypes";


const Login = (props) =>{

    const history = useHistory();

    const [user, setUser] = useState({
        email : '',
        password : '',
        userType: 'Client'
        
    });

    const [message, setMessage] = useState('')

    const stateHandler = (event) => {
        setUser({...user, [event.target.name]: event.target.type === "number" ? +event.target.value : event.target.value});
    }

    const handleOnKeyDown = ( event ) => {
        if(event.keyCode === 13) sendData()
    }
    
    const sendData = async () => {

        try {
            
            if(user.userType === 'Client'){
                console.log('HOLIWI ESTOY EN EL IF TAL CUAL')
                const body = {
                    email: user.email,
                    password: user.password
                };

                const res = await axios.post('http://localhost:3000/clients/login', body)
                console.log(res)
                localStorage.setItem("token", JSON.stringify(res))
                localStorage.setItem("client", JSON.stringify(res.data.client))
                props.dispatch({type: LOGIN, payload: res.data})
                
                
                return setTimeout(() => {
                    history.push('/profile')
                }, 1000)
   
            }else{

                console.log('HOLI LA MOVIDA TAL QUE TE CONTÉ PUES AQUI NO ENTRA')
                const resAdmin = await axios.post('http://localhost:3000/clinic/login', user)
                localStorage.setItem("token", JSON.stringify(resAdmin))
                localStorage.setItem("clinic", JSON.stringify(resAdmin.data.clinic))
                props.dispatch({type: ADMINLOGIN, payload: resAdmin.data})

                return setTimeout(() => {
                    history.push('/admin')
                }, 1000)
            }
        } catch(error){
            setMessage('Email or password not found');
        }
    };
    
    const redirect = () => {
        return setTimeout(() => {
          history.push('/register')
        }, 1000);

    }


    const [password, setPassword] = useState({
        hideShow : 'password'
    });
    
    const [checkbox, setCheckbox] = useState(false) 
    
    const toggle = () => {
        setCheckbox(!checkbox);
        if(password.hideShow === 'password' ){
            return setPassword({
                ...password,hideShow: 'text'
            })
        }else{
            return setPassword({
                ...password,hideShow : 'password'
            })
        }
    }

    return(
        <div className='viewLogin'>
            {/* <pre>{JSON.stringify(dataLogin, null,2)}</pre> */}
            <div className='cardLogin'>
                <p>Email :</p>
                <input type='text' className='emailInput' maxLength='50' placeholder="" name="email" onChange={stateHandler}></input>
                <p>Password :</p>
                <input type={password.hideShow} className='passInput' maxLength='50' placeholder="" name="password" onChange={stateHandler} onKeyDown={handleOnKeyDown} ></input>
                <div className='showPWDiv'>
                <input checked= {checkbox} type= 'checkbox' onChange={() => toggle()} className='showPW' name='showPS'></input>
                <p className='showPWText'>Show Password</p>
                </div>
                <select className="select" name="userType" defaultValue={'DEFAULT'} onChange={stateHandler}>
                    <option value="Client">Client</option>
                    <option value="Admin">Admin</option>
                </select>
                <button className='loginBtn' onClick={()=> sendData()}>Login</button>
                <div onClick={() => redirect()} className='createAccount'>
                Not a client? Sign up.
                </div>
                <div className="button">
                    <Boton name='Back'  destination=''/>
                </div>
            </div>  
        </div>
    )
}

export default connect() (Login);
    