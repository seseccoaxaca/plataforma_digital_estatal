//file: src/webpages/home.js
import React from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import Hero from '../../components/HeroPages';
import Description from '../../components/Description';

import { useCookies } from 'react-cookie';
import  { Redirect } from 'react-router-dom';

const Home = () => {
    const [cookies] = useCookies(['modal']);
    
    const descripcion = (
        <div>
            Aquí encontrarás la siguiente información:
            <br />
            <ul>
                <li>La evolución patrimonial de las y los funcionarios</li>
                <li>La trayectoria laboral de las y los funcionarios</li>
                <li>Sus declaraciones sobre posibles conflictos de interés</li>
            </ul>
        </div>
    );

    return (
        <div>
	        {cookies.modal !== "activo" ? <Redirect to='/'  /> : 
                <div>
                    <BreadCrumb />
                    <Hero titulo="Declaraciones" subtitulo="Sistema de evolución patrimonial, de declaración de intereses y constancia de presentación de declaración fiscal" link="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <Description descripcion={descripcion} />
                </div>
            }
        </div>
    );
};
export default Home;