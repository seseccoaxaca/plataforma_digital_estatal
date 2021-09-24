//file: src/webpages/home.js
import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Panel from '../components/Panel';
import Description from '../components/Description';
import Accordion from '../components/Accordion';

const Home = () => {
    return (
        <div>
            <BreadCrumb />
            <Panel titulo={"Evaluación de la calidad de los datos"} />
            <Description descripcion={"En esta sección encontrarás una metodología que proponemos para evaluar la calidad de Datos Abiertos. Con esta metodología se evaluaron los 44 conjuntos de datos de la Guía de Apertura Anticorrupción."} />
            <Accordion />
        </div>
    );
};
export default Home;