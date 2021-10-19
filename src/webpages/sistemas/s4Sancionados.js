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
                <li>Consulta los servidores sancionados (inhabilitados) por institución, a nivel federal y/o estatal</li>
                <li>Obtén datos del servidor como: nombre, puesto, institución donde cometió la falta</li>
                <li>Obtén los datos de la sanción impuesta al servidor: plazo, tipo de falta, causa, etc.</li>
            </ul>
        </div>
    );
    return (
        <div>
	        {cookies.modal !== "activo" ? <Redirect to='/'  /> : 
                <div>
                    <BreadCrumb />
                    <Hero titulo="Sancionados" subtitulo="Sistema estatal de Servidores públicos y particulares sancionados" link="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <Description descripcion={descripcion} />
                </div>
            }
        </div>

    );
};
export default Home;