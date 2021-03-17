import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import Boton from '../../components/Boton/Boton'
import './Home.css'
import { Carousel } from 'antd';
import 'antd/lib/carousel/style/index.css'
import Footer from '../../components/Footer/Footer'
import promo from '../../img/promo.png';

import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';


const Home = () => {
    return (
        <div className='homeContainer'>
            <Navbar/>
            {/* <div className='buttonStyle'>
                    <Boton name='Register' destination='register'/>
                </div> */}
            <div className='top'>
                   
                    <div className='promoIMG'>
                        <img src={promo} alt=''></img>    
                    </div>   
            </div>
            <div className='mid'>
            
            <div className='text1Div'>
                    <div className='text'>
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
                    {/* <img src='https://images.pexels.com/photos/5473079/pexels-photo-5473079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'></img> */}
                
                </div>
                
            </div>
            <div className='botTop'>
            <Card className='cardMarket1'>Protesis dental</Card>
            <Card className='cardMarket2'>Ortodoncia</Card>
            <Card className='cardMarket3'>Ortodoncia invisible</Card>
            <Card className='cardMarket4'>Limpieza</Card>
            
            </div>
            <div className='botBot'>
            <Card className='cardMarket5'>Carilla dental</Card>
            <Card className='cardMarket6'>Caries</Card>
            <Card className='cardMarket7'>Halitosis</Card>
            <Card className='cardMarket8'>Antirronquidos</Card>
            </div>
            <Footer></Footer>
            
        </div>
        
    )
}

export default Home
