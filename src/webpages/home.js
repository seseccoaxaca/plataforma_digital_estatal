//file: src/webpages/home.js
import React from 'react';
import Modal from '../components/Modal';
import HeroHome from '../components/HeroHome';
import GridB from '../components/GridButtons';
import SeccionVideo from '../components/SeccionVideo';
// import Navigation from '../components/Navigation';
import { Box} from '@mui/material';

import { useCookies } from 'react-cookie';

import CookieConsent from "react-cookie-consent";

const Home = () => {
    const tit1 = "Plataforma Digital Estatal"
    const tit2 = "Mercado Digital Anticorrupción"
    const desc1 = "Una fuente de inteligencia para construir integridad y combatir la corrupción, que crea valor para el gobierno y la sociedad, a partir de grandes cantidades de datos."
    const desc2 = "El Mercado Digital Anticorrupción (MDA) es un espacio donde podrás encontrar diversas herramientas que facilitarán el desarrollo y conexión de los sistemas que conforman a la Plataforma Digital Nacional. Estas herramientas podrán ser utilizadas por todas las Instituciones que las requieran, ya que son de libre uso, haz click en 'Conoce más'."
    const [cookies] = useCookies(['modal']);

    return (

        <div>
            <HeroHome
                link="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                titulo="Inteligencia anticorrupción con datos" 
            />
            <Box bgcolor="#E2E2E2">
                <GridB />
            </Box>
            <Box>
                {/* <Navigation /> */}
                
                {cookies.modal !== "activo" && <Modal  /> }
                
                <SeccionVideo titulo={tit1} descripcion={desc1} video="https://www.youtube.com/embed/e9zZE5i8Vt4"/>
                {/* <p>Este es el home</p> */}
                <SeccionVideo titulo={tit2} descripcion={desc2} video="https://www.youtube.com/embed/JQNPwOOG4yw"/>
                <CookieConsent buttonText="Entendido">Este sitio usa cookies, revisa nuestro aviso de privacidad para <a rel="noopener" rel="noreferrer"  target="_blank" href="https://drive.google.com/file/d/1XnECmFSTvScLkJ_4a5vRcdRxVTK5ansB/view?usp=sharing" style={{color:"#AEB5CA"}}> más información.</a>
                </CookieConsent>
            </Box>
        </div>
    );
};
export default Home;