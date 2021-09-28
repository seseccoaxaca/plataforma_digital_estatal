import React from 'react'
import { AppBar, Box, Toolbar, Typography, IconButton, MenuItem, Menu } from '@mui/material';


import MenuIcon from '@mui/icons-material/Menu';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { Link } from 'react-router-dom';

export default function MenuAppBar() {
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
            Plataforma Digital Estatal
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MoreHorizIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >

                <Link to="/">
                  <MenuItem onClick={handleClose}>
                    Inicio
                  </MenuItem>
                </Link>
                <Link to="/mesa-ayuda">
                  <MenuItem onClick={handleClose}>
                    Mesa de ayuda
                  </MenuItem>
                </Link>
                <Link to="/calidad-datos">
                  <MenuItem onClick={handleClose}>
                    Calidad de datos
                  </MenuItem>
                </Link>
                <Link to="/especificaciones">
                  <MenuItem onClick={handleClose}>
                    Especificaciones
                  </MenuItem>
                </Link>

                <MenuItem onClick={handleClose}>Blog</MenuItem>
                <MenuItem onClick={handleClose}>Especificaciones</MenuItem>
                <MenuItem onClick={handleClose}>Iniciar Sesión</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

//   //file: src/components/Header.js
// import React from 'react';
// import logo from '../images/xvlogo.png';
// const Header = () => {
// return (
//     <header>
//         <img src={logo} alt="Xcelvations Logo" height="40" />
//     </header>
//     );
// };
// export default Header;