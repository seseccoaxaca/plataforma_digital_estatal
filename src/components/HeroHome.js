import React from 'react'
import { Box, Typography } from '@mui/material';



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
            {/* <div sx={{ padding: "2em"}}>
                titulo
            </div> */}
            <Typography
                variant="h3"
                component="h2"
                sx={{
                    textAlign: 'center'
                }}
            >
                {titulo}
            </Typography>
            
        </Box>
    );
}