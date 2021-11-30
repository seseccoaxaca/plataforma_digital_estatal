//file: src/webpages/home.js
import React, { useEffect, useState } from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import Hero from '../../components/HeroPages';
import Description from '../../components/Description';

import { Box } from '@mui/material';
import { DataGrid, GridToolbar, esES } from '@mui/x-data-grid';
import { esES as coreesES } from '@mui/material/locale';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useCookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const qs = require("qs")

const ServidoresContrataciones = () => {
    const [cookies, setCookie] = useCookies(['modal', 'token']);
    const [isLoaded, setIsLoaded] = useState(false);
    // eslint-disable-next-line
    const [error, setError] = useState(null);
    // eslint-disable-next-line
    const [respuesta, setRespuesta] = useState([]);
    const [resObj, setResObj] = useState(null);
    const [pageSize, setPageSize] = useState(10);


    useEffect(() => {
        let config = {}

        if (cookies.token === undefined) {
            const dataAuth = qs.stringify({
                'client_id': 'Client_SEseCC$2y$4',
                'grant_type': 'password',
                'username': 'GeNT0k3n64$2y$4',
                'password': '$3$ecCT0k3Ns',
                'scope': 'read',
                'client_secret': 'PassS3S3cc$2y$4'
            });

            config = {
                method: 'post',
                url: 'https://sesecc-pde.org.mx/oauth/token',  // http://132.226.123.35:9003/oauth/token
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: dataAuth
            };

            axios(config).then(function (response) {
                let token = "Bearer_" + response.data.access_token;
                setCookie("token", token, { path: '/', maxAge: 300 });
                fetchData(token);
            }).catch(function (error) {
                setError(error);
                console.log(error);
            });
        } else {
            fetchData(cookies.token);
        }

        function fetchData(token) {

            token = token.replace("Bearer_", "Bearer ");

            config = {
                method: 'post',
                url: 'https://sesecc-pde.org.mx/v1/spic', // http://132.226.123.35:8080/v1/spic
                headers: {
                    'Authorization': token,
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                    'Content-Type': 'application/json'
                },
                data: {
                    "pageSize": 38,
                }
            }

            axios(config)
                .then(function (response) {
                    let result = Object.entries(response.data.results);
                    setRespuesta(result);
                    setResObj(response.data.results);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        setIsLoaded(true);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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

    const columns = [
        { field: 'id', headerName: 'ID', type: 'number', width: 80, hide: true},
        { field: 'nombre', headerName: 'Nombre(s)', flex: 0.5, },
        { field: 'apellidos', headerName: 'Apellido(s)', flex: 0.6, },
        { field: 'institucion', headerName: 'Institución', flex: 1.5,},
        { field: 'puesto', headerName: 'Puesto', flex: 0.8,},
        { field: 'responsabilidad', headerName: 'Responsabilidad', flex: 0.5,},
    ];

    const theme = createTheme(
        esES,
        coreesES,
    );



    function DataTable() {

        let rows = [];
        if (resObj !== null) {
            if (isLoaded) {
                Object.entries(resObj).map(([key, value], i) => (
                    rows.push({ id: key, nombre: value.nombres, apellidos: value.primerApellido + " " + value.segundoApellido, institucion: value.institucionDependencia.nombre, puesto: value.puesto.nombre, responsabilidad: value.nivelResponsabilidad.length > 0 ? value.nivelResponsabilidad[0].valor : " - " })
                ))
            }
            return (
                <div style={{ height: 500, width: '100%' }}>
                    <ThemeProvider theme={theme}>
                        {isLoaded ? <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={pageSize}
                            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                            rowsPerPageOptions={[10, 20]}
                            pagination
                            checkboxSelection
                            components={{
                                Toolbar: GridToolbar,
                            }}
                        />
                            : <div>Cargando información</div>}
                    </ThemeProvider>
                </div>
            );
        }
    }
    


    return (
        <div>
            {cookies.modal !== "activo" ? <Redirect to='/' /> :
                <div >
                    <BreadCrumb />
                    <Hero titulo="Servidores públicos en contrataciones" subtitulo="Sistema de los servidores públicos que intervengan en procedimientos de contrataciones públicas" link="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <Description descripcion={descripcion} />
                    {isLoaded ? <Box sx={{ py: '5vh', mb: '2vh', mx: '10vw' }}>
                        {DataTable()}
                    </Box> : <div>Cargando...</div>}
                </div>
            }
        </div>
    );

};
export default ServidoresContrataciones;