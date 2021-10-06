import React from 'react';

import { Box } from '@mui/material';
import { Typography } from '@mui/material';

import Image from '../images/descarga.png'; // Import using relative path

export default function Panel(props) {
  const { titulo="Sin título", subtitulo="" } = props;

    return (
      <Box sx={{ bgcolor: '#E2E2E2'}} >
        <Box
          sx={{
            width: '100vw',
            height: '45vh',
            paddingTop: '18vh',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${Image})`
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
      </Box>
    );
  }
