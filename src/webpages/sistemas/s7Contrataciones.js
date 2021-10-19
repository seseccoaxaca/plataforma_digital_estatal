//file: src/webpages/home.js
import React from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import Hero from '../../components/HeroPages';
import Description from '../../components/Description';

const Home = () => {
    return (
        <div>
            <BreadCrumb />
            <Hero titulo="Contrataciones públicas" subtitulo="Sistema de información pública de contrataciones" link="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <Description descripcion={"Explora y visualiza las contrataciones"} />
        </div>
    );
};
export default Home;