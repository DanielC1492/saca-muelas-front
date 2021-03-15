import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import Boton from '../../components/Boton/Boton'
import './Home.css'
import { Carousel } from 'antd';
import 'antd/lib/carousel/style/index.css'
import Footer from '../../components/Footer/Footer'

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
                   
                    <Carousel autoplay dotPosition='left' className='carousel'>

                        <div className='img1'> <img className='sexyDoctors' src='https://freedesignfile.com/upload/2017/12/Smiling-doctors-Stock-Photo.jpg'></img></div>
                        <div className='img2'><img className='bocaDentista' src='https://img.freepik.com/free-photo/woman-patient-dentist_1303-9364.jpg?size=626&ext=jpg&ga=GA1.2.611548398.1609027200'></img></div>
                        <div className='img3'><img className='dentistKid' src='https://mynaturaldentist.com/wp-content/uploads/2019/06/happy-gas-dentist-1680x760.jpg'></img></div>

                    </Carousel>   
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
