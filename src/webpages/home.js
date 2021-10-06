//file: src/webpages/home.js
import React from 'react';
import Modal from '../components/Modal';
// import Explora from '../components/explora';
import SeccionVideo from '../components/SeccionVideo';
// import Navigation from '../components/Navigation';
import { Container } from '@mui/material';

const Home = () => {
    const tit1 = "Plataforma Digital Nacional"
    const tit2 = "Mercado Digital Anticorrupción"
    const desc1 = "Una fuente de inteligencia para construir integridad y combatir la corrupción, que crea valor para el gobierno y la sociedad, a partir de grandes cantidades de datos."
    const desc2 = "El Mercado Digital Anticorrupción (MDA) es un espacio donde podrás encontrar diversas herramientas que facilitarán el desarrollo y conexión de los sistemas que conforman a la Plataforma Digital Nacional. Estas herramientas podrán ser utilizadas por todas las Instituciones que las requieran, ya que son de libre uso, haz click en 'Conoce más'."
    return (
        <Container>
            {/* <Navigation /> */}
            <Modal />
            <SeccionVideo titulo={tit1} descripcion={desc1} video="https://www.youtube.com/embed/e9zZE5i8Vt4"/>
            {/* <p>Este es el home</p> */}
            <SeccionVideo titulo={tit2} descripcion={desc2} video="https://www.youtube.com/embed/JQNPwOOG4yw"/>
            
        </Container>
    );
};
export default Home;