//file: src/webpages/home.js
import React, { useEffect, useState } from 'react';
import BreadCrumb from '../../components/BreadCrumb';
import Hero from '../../components/HeroPages';
import Description from '../../components/Description';
import Busqueda from '../../components/Busqueda';

// 
import { tableCellClasses, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
//

import { useCookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const qs = require("qs")

const ServidoresContrataciones = () => {
    const [cookies, setCookie] = useCookies(['modal', 'token']);
    const [isLoaded, setIsLoaded] = useState(false);
    // eslint-disable-next-line
    const [error, setError] = useState(null);
    const [respuesta, setRespuesta] = useState([]);
    const [resObj, setResObj] = useState(null);




    useEffect(() => {
        function fetchData() {

            let token = cookies.token.replace("Bearer_", "Bearer ");

            const configPetition = {
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

            axios(configPetition)
                .then(function (response) {
                    let result = Object.entries(response.data.results);
                    setRespuesta(result);
                    
                    setResObj(response.data.results);
                    
                    setIsLoaded(true);
                    console.log(response.data.results);
                })
                .catch(function (error) {
                    console.log(error);
                });

        }

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
                url: 'https://sesecc-pde.org.mx/oauth/token',  // http://132.226.123.35:9003/oauth/token
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: dataAuth
            };

            axios(configAuth).then(function (response) {
                let token = "Bearer_" + response.data.access_token;
                setCookie("token", token, { path: '/', maxAge: 300 });
                // window.alert("token: " + token);
                fetchData();
            }).catch(function (error) {
                setError(error);
                console.log(error);
            });


        } else {
            setIsLoaded(true);
            fetchData();
        }
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


    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));


    function TableServidores() {
        if(resObj !== null){
            return (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Nombre</StyledTableCell>
                                <StyledTableCell align="center">Apellidos</StyledTableCell>
                                <StyledTableCell align="center">Institución</StyledTableCell>
                                <StyledTableCell align="center">Puesto</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
    
                            {
                            isLoaded ? 
                            Object.entries(resObj).map(([key, value], i) => (
    
                                <StyledTableRow 
                                    key={key}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <StyledTableCell component="th" scope="row">
                                        {value.nombres}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">{value.primerApellido + " " + value.segundoApellido}</StyledTableCell>
                                    <StyledTableCell align="left">{value.institucionDependencia.nombre}</StyledTableCell>
                                    <StyledTableCell align="left">{value.puesto.nombre}</StyledTableCell>
                                </StyledTableRow >
                            ))
                            
                            : <div>Cargando...</div>
                            
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            );
        } else {
            return <div>Cargando...</div>
        }

        
    }


    return (
        <div>
            {cookies.modal !== "activo" ? <Redirect to='/' /> :
                <div >
                    <BreadCrumb />
                    <Hero titulo="Servidores públicos en contrataciones" subtitulo="Sistema de los servidores públicos que intervengan en procedimientos de contrataciones públicas" link="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <Description descripcion={descripcion} />
                    <Box sx={{ py: '5vh', mb: '2vh', mx: '10vw' }}>
                        <Busqueda />
                    </Box>
                    {isLoaded ? <Box sx={{ py: '5vh', mb: '2vh', mx: '10vw' }}>
                        {TableServidores()}
                    </Box> : <div>Cargando...</div>}
                </div>
            }
        </div>
    );

};
export default ServidoresContrataciones;