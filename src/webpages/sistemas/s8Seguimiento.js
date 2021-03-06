//file: src/webpages/home.js
import React from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import Hero from '../../components/HeroPages';
import Description from '../../components/Description';

import { useCookies } from 'react-cookie';
import  { Redirect } from 'react-router-dom';

const Home = () => {
    const [cookies] = useCookies(['modal']);

    return (
        <div>
	        {cookies.modal !== "activo" ? <Redirect to='/'  /> : 
                <div>
                    <BreadCrumb />
                    <Hero titulo="Evaluación de la calidad de los datos" link="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <Description descripcion={"En esta sección encontrarás una metodología que proponemos para evaluar la calidad de Datos Abiertos. Con esta metodología se evaluaron los 44 conjuntos de datos de la Guía de Apertura Anticorrupción."} />
                </div>
            }
        </div>
    );
};
export default Home;