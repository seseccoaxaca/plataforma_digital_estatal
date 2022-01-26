import * as React from 'react';

import { AppBar, Box, Toolbar, Typography, IconButton, Menu, Button, MenuItem, Container } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import HelpIcon from '@mui/icons-material/Help';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import SearchIcon from '@mui/icons-material/Search';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

import { Link } from 'react-router-dom';

const pages = ['Iniciar sesión', 'Calidad de datos', 'Blog', 'Mesa de ayuda', 'Inicio'];


const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const { loginWithRedirect, isAuthenticated, user,logout } = useAuth0();

  return (
    <AppBar position="static" sx={{ backgroundColor:"#0B1D1F" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Plataforma digital estatal
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="lista de opciones"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                // display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Plataforma digital estatal
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' } }}>
            <Button component={Link} to="/" color="inherit" startIcon={<HomeIcon />}>Inicio</Button>  
            <Button color="inherit" component={Link} to="/mesa-ayuda" startIcon={<HelpIcon />}>Mesa de ayuda</Button>
            <Button color="inherit" target="_blank" href="https://blog-plataforma-digital-estatal.vercel.app/" startIcon={<FileCopyIcon />}>Blog</Button>
            <Button color="inherit" component={Link} to="/calidad-datos" startIcon={<SearchIcon />}>Calidad de datos</Button>
            
            {!isAuthenticated ? (
              <Button color="inherit" onClick={()=>{loginWithRedirect()}} startIcon={<PeopleAltIcon />}>Iniciar Sesión</Button>
            ) : <Button color="inherit" onClick={() => {logout()}} startIcon={<VerifiedUserIcon />}>{user.name}</Button>}
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
