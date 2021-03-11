import React from 'react'
import Boton from '../../components/Boton/Boton'
import './Home.css'

const Home = () => {
    return (
        <div className='homeContainer'>
            <div>
                Estoy en Home
            </div>
            <div className='buttonStyle'>
                <Boton name='Register' destination='register'/>
            </div>
        </div>
    )
}

export default Home
