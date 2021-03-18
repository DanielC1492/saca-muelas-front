import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import './Home.css'
import { Carousel } from 'antd';
import 'antd/lib/carousel/style/index.css'
import Footer from '../../components/Footer/Footer'
import promo from '../../img/promo.png';

import { Card } from 'antd';
// import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';


const Home = () => {
    return (
        <div className='homeContainer'>
            <Navbar/>
            
                   
            <div className='IMG'>
                <img className='promoIMG' src={promo} alt=''></img>    
            </div>  
         
            
            <div className='midSec'>
                <div className='text1Div'>
                    <div className='text20'>
                        <br></br>
                        <h1> ¿Por qué elegir Sacamuelas?</h1>
                    
                    <br></br>
                    Desde que abrimos la clínica hace 150 años,
                    en Sacamuelas nos hemos caracterizado por tener como objetivo principal 
                    la salud y el bienestar de nuestros pacientes.
                    <br></br><br></br>
                    Nuestra fundadora, la ilustre odontóloga Dolores Fuertes, tenía un sueño;
                    Un mundo donde todo fueran sonrisas de blanco marfil y simétricas como las teclas de un piano.
                    <br></br><br></br>
                    Más de 150 años de servicio y 20 millones de bocas que hablan de nosotros.
                    </div>
                
                </div>
                <div className='whereAre'>
                    <div className='map'>
                        AQUI VA EL MAPA
                    </div>
                    <div className='whereText'>
                        AQUÍ ALGO DE TEXTO CON LA DIRECCIÓN Y EL CONTACTO
                    </div>

                </div>
            </div>    
          
            <div className='botTop'>
            <Card className='card M1'>Protesis dental</Card>
            <Card className='card M2'>Ortodoncia</Card>
            <Card className='card M3'>Ortodoncia invisible</Card>
            <Card className='card M4'>Limpieza</Card>
            
            </div>
            <div className='botBot'>
            <Card className='card M5'>Carilla dental</Card>
            <Card className='card M6'>Caries</Card>
            <Card className='card M7'>Halitosis</Card>
            <Card className='card M8'>Antirronquidos</Card>
            </div>
            <Footer></Footer>
            
        </div>
        
    )
}

export default Home
