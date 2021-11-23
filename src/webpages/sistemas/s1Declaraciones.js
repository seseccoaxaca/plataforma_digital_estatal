//file: src/webpages/home.js
import React, { useState } from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import Hero from '../../components/HeroPages';
import Description from '../../components/Description';

import { useCookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const qs = require("qs")

const Home = () => {
    //const [cookies, setCookie] = useCookies(['modal','token']);
    const [cookies] = useCookies(['modal', 'token']);

    // function handleCookie(){
    //     setCookie("token", "activo", { path: '/', maxAge: 60 * 60 * 24 });
    // };


    const [token, setToken] = useState([]);

    const dataAuth = qs.stringify({
        'client_id': 'Client_SEseCC$2y$4',
        'grant_type': 'password',
        'username': 'GeNT0k3n64$2y$4',
        'password': '$3$ecCT0k3Ns',
        'scope': 'read',
        'client_secret': 'PassS3S3cc$2y$4'
    });

    const configAuth = {
        method: 'post',
        url: 'http://132.226.123.35:9003/oauth/token',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: dataAuth
    };

    axios(configAuth).then(function (response) {
        let token = "Bearer " + response.data.access_token;
        setToken({ token })
        console.log(token);

    }).catch(function (error) {
        console.log(error);
    });

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
            {cookies.modal !== "activo" ? <Redirect to='/' /> :
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