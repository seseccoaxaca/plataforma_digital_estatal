//file: src/webpages/home.js
import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
// import Panel from '../components/Panel';
import Hero from '../components/HeroPages';
import Description from '../components/Description';

import { useCookies } from 'react-cookie';
import  { Redirect } from 'react-router-dom'

const Home = () => {
    const descripcion = (
        <p>
            Estas especificaciones se refieren a los campos mínimos de datos 
            que debe de contener cada sistema, así como los estándares que 
            debe de seguir cada campo para ser interoperable con la Plataforma 
            Digital Nacional. Esto es lo que permite que los sistemas de aquellos 
            responsables de generar los datos estén ordenados y puedan ser 
            consultados en la PDN. <br/><br/>
            Además, en esta sección podrás consultar información acerca del Open API 
            Specification (OAS), el cual es un formato de especificación que 
            permite describir de manera precisa las características con las que 
            deberán contar las APIs que integrarán a la PDN.<br/><br/>
            Actualmente están disponibles las especificaciones para los Sistemas 1, 2 y 3
        </p>
    );
    return (
        <div>
            {cookies.modal !== "activo" ? <Redirect to='/'  /> : 
                <div>
                    <BreadCrumb />
                    <Hero 
                        titulo={"Especificaciones técnicas"} 
                        subtitulo={"Encontrarás las reglas y características con las que deben contar los datos para la interoperabilidad"} 
                        link="https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    />
                    <Description descripcion={descripcion} />
                </div>
            }
        </div>
    );
};
export default Home;