import React from 'react'
import { Box, Typography } from '@mui/material';



export default function MenuAppBar(props) {
    const { titulo = "Sin título", link = "", subtitulo = "" } = props;
    return (
        <Box
            sx={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1)), url(${link})`,
                height: "50vh",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                paddingTop: "18vh",
                // display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                // fontSize: "4rem",
            }}
        >
            <Typography
                variant="h3"
                component="h2"
                sx={{
                    textAlign: 'center'
                }}
            >
                {titulo}
            </Typography>
            <br/>
            <Typography
                variant="h5"
                component="h4"
                sx={{
                    textAlign: 'center'
                }}
            >
                {subtitulo}
            </Typography>
        </Box>
    );
}