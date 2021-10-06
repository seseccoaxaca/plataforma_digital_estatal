import React from 'react'
import { AppBar, Box, Toolbar, Typography, IconButton, Stack , Button } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import HelpIcon from '@mui/icons-material/Help';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import SearchIcon from '@mui/icons-material/Search';
import TouchAppIcon from '@mui/icons-material/TouchApp';

import { Link } from 'react-router-dom';

export default function MenuAppBar() {

  return ( 
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor:"#0B1D1F" }}> 
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Plataforma digital estatal
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button component={Link} to="/" color="inherit" startIcon={<HomeIcon />}>Inicio</Button>  
            <Button color="inherit" component={Link} to="/mesa-ayuda" startIcon={<HelpIcon />}>Mesa de ayuda</Button>
            <Button color="inherit" component={Link} to="/blog" startIcon={<FileCopyIcon />}>Blog</Button>
            <Button color="inherit" component={Link} to="/calidad-datos" startIcon={<SearchIcon />}>Calidad de datos</Button>
            <Button color="inherit" component={Link} to="/especificaciones" startIcon={<TouchAppIcon />}>Especificaciones</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
