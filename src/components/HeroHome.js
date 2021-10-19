import React from 'react'
import { Box } from '@mui/material';



export default function MenuAppBar(props) {
    const { titulo="Sin título", link=""} = props;
    return(
        <Box
            sx={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${link})`,
                height: "92vh",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontSize: "4rem",
            }}
        >
            {titulo}
        </Box>
    );
}