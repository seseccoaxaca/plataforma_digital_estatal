import React from 'react'
import { Breadcrumbs, Link, Container, Box} from '@mui/material'; 


import NavigateNextIcon  from '@mui/icons-material/NavigateNext'

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  
  export default function CustomSeparator() {
    const breadcrumbs = [
      <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
        Plataforma Digital Estatal
      </Link>,
      <Link
        underline="hover"
        key="2"
        color="text.primary"
        href="/getting-started/installation/"
        onClick={handleClick}
      >
        Mesa de Ayuda
      </Link>
    ];
  
    return (
      <Box sx={{ bgcolor: '#cfe8fc'}} >
        <Container sx={{ py: '2vh' }} >
          <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
          >
              {breadcrumbs}
          </Breadcrumbs>
        </Container>
      </Box>


    );
  }