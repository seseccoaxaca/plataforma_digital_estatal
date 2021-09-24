import React from 'react';

import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import Image from '../img/descarga.png'; // Import using relative path

export default function Panel() {
    return (
      <Box sx={{ bgcolor: 'orange'}} >
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
              Mesa de Ayuda
          </Typography>

        </Box>
      </Box>
    );
  }
