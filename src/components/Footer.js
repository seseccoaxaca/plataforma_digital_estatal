import React from 'react'

import { CssBaseline, GlobalStyles, Grid, Link, Typography, Container } from '@mui/material';


export default function Footer() {
    const footers = [
        
        // {
        //     title: 'Sistemas',
        //     description: [
        //         'Plataforma Digital Nacional',
        //         'Inteligencia de datos Anticorrupción'
        //     ],
        // },
        
        {
            title: 'Sistemas',
            // description: ['Servidores en contrataciones'],
            description: ['Declaraciones', 'Servidores en contrataciones', 'Catálogos de empresas', 'Sancionados', 'Información y comunicación'],
        },
        {
            title: 'Sistemas',
            description: ['Denuncias', 'Contrataciones', 'Recomendaciones', 'Indicadores de evaluación'],
        },
        {
            title: 'PDE',
            description: ['Preguntas frecuentes', 'Términos de uso'],
            // description: ['Blog', 'Preguntas frecuentes', '¿Qué es la PDN?', 'Términos de uso'],
        },
    ];

    return (
    <React.Fragment>
        <GlobalStyles />
        <CssBaseline />
        {/* Footer */}
            <Container
            component="footer"
            sx={{
                borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                mt: 4,
                py: [3, 3],
                borderBottom: '1px solid #eaeaea'
            }}
            >
            <Grid container spacing={2} justifyContent="space-between">
                <Grid item xs={6} sm={3} key="Sistemas">
                    <Typography variant="h6" color="text.primary" gutterBottom>
                        Sistemas
                    </Typography>
                    <ul>
                        <li key="declaraciones">
                            <Typography variant="subtitle1" color="text.secondary">
                                Declaraciones
                            </Typography>                            
                        </li>
                        <li key="servidores">
                            <Link href="/sistemas/servidores" variant="subtitle1" color="text.secondary">
                                Servidores en contrataciones
                            </Link>
                        </li>
                        <li key="catalogos">
                            <Typography variant="subtitle1" color="text.secondary">
                                Catálogos de empresas
                            </Typography>                            
                        </li>
                        <li key="sancionados">
                            <Typography variant="subtitle1" color="text.secondary">
                                Sancionados
                            </Typography>                            
                        </li>
                        <li key="informacion">
                            <Typography variant="subtitle1" color="text.secondary">
                                Información y comunicación
                            </Typography>                            
                        </li>
                        <li key="denuncias">
                            <Typography variant="subtitle1" color="text.secondary">
                                Denuncias
                            </Typography>                            
                        </li>
                    </ul>
                </Grid>

                <Grid item xs={6} sm={3} key="PDE">
                    <Typography variant="h6" color="text.primary" gutterBottom>
                        Sistemas Estatales
                    </Typography>
                    <ul>
                        <li key="informacion">
                            <Typography variant="subtitle1" color="text.secondary">
                                Contrataciones
                            </Typography>                            
                        </li>
                        <li key="informacion">
                            <Typography variant="subtitle1" color="text.secondary">
                                Recomendaciones
                            </Typography>                            
                        </li>
                        <li key="informacion">
                            <Typography variant="subtitle1" color="text.secondary">
                                Indicadores de evaluación
                            </Typography>                            
                        </li>
                    </ul>
                </Grid>
                
                <Grid item xs={6} sm={3} key="pde">
                    <Typography variant="h6" color="text.primary" gutterBottom>
                        PDE
                    </Typography>
                    <li key="servidores">
                        <Link target="_blank" href="https://blog-plataforma-digital-estatal.vercel.app/" variant="subtitle1" color="text.secondary">
                            Blog
                        </Link>
                    </li>
                    <li key="servidores">
                        <Link href="/mesa-ayuda" variant="subtitle1" color="text.secondary">
                            Preguntas frecuentes
                        </Link>
                    </li>
                    <li key="servidores">
                        <Link target="_blank" href="http://www.periodicooficial.oaxaca.gob.mx/files/2021/01/SEC03-03RA-2021-01-16.pdf" variant="subtitle1" color="text.secondary">
                            Términos de uso
                        </Link>
                    </li>
                </Grid>





            </Grid>

            </Container>
        {/* End footer */}
    </React.Fragment>
    );
}