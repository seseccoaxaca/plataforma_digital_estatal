import React from 'react'

import { Box, Link, Typography, Container } from '@mui/material';


function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary">
        {'Copyright © '}
        <Link color="inherit" href="#">
          PDE
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}


export default function StickyFooter() {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                textAlign: 'center',
                backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                    ? theme.palette.grey[200]
                    : theme.palette.grey[800],
            }}
            >
            <Container>
                <Typography variant="body1">
                Plataforma Digital Estatal.
                </Typography>
                <Copyright />
            </Container>
        </Box>
    );
}