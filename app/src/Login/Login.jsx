import React, { useEffect, useState } from 'react';


const Login = () =>{


    const [user, setUser] = useState({
        email = '',
        password = ''
        
    });

    const [mensaje, setMensaje] = useState('');


    useEffect (()=> {

    },[]);

    useEffect(()=> {

    });


    const manageState = (ev) => {
        setUser({...user, [ev.target.name]: ev.target.type === "number" ? +ev.target.value : ev.target.value});
    }

    const sendData = async () => {

        let body = {

            email : user.email,
            password : user.password

        }

        console.log("el body es......",body);
    }

    return(
        <div className='vistaLogin'>
            <pre>{JSON.stringify(user, null,2)}</pre>
            <div className='cardLogin'>

                <p>Email :</p>
                <input type='text' maxLength='50' placeholder="" name="nombre" onChange={manageState}></input>
                <p>Password :</p>
                <input type='text' maxLength='50' placeholder="" name="nombre" onChange={manageState}></input>
                
            </div>
            <button onClick={()=> sendData()}>Login!</button>
            
        </div>

    )



}