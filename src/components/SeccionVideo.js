import React from 'react'
import { CardMedia, Container }  from '@mui/material';



export default function seleccionVideo(props) {
    const { titulo="Sin titulo", descripcion="Sin descripcion", video="https://www.youtube.com/embed/e9zZE5i8Vt4" } = props;
    return (
        <Container maxWidth="md" centered>
            <h1><b>{titulo}</b></h1>
            <p>{descripcion}</p>
            <CardMedia
                component="iframe"
                sx={{height:"70vh"}}
                image={video}
            />
        </Container>
        
    );
}
