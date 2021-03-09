import React, {useState} from 'react'
import './Register.css';

const Register = (props) => {
    
    const [user,setUser] = useState({
        name: '',
        phone: '',
        email: '',
        password: ''
    });

    const stateHandler = (event) => {
        setUser({...user, 
            [event.target.name]: event.target.type === 'number' ? +event.target.value : event.target.value});

    };


    return (
        <div className="viewRegister">
                <div className="formCard">
                    <p>Name:</p>
                    <input type="text" maxLength="30" placeholder="" name="name" onChange={stateHandler}/>
                    <p>Phone:</p>
                    <input type="text" maxLength="30" placeholder="678472162" name="phone" onChange={stateHandler}/>
                    <p>Email:</p>
                    <input type="email" maxLength="50" placeholder="name@gmail.com" name="email" onChange={stateHandler}/>
                    <p>Password:</p>
                    <input type="password" maxLength="200" placeholder="" name="" onChange={stateHandler} />
            </div>
 
        </div>
    )
};

export default Register
