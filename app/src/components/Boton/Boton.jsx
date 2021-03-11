
import React from 'react';
import './Boton.css';
import {useHistory} from 'react-router-dom';

const Boton = (props) => {

    const history = useHistory();

    const redirectMe = () => {
        history.push(`/${props.destination}`)
    }

    return(
        <div onClick={()=> redirectMe()} className="buttonStyle">
            {props.name}
        </div>
    )
}

export default Boton;