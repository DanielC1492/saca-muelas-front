
import React from 'react';

import './Boton.css';

import {useHistory} from 'react-router-dom';

const Boton = (props) => {

    let history = useHistory();

    const redirectMe = () => {
        history.push(`/${props.destino}`)
    }

    return(
        <div onClick={()=> redirectMe()} className="buttonStyle">
            {props.nombre}
        </div>
    )
}

export default Boton;