//file: src/webpages/home.js
import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Panel from '../components/Panel';
import Description from '../components/Description';

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
            <BreadCrumb />
            <Panel 
                titulo={"Especificaciones técnicas"} 
                subtitulo={"Encontrarás las reglas y características con las que deben contar los datos para la interoperabilidad"} 
            />
            <Description descripcion={descripcion} />
        </div>
    );
};
export default Home;