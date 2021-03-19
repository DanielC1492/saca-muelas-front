import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import './Home.css'
import Footer from '../../components/Footer/Footer'
import 'antd/lib/carousel/style/index.css'
import promo from '../../img/promo.png';
import whereMap from '../../img/whereMap.png';
import whatsappIcon from '../../img/whatsappIcon.png';
import emailIcon from '../../img/emailIcon.png';
import protesis from '../../img/protesis.png';
import alitosis from '../../img/alitosis.png';
import brackets from '../../img/brackets.png';
import caries from '../../img/caries.png';
import carilla from '../../img/carilla.png';
import limpieza from '../../img/limpieza.png';
import ronquido from '../../img/ronquido.png';
import invisible from '../../img/invisible.png';


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
                        <img className='whereMap' src={whereMap} alt=''></img>
                    </div>
                    <div className='whereText'>
                        <h2>Estamos en Almirante Cadarso N 23.</h2><br></br>
                        <h3>Muy cerca de la Plaza de Cánovas, a solo 10 minutos del centro de Valencia</h3><br></br><br></br>
                        <h2>También puedes contactar con nosotros a través de nuestro teléfono 24 horas o por correo electrónico.</h2>
                        <div className='phoneIcon'><img className='whatsappIcon' src={whatsappIcon}></img></div>
                        <h4>543098761</h4>
                        <div className='mailIcon'><img className='emailIcon' src={emailIcon}></img></div>
                        <h4>sacamuelasClinic@teeth.com</h4>
                    </div>

                </div>
            </div>    
          
            <div className='botTop'>
            <Card className='card M1'>
                <div className='cardText'>Protesis dental</div>
                <div className='cardIcon'>
                    <img className='protesisImg' src={protesis}alt=''></img>
                </div>
                </Card>
            <Card className='card M2'>
                <div className='cardText'>Ortodoncia</div>
                <div className='cardIcon'>
                    <img className='bracketImg' src={brackets} alt=''></img>
                </div>
                </Card>
            <Card className='card M3'>
                <div className='cardText'>Ortodoncia invisible</div>
                <div className='cardIcon'>
                    <img className='invisibleImg' src={invisible} alt=''></img>
                </div>
                </Card>
            <Card className='card M4'>
                <div className='cardText'>Limpieza</div>
                <div className='cardIcon'>
                    <img className='limpiezaImg' src={limpieza} alt=''></img>
                </div>
                </Card>
            
            </div>
            <div className='botBot'>
            <Card className='card M5'>
                <div className='cardText'>Carilla dental</div>
                <div className='cardIcon'>
                    <img className='carillaImg' src={carilla} alt=''></img>
                </div>
                </Card>
            <Card className='card M6'>
                <div className='cardText'>Caries</div>
                <div className='cardIcon'>
                    <img className='cariesImg' src={caries} alt=''></img>
                </div>
                </Card>
            <Card className='card M7'>
                <div className='cardText'>Halitosis</div>
                <div className='cardIcon'>
                    <img className='alitosisImg' src={alitosis} alt=''></img>
                </div>
                </Card>
            <Card className='card M8'>
                <div className='cardText'>Antirronquidos</div>
                <div className='cardIcon'>
                    <img className='ronquidosImg' src={ronquido} alt=''></img>
                </div>
                </Card>
            </div>
            
            
            <Footer/>
            
        </div>
        
    )
}

export default Home
