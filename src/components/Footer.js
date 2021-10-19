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
            description: ['Declaraciones', 'Servidores en contrataciones', 'Catálogos de empresas', 'Sancionados', 'Información y comunicación'],
        },
        {
            title: 'Sistemas',
            description: ['Denuncias públicas','Contrataciones','Seguimiento','Indicadores'],
        },
        {
            title: 'PDE',
            description: ['Blog', 'Preguntas frecuentes', '¿Qué es la PDN?', 'Términos de uso'],
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
            }}
            >
            <Grid container spacing={2} justifyContent="space-between">
                {footers.map((footer) => (
                <Grid item xs={6} sm={3} key={footer.title}>
                    <Typography variant="h6" color="text.primary" gutterBottom>
                    {footer.title}
                    </Typography>
                    <ul>
                    {footer.description.map((item) => (
                        <li key={item}>
                            <Link href={item} variant="subtitle1" color="text.secondary">
                                {item}
                            </Link>
                        </li>
                    ))}
                    </ul>
                </Grid>
                ))}
            </Grid>

            </Container>
        {/* End footer */}
    </React.Fragment>
    );
}