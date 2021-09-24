//file: src/webpages/home.js
import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Panel from '../components/Panel';
import Navigation from '../components/Navigation';
import Description from '../components/Description';
import Accordion from '../components/Accordion';

const Home = () => {
    return (
        <div>
            <BreadCrumb />
            <Panel titulo={"Mesa de ayuda"} />
            <Description descripcion={"Consulta las dudas más frecuentes sobre el desarrollo y construcción de la PDN, además encontrarás preguntas y respuestas sobre los datos que conforman la PDN así como un correo electrónico de apoyo en caso de no haber solucionado tus dudas."} />
            <Accordion />
            <Navigation />
            <h1>PAGINA DE MESA DE AYUDA</h1>
            <p>ESTA ES LA PAGINA DE MESA DE AYUDA</p>
        </div>
    );
};
export default Home;