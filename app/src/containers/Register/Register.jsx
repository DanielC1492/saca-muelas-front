import React, {useState} from 'react'
import './Register.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import checkError from '../../tools/error.handlers'
import { Navbar } from '../../components/Navbar/Navbar';

const Register = (props) => {

    const history = useHistory();
    
    const [user,setUser] = useState({
        name: '',
        phone: '',
        email: '',
        password: ''
    });

    const [message,setMessage] = useState('');

    const stateHandler = (event) => {
        setUser({...user, 
            [event.target.name]: event.target.type === 'number' ? +event.target.value : event.target.value});

    };

    const handleOnKeyDown = ( event ) => {
        if(event.keyCode === 13) sendData()
    }


    const sendData = async () => {
        console.log('se ha enviado');

        const body = {
            name: user.name,
            phone: user.phone,
            email: user.email,
            password: user.password
        };


        //Error management

        setMessage('');

        let errorMessage = checkError(user);
        
        setMessage(errorMessage);

        if(errorMessage){
            return;
        }

        const data = await axios.post('http://localhost:3000/clients', body)
        console.log(data)

        return setTimeout(() => {
            history.push('/login')
        }, 1000);
          
  
    };
    
    return (
        <div className="viewRegister">
            <Navbar/>

            <pre>{JSON.stringify(user, null,2)}</pre>

            <div className="formCard">
                <p>Name:</p>
                <input type="text" maxLength="30" placeholder="" name="name" onChange={stateHandler} onKeyDown={handleOnKeyDown}/>
                <p>Phone:</p>
                <input type="text" maxLength="30" placeholder="678472162" name="phone" onChange={stateHandler} onKeyDown={handleOnKeyDown}/>
                <p>Email:</p>
                <input type="email" maxLength="50" placeholder="name@gmail.com" name="email" onChange={stateHandler} onKeyDown={handleOnKeyDown}/>
                <p>Password:</p>
                <input type="password" maxLength="200" placeholder="" name="password" onChange={stateHandler} onKeyDown={handleOnKeyDown}/>
            </div>
            <button className='loginBtn' onClick={()=> sendData()}>Send</button>

            <div className='errorMessage'>{message}</div>
        </div>
    )
};

export default Register
