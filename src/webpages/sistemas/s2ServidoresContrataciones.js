//file: src/webpages/home.js
import React, { useEffect, useState } from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import Hero from '../../components/HeroPages';
import Description from '../../components/Description';

import { useCookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const qs = require("qs")

const Home = () => {
    const [cookies, setCookie] = useCookies(['modal', 'token']);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dependencias, setDependencias] = useState([]); //dependencias
    const [error, setError] = useState(null); //error


    useEffect(() => {
        if (cookies.modal === 'activo' && cookies.token === undefined) {

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
                let token = "Bearer_" + response.data.access_token;
                // setDependencias({ token })
                setCookie("token", token, { path: '/', maxAge: 300 });
                setIsLoaded(true);
                window.alert("token: " + token);

            }).catch(function (error) {
                console.log(error);
            });


        } else {
            let token = cookies.token;
            token = token.replace("Bearer_", "Bearer ");

            const configPetition = {
                method: 'post',
                url: 'http://132.226.123.35:8080/v1/spic',
                headers: {
                    'Authorization': token,
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                    'Content-Type': 'application/json'
                }
            }

            axios(configPetition)
                .then(function (response) {
                    window.alert(JSON.stringify(response.data));
                    console.log(JSON.stringify(response.data));
                })
                .catch(function (error) {
                    window.alert(error);
                    console.log(error);
                });
        }



    }, [])



    const descripcion = (
        <div>
            Aquí encontrarás la siguiente información:
            <br />
            <ul>
                <li>Consulta los servidores que intervienen en procesos de contratación por institución, a nivel federal y/o estatal</li>
                <li>Obtén datos del servidor como: nombre, puesto, institución</li>
            </ul>
        </div>
    );



    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/users/")
    //         .then(res => res.json())
    //         .then(
    //             (data) => {
    //                 setIsLoaded(true);
    //                 setDependencias(data);
    //             },
    //             (error) => {
    //                 setIsLoaded(true);
    //                 setError(error);
    //             }
    //         )
    // }, [])

    // if (error) {
    //     return <div>
    //         {cookies.modal !== "activo" ? <Redirect to='/' /> :
    //             <div>
    //                 <BreadCrumb />
    //                 <Hero titulo="Servidores públicos en contrataciones" subtitulo="Sistema de los servidores públicos que intervengan en procedimientos de contrataciones públicas" link="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    //                 <Description descripcion={descripcion} />
    //                 <div>Error: {error.message}</div>;
    //             </div>
    //         }
    //     </div>
    // } else if (!isLoaded) {
    //     return <div>
    //         {cookies.modal !== "activo" ? <Redirect to='/' /> :
    //             <div>
    //                 <BreadCrumb />
    //                 <Hero titulo="Servidores públicos en contrataciones" subtitulo="Sistema de los servidores públicos que intervengan en procedimientos de contrataciones públicas" link="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    //                 <Description descripcion={descripcion} />
    //                 <div>Cargando...</div>;
    //             </div>
    //         }
    //     </div>
    // } else {
    //     return (
    //         <div>
    //             {cookies.modal !== "activo" ? <Redirect to='/' /> :
    //                 <div>
    //                     <BreadCrumb />
    //                     <Hero titulo="Servidores públicos en contrataciones" subtitulo="Sistema de los servidores públicos que intervengan en procedimientos de contrataciones públicas" link="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    //                     <Description descripcion={descripcion} />
    //                     <ul>
    //                         {dependencias.map(dependencia => (
    //                             <li key="{dependencia.id}">
    //                                 {dependencia.name}
    //                             </li>
    //                         ))}
    //                     </ul>
    //                 </div>
    //             }
    //         </div>
    //     );
    // }


    return (
        <div>
            {cookies.modal !== "activo" ? <Redirect to='/' /> :
                <div>
                    <BreadCrumb />
                    <Hero titulo="Servidores públicos en contrataciones" subtitulo="Sistema de los servidores públicos que intervengan en procedimientos de contrataciones públicas" link="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <Description descripcion={descripcion} />
                    {isLoaded ? <p>{dependencias}</p> : <div>{error}</div>}
                </div>
            }
        </div>
    );






    // const [todos, setTodos] = useState([]);
    // const url = 'http://132.226.123.35:8080/v1/spic'

    // const myHeaders = new Headers();
    // myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkdlTlQwazNuNjQkMnkkNCIsImp0aSI6IlA3NzBWYjE0Iiwic2NvcGUiOiJyZWFkICIsImlhdCI6MTYzNzU0OTMxNiwiZXhwIjoxNjM3NTQ5NjE2fQ.sIQlyfQINudGvmQyikc3B90yVZBuI5QwmGwLH7bsu7g");

    // const requestOptions = {
    //     method: 'POST',
    //     headers: myHeaders,
    //     redirect: 'follow'
    // };

    // const fetchApi = async () => {
    //     const response = await fetch(url, requestOptions)
    //     const responseJSON = await response.json()
    //     setTodos(responseJSON)
    //     console.log(responseJSON)
    // }

    // useEffect(() => {
    //     fetchApi()
    // })





    // return (
    //     <div>
    //         {cookies.modal !== "activo" ? <Redirect to='/' /> :
    //             <div>
    //                 <BreadCrumb />
    //                 <Hero titulo="Servidores públicos en contrataciones" subtitulo="Sistema de los servidores públicos que intervengan en procedimientos de contrataciones públicas" link="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    //                 <Description descripcion={descripcion} />
    //             </div>
    //         }
    //     </div>
    // );
};
export default Home;